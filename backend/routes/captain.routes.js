import express from "express";
import { body } from "express-validator";
import * as captainController from "../controllers/captain.controller.js";

const router = express.Router();

router.post("/register", [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("firstname must be at least 3 characters"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("color must be at least 3 characters"),
  body("vehicle.plate")
    .isLength({ min: 7 })
    .withMessage("plate must be at least 7 characters"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("capacity must be at least 1"),
  body("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
],captainController.registerCaptain);

export default router;
