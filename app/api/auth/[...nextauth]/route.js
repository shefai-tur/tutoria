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
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // On initial sign in
      if (account) {
        token.id_token = account.id_token;
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
        token.expires_at = account.expires_at || Math.floor(Date.now() / 1000) + 3600;
      }

      // If token is expired, refresh it
      if (token.expires_at && Date.now() / 1000 > token.expires_at - 60) {
        try {
          const params = new URLSearchParams({
            client_id: process.env.GOOGLE_ID,
            client_secret: process.env.GOOGLE_SECRET,
            grant_type: "refresh_token",
            refresh_token: token.refresh_token,
          });
          const res = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
          });
          const refreshedTokens = await res.json();
          if (!res.ok) throw refreshedTokens;
          token.id_token = refreshedTokens.id_token;
          token.access_token = refreshedTokens.access_token;
          token.expires_at = Math.floor(Date.now() / 1000) + refreshedTokens.expires_in;
        } catch (error) {
          console.error("Error refreshing Google tokens", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.id_token = token.id_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
