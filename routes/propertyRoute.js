import express from "express";
import { createProperty,  } from "../controllers/propertyController.js";

const router = express.Router();

router.post("/create", createProperty)
router.get("/property",)

export {router as propertyRoute} 