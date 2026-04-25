// got solution from  - https://stackoverflow.com/a/78278280
// My issue was that I had to use session provider for useSession but my logic was outside the
// HomePage component so I could not wrap the hook with it
//this user suggested that SessionProvider is wrapped around the entire app so it can access session data
// providers.tsx
"use client";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
