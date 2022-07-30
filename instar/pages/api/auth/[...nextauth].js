import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: 2,
            name: "admin",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  jwt: {
    encryption: true,
  },
  pages:{
    signIn:'/auth/adminlogin'
  }
});
