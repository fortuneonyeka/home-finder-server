import express from "express";
import { createUser, bookInspection, getAllBookings, cancelBooking, toFavorite } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)
router.post("/bookInspection/:id", bookInspection)
router.post("/allBookings", getAllBookings)
router.post("/cancelBooking/:id", cancelBooking)
router.post("/toFav/:propertyId", toFavorite)


export {router as userRoute} 