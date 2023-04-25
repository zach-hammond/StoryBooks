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

    async addWager(userId: number, gameId: number, amount: number) {
        const wager = prisma.wager.create({
            data: {
                userId: userId,
                gameId: gameId,
                amount: amount
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