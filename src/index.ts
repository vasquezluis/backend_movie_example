import app from "./app";
import dotenv from "dotenv";

import dbConnection from "./config/mongo";

dotenv.config();

// * server PORT || local PORT
const PORT = process.env.PORT || 3000;

dbConnection().then(() => {
  console.log("mongodb atlas connected");
});

app.listen(PORT, () => {
  console.log("server listening on port: ", PORT);
});
