import express from "express";
import { config as configDotenv } from "dotenv";
import cors from "cors";
configDotenv(); // Load environment variables from .env

import connectToDB from "./db/db.js";
connectToDB(); // Connect to the database

import userRoutes from "./routes/captain.routes.js";
import captainRoutes from "./routes/captain.routes.js";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello world");
});

// User routes
app.use("/users", userRoutes);
app.use("/captain", captainRoutes);

export default app;
