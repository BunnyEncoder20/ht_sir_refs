import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connectionInstance);
    console.log("Connected to the DB");
  } catch (error) {
    console.error("ERROR:", error);
    process.exit(1);
    // throw new Error('ERROR: There was a problem in connectin to the DB')
  }
};

export { connectDB };
