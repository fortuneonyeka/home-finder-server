import express from "express";
import { createUser, bookInspection, getAllBookings, cancelBooking, toFavorite, allFavorites } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)
router.post("/bookInspection/:id", bookInspection)
router.post("/allBookings", getAllBookings)
router.post("/cancelBooking/:id", cancelBooking)
router.post("/toFav/:propertyId", toFavorite)
router.post("/allFavs/:propertyId", allFavorites)


export {router as userRoute} 