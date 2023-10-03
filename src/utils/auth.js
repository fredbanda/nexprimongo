import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "795896475408-t249ssdjgbkc52e6jrtilhm7t9f6vheo.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
