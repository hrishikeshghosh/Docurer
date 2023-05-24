import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).json({ flag: false, message: "invalid method" });
  }

  try {
    const { type, price, ratings } = req.body;

    let priceExp = filterPrice(price);
    let ratingExp = ratings ? ratings : 0;

    const details = await prisma.doctors.findMany({
      where: {
        Specialist_type: type,
        fees: priceExp,
        rating: {
          gte: ratingExp,
        },
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

function filterPrice(price) {
  switch (price) {
    case 1:
      return {
        lte: 800,
        gte: 500,
      };
    case 2:
      return {
        lte: 1200,
        gte: 800,
      };
    case 3:
      return {
        lte: 1500,
        gte: 1200,
      };
    default:
      return {
        gte: 500,
      };
  }
}
