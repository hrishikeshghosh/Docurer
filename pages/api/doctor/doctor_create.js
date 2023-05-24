import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(500).json({ flag: false, message: "invalid method" });
  }
  try {
    var {
      firstName,
      lastName,
      email,
      password,
      fees,
      Specialist_type,
      description,
      location,
    } = req.body;

    const alreadyExists = await prisma.doctors.findFirst({
      where: {
        email: email,
      },
    });

    if (alreadyExists) {
      return res.status(500).json({
        flag: false,
        message: "You are already registered in our system",
      });
    }

    if (password) {
      password = await bcrypt.hash(password, 10);
    }

    const createdData = await prisma.doctors.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        fees: parseInt(fees),
        Specialist_type,
        description,
        location,
      },
    });

    res
      .status(201)
      .json({
        message: "Doctor registration successfull!",
        flag: true,
        details: createdData,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "There was an error" });
  }
};
