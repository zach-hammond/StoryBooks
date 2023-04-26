import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserService {
    async authenticate(email: string, password: string) {
        return prisma.user.findFirst({
            where: {
                email: email,
                pwd: password
            }
        });
    }
}
const userService = new UserService();
export default userService;