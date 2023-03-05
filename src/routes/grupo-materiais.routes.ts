import express from "express";
import {
  registerGrupoMateriaisHandler,
  getGrupoMateriaisHandler,
  getAllGrupoMateriaisHandler,
} from "../controllers/grupo-materiais.controller";
import { validate } from "../middleware/validate";
import { createGrupoMateriaisSchema } from "../schemas/grupo-materiais.schema";

const router = express.Router();

// Register grupo de material
router.post(
  "/register",
  validate(createGrupoMateriaisSchema),
  registerGrupoMateriaisHandler
);

// Get grupo de material por id
router.get("/show/:id", getGrupoMateriaisHandler);

// Get grupos de materiais
router.get("/show-all", getAllGrupoMateriaisHandler);

export default router;
