import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

// dontenv;
dotenv.config();

// init app
const app = express();
const port = process.env.PORT || 8000;
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
