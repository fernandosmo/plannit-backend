import express from "express";
import {
  getEtapaHandler,
  getAllEtapasHandler,
  registerEtapaHandler,
} from "../controllers/etapa.controller";
import { validate } from "../middleware/validate";
import { createEtapaSchema } from "../schemas/etapa.schema";

const router = express.Router();

// Register etapa
router.post("/register", validate(createEtapaSchema), registerEtapaHandler);

// Get etapa por id
router.get("/show/:id", getEtapaHandler);

// Get etapas
router.get("/show-all", getAllEtapasHandler);

export default router;
