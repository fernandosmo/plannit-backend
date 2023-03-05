import express from "express";
import {
  getTrechoHandler,
  getAllTrechosHandler,
  registerTrechoHandler,
} from "../controllers/trechos.controller";
import { validate } from "../middleware/validate";
import { createTrechoSchema } from "../schemas/trecho.schema";

const router = express.Router();

// Register trecho
router.post("/register", validate(createTrechoSchema), registerTrechoHandler);

// Get trecho por id
router.get("/show/:id", getTrechoHandler);

// Get trechos
router.get("/show-all", getAllTrechosHandler);

export default router;
