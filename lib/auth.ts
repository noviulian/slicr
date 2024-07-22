import NextAuth from "next-auth";
import authDbAdapter from "@/lib/authDbAdapter";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(authDbAdapter.connect()),
    providers: [GitHub],
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },
        async session({ session, token }) {
            // @ts-ignore
            session.user = token.user;
            return session;
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    jwt: {
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
});
