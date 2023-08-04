import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createProperty = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);

  try {
    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner : {connect : {email: userEmail}}
      },
    });
    res.send({message: "Property added successfully", property})

  } catch (error) {
    if (error.code === "P200") {
      throw new Error("A property with the same address exists already");
    }
    throw new Error(error.message);
  }
});
