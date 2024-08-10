import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add other providers as needed
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,  // Use JSON Web Tokens for session management
  },
  pages: {
    signIn: '/auth/signin',  // Custom sign-in page
    signOut: '/auth/signout', // Custom sign-out page
    error: '/auth/error',     // Error handling page
  },
  callbacks: {
    async session(session, token) {
      session.user.id = token.uid; // Add user id to session
      return session;
    }
  }
})
