import { PrismaClient } from "@prisma/client";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

// генерація даних seed
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@test.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
}

// очистка даних seed
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await up();
    await down();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
