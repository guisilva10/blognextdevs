import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../database/prisma";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if credentials exist
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email e senha são obrigatórios");
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        // Compare the provided password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );

        if (!isPasswordCorrect) {
          throw new Error("Senha incorreta");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Adiciona o ID do usuário à sessão a partir do token JWT
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Adiciona o ID do usuário ao token JWT
      if (user) {
        token.sub = user.id;
      }
      return token;
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
  session: {
    strategy: "jwt", // Usar JWT para a sessão
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
