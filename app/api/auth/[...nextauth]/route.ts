import prisma from "@/lib/prisma";
import NextAuth, {User} from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: 'username',
      name: 'Storybooks login',
      credentials: {
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
          if (!credentials) {
              return null;
          }

          const data = await prisma.user.findFirst({  where: { email: credentials.email, pwd: credentials.password }
        });
          if (data) {
              return data as unknown as User;
          }
          return null;
      },
  }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
