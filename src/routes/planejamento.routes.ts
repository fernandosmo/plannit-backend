import express from "express";
import {
  getPlanejamentoHandler,
  getAllPlanejamentosHandler,
  registerPlanejamentoHandler,
} from "../controllers/planejamento.controller";
import { validate } from "../middleware/validate";
import { createPlanejamentoSchema } from "../schemas/planejamento.schema";

const router = express.Router();

// Register planejamento
router.post(
  "/register",
  validate(createPlanejamentoSchema),
  registerPlanejamentoHandler
);

// Get planejamento por id
router.get("/show/:id", getPlanejamentoHandler);

// Get planejamentos
router.get("/show-all", getAllPlanejamentosHandler);

export default router;
