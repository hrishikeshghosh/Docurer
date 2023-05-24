import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).json({ flag: false, message: "invalid method" });
  }

  try {
    const { type } = req.body;

    const details = await prisma.doctors.findMany({
      where: {
        Specialist_type: type,
      },
    });

    if (!details) {
      console.log("no doctors found!");
      return res
        .status(400)
        .json({ flag: false, message: "No doctors found!" });
    }

    res.status(200).json({ flag: true, data: details });
  } catch (error) {
    console.log(error);
    res.status(500).json({ flag: false, message: "something went wrong!" });
  }
};
