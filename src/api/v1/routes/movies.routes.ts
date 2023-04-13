import { Router } from "express";
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/movies.controllers";

const router = Router();

router.get("/api/v1/movies/:id", getItem);
router.get("/api/v1/movies", getItems);
router.post("/api/v1/movies", createItem);
router.put("/api/v1/movies/:id", updateItem);
router.delete("/api/v1/movies/:id", deleteItem);

export default router;
