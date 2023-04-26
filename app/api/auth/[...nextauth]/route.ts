import type {NextAuthOptions} from "next-auth";
import NextAuth, {User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserService from "@/lib/UserService";

const authOptions: NextAuthOptions = {
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

          const data = await UserService.authenticate(credentials.email, credentials.password);
          if (data) {
              return data as unknown as User;
          }
          return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
        session.user.id = token.sub;
        return session;
    },
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
