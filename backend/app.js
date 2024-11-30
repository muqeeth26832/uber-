import express from "express";
import { configDotenv } from "dotenv";
import cors from "express";
configDotenv();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
