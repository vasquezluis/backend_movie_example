import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import indexRoutes from "./api/v1/routes/index";
import moviesRoutes from "./api/v1/routes/movies.routes";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(moviesRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hola mundo");
});

export default app;
