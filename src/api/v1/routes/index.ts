import { Router, Request, Response } from "express";

const router = Router();

router.get("/", ({ headers: { host } }: Request, res: Response) => {
  const menu = {
    movies: `http://${host}/api/v1/movies`,
  };

  res.status(200).json({ message: "Api menu", menu });
});

export default router;
