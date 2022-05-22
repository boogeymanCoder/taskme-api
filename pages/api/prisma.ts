import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.post.create({
    data: {
      body: "body",
    },
  });

  const allPosts = await prisma.post.findMany({});

  res.status(200).json({ data: allPosts });
}
