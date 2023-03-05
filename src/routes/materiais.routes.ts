import express from "express";
import {
  getMaterialHandler,
  getAllMaterialHandler,
  registerMaterialHandler,
} from "../controllers/materiais.controller";
import { validate } from "../middleware/validate";
import { createMaterialSchema } from "../schemas/materiais.schema";

const router = express.Router();

// Register material
router.post(
  "/register",
  validate(createMaterialSchema),
  registerMaterialHandler
);

// Get material por id
router.get("/show/:id", getMaterialHandler);

// Get materiais
router.get("/show-all", getAllMaterialHandler);

export default router;
