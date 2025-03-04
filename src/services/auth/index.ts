import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "../database/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = {
        ...session.user,
        id: user.id,
      };
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: process.env.SESSION_COOKIE_NAME || "authenticationjs.session-token",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Definir como true em produção
        sameSite: "lax",
      },
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
