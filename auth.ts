import NextAuth from "next-auth";
import Github from "@auth/core/providers/github";

export const {handlers, auth} = NextAuth(
    {
        providers: [Github],
    }
);