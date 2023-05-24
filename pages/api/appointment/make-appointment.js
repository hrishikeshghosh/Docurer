import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).json({ flag: false, message: "invalid method" });
  }
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      bookingDate,
      doctorsId,
      paymentType,
      cardDetails,
      amount,
    } = req.body;

    console.log(bookingDate);

    let newAppointment, newPayment;
    newAppointment = await prisma.appointments.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        bookingDate,
        doctorsId,
      },
    });
    if (newAppointment) {
      newPayment = await prisma.payments.create({
        data: {
          amount,
          timeStamp: new Date(),
          paymentType,
          status: paymentType === "CARD" ? "COMPLETE" : "PENDING",
          appointmentsId: newAppointment?.id,
        },
      });
    }
    if (newAppointment && newPayment) {
      res.status(201).json({
        flag: true,
        message: "Appointment Successfull!",
        appointmentId: newAppointment?.id,
      });
    } else {
      res.status(201).json({
        flag: false,
        message: "Sorry your appointment wasn't placed!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ flag: false, message: "something went wrong!" });
  }
};
