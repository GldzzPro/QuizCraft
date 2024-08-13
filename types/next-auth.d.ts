import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth" {
    interface Session {
        user?: {
          id: string;
          role: string; // Add role here
          randomKey: string;
        } & DefaultSession["user"];
      }
    
      interface User {
        id: string;
        role: string;
        randomKey: string;
      }
}