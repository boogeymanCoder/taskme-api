import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import isAdmin from "../../../middlewares/isAdmin";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // console.log({ req, res });
    const session = await getSession({ req });

    await prisma.post.create({
      data: {
        body: "Sample body",
      },
    });

    const posts = await prisma.post.findMany();

    return res
      .status(200)
      .json({ success: true, data: posts, errorMessage: null });
  }

  return res
    .status(405)
    .json({ success: false, data: null, errorMessage: "Method not allowed" });
}

export default isAdmin(handler);
