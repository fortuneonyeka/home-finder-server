import express from "express";
import { createUser, bookInspection, getAllBookings, cancelBooking } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)
router.post("/bookInspection/:id", bookInspection)
router.post("/allBookings", getAllBookings)
router.post("/cancelBooking/:id", cancelBooking)


export {router as userRoute} 