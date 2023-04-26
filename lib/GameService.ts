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
        return prisma.game.findMany();
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
}

const gameService = new GameService();
export default gameService;