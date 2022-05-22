import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET,
    }),
  ],
});
