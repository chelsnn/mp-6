// got solution from  - https://stackoverflow.com/a/78278280
// providers.tsx
"use client";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
