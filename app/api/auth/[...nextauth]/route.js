import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
   session: {
    strategy: "jwt", // <- required for JWT usage
  }, callbacks: {
   jwt: async ({ token, account }) => {
     if (account?.id_token) {
       token.id_token = account.id_token;
     }
     return token;
   },
   session: async ({ session, token }) => {
      session.id_token = token.id_token;
      return session;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
