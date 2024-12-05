import blackListTokenModel from "../models/blackListToken.model.js";
import captainModel from "../models/captain.model.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try {
    // Access token from cookies or Authorization header
    const token =
      req.cookies?.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ message: "You are not authorized" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
      return res.status(401).json({ message: "Token has been blacklisted" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Find user
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to the request object
    req.user = user;

    // Pass control to the next middleware
    next();
  } catch (error) {
    console.error("Authorization Error:", error.message);
    return res.status(401).json({ message: "You are not authorized" });
  }
};

export const authCaptain = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ message: "You are not authorized" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
      return res.status(401).json({ message: "Token has been blacklisted" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Find captain
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(404).json({ message: "captain not found" });
    }

    // Attach user to the request object
    req.captain = captain;

    // Pass control to the next middleware
    next();
  } catch (error) {
    console.error("Authorization Error:", error.message);
    return res.status(401).json({ message: "You are not authorized" });
  }
};
