import express from "express";
import {
  getSetorHandler,
  getAllSetoresHandler,
  registerSetorHandler,
} from "../controllers/setor.controller";
import { validate } from "../middleware/validate";
import { createSetorSchema } from "../schemas/setor.schema";

const router = express.Router();

// Register setor
router.post("/register", validate(createSetorSchema), registerSetorHandler);

// Get setor por id
router.get("/show/:id", getSetorHandler);

// Get setores
router.get("/show-all", getAllSetoresHandler);

export default router;
