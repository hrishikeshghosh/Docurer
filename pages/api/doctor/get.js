import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "GET") {
    res.status(400).json({ flag: false, message: "invalid method" });
  }

  try {
    const { id } = req.query;

    const details = await prisma.doctors.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!details) {
      return res
        .status(400)
        .json({ flag: false, message: "Doctor details not found!" });
    }

    res.status(200).json({ flag: true, data: details });
  } catch (error) {
    console.log(error);
    res.status(500).json({ flag: false, message: "something went wrong!" });
  }
};
