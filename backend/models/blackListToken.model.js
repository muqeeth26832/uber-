import mongoose from "mongoose";

const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24hrs in seconds, default
  },
});

const blackListTokenModel = mongoose.model(
  "blackListToken",
  blackListTokenSchema
);

export default blackListTokenModel;
