// lib/auth.ts
import { PrismaAdapter } from "@auth/prisma-adapter"
import { compare } from "bcryptjs"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "./db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) {
          throw new Error("User not found")
        }

        const isValid = await compare(credentials.password, user.password)
        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub // Ensure session.user.id is set correctly
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id // sub is the default JWT id field
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const auth = authOptions
