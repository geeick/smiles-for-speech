// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// avoid instantiating multiple clients in dev
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}
