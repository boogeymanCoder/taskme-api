import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAdminByEmail(email: any) {
  if (!email) return null;
  const admin = await prisma.admin.findFirst({
    where: {
      user: {
        email: email,
      },
    },
  });

  return admin;
}
