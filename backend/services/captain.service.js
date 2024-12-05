import captainModel from "../models/captain.model.js";

export const createCaptain = async ({
  firstname,
  lastname,
  email,
  password, // this is hashed passsword
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType, // this is the type of vehicle like car, bike, scooter etc.
    },
  });
  return captain;
};
