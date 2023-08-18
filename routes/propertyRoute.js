import express from "express";
import {
  createProperty,
  getAllProperties,
  getProperty,
} from "../controllers/propertyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/create",jwtCheck, createProperty);
router.get("/properties", getAllProperties);
router.get("/:id", getProperty);
// router.get("/update/:id", updateProperty)

export { router as propertyRoute };
