import express from "express";
import { createProperty,getAllProperties  } from "../controllers/propertyController.js";

const router = express.Router();

router.post("/create", createProperty)
router.get("/properties", getAllProperties)
// router.get("/property", getAllProperties)

export {router as propertyRoute} 