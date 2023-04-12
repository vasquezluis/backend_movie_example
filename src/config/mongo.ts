import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

async function dbConnect(): Promise<void> {
  const MONGO_URI = <string>process.env.MONGO_URI;

  await connect(MONGO_URI);
}

export default dbConnect;
