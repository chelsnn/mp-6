import NextAuth from 'next-auth';
import {authOptions} from "@/auth";


// initializes a custom request handler for the NextAuth endpoints
// passes in auth providers that will be used for log ins
const handler = NextAuth(authOptions);
// both GET and POST requests are accepted
// allows users to sign in and allows for session data to be accessed
export { handler as GET, handler as POST};