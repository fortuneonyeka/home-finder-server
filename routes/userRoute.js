import express from "express";
import { createUser, bookInspection } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)
router.post("/bookInspection/:id", bookInspection)

export {router as userRoute} 