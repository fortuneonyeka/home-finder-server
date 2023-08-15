import express from "express";
import {
  createUser,
  bookInspection,
  getAllBookings,
  cancelBooking,
  toFavorite,
  allFavorites,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck,createUser);
router.post("/bookInspection/:id", bookInspection);
router.post("/allBookings", getAllBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFav/:propertyId", toFavorite);
router.post("/allFavs/:propertyId", allFavorites);

export { router as userRoute };
