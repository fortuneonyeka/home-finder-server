import express from "express";
import { createUser, bookInspection, getAllBookings } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)
router.post("/bookInspection/:id", bookInspection)
router.post("/allBookings", getAllBookings)


export {router as userRoute} 