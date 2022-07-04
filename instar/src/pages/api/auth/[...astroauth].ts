import AstroAuth from "@astro-auth/core";

//Import the providers that you need to use
import { GoogleProvider, GithubProvider } from "@astro-auth/providers";

export const all = AstroAuth({
  authProviders: [
    // Configure the providers that you need to use
    GoogleProvider({
      // You will need to add your client ID and client secret to a .env file
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
        clientId: import.meta.env.GITHUB_CLIENT_ID,
        clientSecret: import.meta.env.GITHUB_CLIENT_SECRET
    })
  ],
  hooks: {},
});