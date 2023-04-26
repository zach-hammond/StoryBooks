import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class GameService {
    async addGame(title: string, privateGame: boolean, userId: number) {
        return prisma.game.create({
            data: {
                title: title,
                private: privateGame,
                ownerId: userId
            },
        });
    }

    async getGame(gameId:number) {
        return prisma.game.findUnique({
            where: {
                id: gameId,
            },
            include: {
                wagers: {
                    include: {
                        user: true
                    }
                },
            },
        });
    }

    async listGames() {
        return prisma.game.findMany({
            include: {
                wagers: true
            }
        });
    }

    async addWager(userId: number, gameId: number, amount: number, outcome: boolean) {
        return prisma.wager.create({
            data: {
                userId: userId,
                gameId: gameId,
                amount: amount,
                outcome: outcome
            },
        });
    }

    async closeGame(gameId: number, outcome: boolean) {
        await prisma.game.update({
            where: {
                id: gameId
            },
            data: {
                outcome: outcome
            }
        });
        const wagers = await prisma.wager.findMany({
            where: {
                gameId: gameId,
            }
        });

        let totalTrue = 0;
        let totalFalse = 0;
        for (const wager of wagers) {
            if (wager.outcome) {
                totalTrue += wager.amount;
            } else {
                totalFalse += wager.amount;
            }
        }
        for (const wager of wagers) {
            const payout = wager.outcome == outcome ?
                (wager.outcome ? wager.amount / totalTrue * totalFalse : wager.amount / totalFalse * totalTrue) :
                wager.amount * -1;
            await prisma.wager.update({
                where: {
                    id: wager.id
                },
                data: {
                    payout: payout
                }
            })
        }
    }
}

const gameService = new GameService();
export default gameService;