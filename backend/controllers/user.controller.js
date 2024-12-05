import userModel from "../models/user.model.js";
import { createUser } from "../services/user.services.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import blackListTokenModel from "../models/blackListToken.model.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

export const loginUser = async (req, res) => {
  // Implement login logic here
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await user.comparePasswords(password);

  if (!isMatch) {
    return res.status(500).json({ message: "Failed to authenticate user" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);

  res.status(200).json({ token, user });
};

export const getUserProfile = async (req, res) => {
  const user = req.user;
  return res.json({ user });
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.json({ message: "Logged out successfully" });
};
