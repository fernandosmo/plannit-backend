import express from "express";
import {
  getCriacaoPlanejamentoHandler,
  getAllCriacaoPlanejamentosHandler,
  registerCriacaoPlanejamentoHandler,
} from "../controllers/criacao-planejamento.controller";
import { validate } from "../middleware/validate";
import { createCriacaoPlanejamentoSchema } from "../schemas/criacao-planejamento.schema";

const router = express.Router();

// Register criacao-planejamento
router.post(
  "/register",
  validate(createCriacaoPlanejamentoSchema),
  registerCriacaoPlanejamentoHandler
);

// Get criacao-planejamento por id
router.get("/show/:id", getCriacaoPlanejamentoHandler);

// Get criacao-planejamentos
router.get("/show-all", getAllCriacaoPlanejamentosHandler);

export default router;
