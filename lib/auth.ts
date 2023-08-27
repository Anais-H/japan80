import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { DiscogsProvider } from "./DiscogsProvider";

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        DiscogsProvider({
            clientId: process.env.DISCOGS_CLIENT_ID as string,
            clientSecret: process.env.DISCOGS_CLIENT_SECRET as string,
        })
    ],
    
};