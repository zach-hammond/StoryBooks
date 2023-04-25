import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class GameService {
    async addGame(title: string, privateGame: boolean) {
        const game = prisma.game.create({
            data: {
                title: title,
                private: privateGame,
                ownerId: 1
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
}

const gameService = new GameService();
export default gameService;