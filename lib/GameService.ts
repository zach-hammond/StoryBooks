import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class GameService {
    async addGame(title: string, privateGame: boolean, userId: number) {
        const game = prisma.game.create({
            data: {
                title: title,
                private: privateGame,
                ownerId: userId
            },
        });
        game.then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
        });
        return game
    }

    async getGame(gameId:number) {
        const game = prisma.game.findUnique({
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
        game.then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
        });
        return game
    }

    async listGames() {
        const games = prisma.game.findMany();
        games.then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
        });
        return games;
    }

    async addWager(userId: number, gameId: number, amount: number, outcome: boolean) {
        const wager = prisma.wager.create({
            data: {
                userId: userId,
                gameId: gameId,
                amount: amount,
                outcome: outcome
            },
        });
        wager.then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
        });
        return wager
    }
}

const gameService = new GameService();
export default gameService;