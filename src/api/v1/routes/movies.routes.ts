import { Router } from "express";
import {
  getItem,
  getItems,
  createItem,
} from "../controllers/movies.controllers";

const router = Router();

router.get("/api/v1/movies/:id", getItem);
router.get("/api/v1/movies", getItems);
router.post("/api/v1/movies", createItem);

export default router;
