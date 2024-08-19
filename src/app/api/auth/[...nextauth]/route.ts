import { compare } from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { findUserEmail } from "@/repositories/user.repository";

const GOOGLE_ID = process.env.NEXT_GOOGLE_CLIENT_ID!;
const GOOGLE_SECRET = process.env.NEXT_GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "secret",
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "signin",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          const user = await findUserEmail(credentials);

          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id + "",
            email: user.email,
            name: user.username,
            role: user.role,
            randomKey: "tes",
          };
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message || "Invalid email or password");
          } else {
            throw new Error("An unknown error occurred");
          }
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        if (!profile?.email) {
          throw new Error("Email not found");
        }
        await prisma.user.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            username: profile.name || "",
            role: "USER",
            password: "", 
          },
          update: {
            username: profile.name || "",
          },
        });

        return true;
      }
      return true;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          randomKey: token.randomKey,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        return {
          ...token,
          id: user.id,
          role: u.role,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
