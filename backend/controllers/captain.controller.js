import captainModel from "../models/captain.model.js";
import blackListTokenModel from "../models/blackListToken.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  // check that its a new email

  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);
  const captain = await createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = await captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

export const loginCaptain = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel
    .findOne({ email: email })
    .select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(500).json({ message: "Failed to authenticate captain" });
  }

  // genereate token and send

  const token = await captain.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

export const getCaptainProfile = async (req, res) => {
  const captain = req.captain;
  return res.json({ captain });
};

export const logoutCaptain = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.json({ message: "Logged out successfully" });
};
