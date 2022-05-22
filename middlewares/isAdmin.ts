import { PrismaClient, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { findAdminByEmail } from "../services/admin";

const prisma = new PrismaClient();

export default function isAdmin(
  handler: (req: NextApiRequest, res: NextApiResponse) => any
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    console.log("isAdmin middleware");

    const session = await getSession({ req });
    const user = session?.user;
    console.log({ user });

    const admin = await findAdminByEmail(user?.email);
    if (!admin) {
      return res.status(401).json({
        success: false,
        data: null,
        errorMessage: "User is not an administrator",
      });
    }

    return handler(req, res);
  };
}
