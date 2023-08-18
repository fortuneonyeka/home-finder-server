import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  

  let { email } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User registered successfully!!!",
      user: user
    });
  } else res.status(201).send({ message: `User exists already` });
});

export const bookInspection = asyncHandler(async (req, res) => {
  const { email, date } = req.body;

  //id of the property to book inspection
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedInspection: true },
    });
    if (
      alreadyBooked.bookedInspection.some((inspection) => inspection.id === id)
    ) {
      res
        .status(404)
        .json({
          message: "You have already booked this property for inspection",
        });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedInspection: { push: { id, date } },
        },
      });
      res.status(200).send("Inspection booked successfully");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const bookings = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedInspection: true },
    });
    res.status(200).send(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedInspection: true },
    });

    const index = user.bookedInspection.findIndex(
      (inspect) => inspect.id === id
    );

    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedInspection.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedInspection: user.bookedInspection,
        },
      });
      res.send("Inspection booking canceled successfully!");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

//adding property in favorite
export const toFavorite = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { propertyId } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user.favResidenciesID.includes(propertyId)) {
      const updatedUser = await prisma.user.update({
        where: { email: email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== propertyId),
          },
        },
      });
      res.send({ message: "Removed from favorites!", user: updatedUser });
    } else {
      const updatedUser = await prisma.user.update({
        where: { email: email },
        data: {
          favResidenciesID: {
            push: propertyId,
          },
        },
      });
      res.send({ message: "Property added to favorite", user: updatedUser });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const allFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const allFavs = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });

    res.status(200).send(allFavs);
  } catch (error) {
    throw new Error(error.message);
  }
});
