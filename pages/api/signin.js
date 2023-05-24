import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "PUT") {
    res.status(500).json({ flag: false, message: "invalid method" });
  }
  try {
    var { email, password, role } = req.body;
    let exists;
    if (role === 0) {
      exists = await prisma.users.findFirst({
        where: {
          email: email,
        },
      });
    } else {
      exists = await prisma.doctors.findFirst({
        where: {
          email: email,
        },
      });
    }

    if (!exists) {
      return res.status(200).json({
        flag: false,
        message: "You are not registered with our system!",
      });
    }
    let passwordMatch = bcrypt.compare(exists.password, password);

    if (!passwordMatch) {
      return res.status(200).json({
        flag: false,
        message: "passwords or Email doesn't match",
      });
    }
    res.status(201).json({
      message: "Doctor registration successfull!",
      flag: true,
      details: exists,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "There was an error" });
  }
};
