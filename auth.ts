import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        role: string;
    }

    interface Session {
        user: {
            id: string;
            role: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string | undefined;
        role: string;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Hasło", type: "password" },
            },
            authorize: async (credentials) => {
                const email = credentials.email as string;
                const password = credentials.password as string;

                const user = await prisma.user.findUnique({
                    where: {
                        email: email,
                    }
                });


                if (!user) {
                    throw new Error("Nieprawidłowy email lub hasło");
                }

                const passwordsMatch = await bcrypt.compare(password, user.password);

                if (!passwordsMatch) {
                    throw new Error("Nieprawidłowy email lub hasło");
                }

                return user;
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }

            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as string;
                session.user.id = token.id as string;
            }

            return session;
        }

    }
})