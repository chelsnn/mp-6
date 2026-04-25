import { NextAuthOptions } from "next-auth"; // type definition

import GithubProvider from "next-auth/providers/github"; //GitHub OAuth built in login method


export const authOptions: NextAuthOptions = {
    // list of providers and their settings, used in this app, this one just uses GitHub
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
};

