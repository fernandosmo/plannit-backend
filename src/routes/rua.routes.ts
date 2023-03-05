import express from "express";
import {
  getRuaHandler,
  getAllRuasHandler,
  registerRuaHandler,
} from "../controllers/rua.controller";
import { validate } from "../middleware/validate";
import { createRuaSchema } from "../schemas/rua.schema";

const router = express.Router();

// Register rua
router.post("/register", validate(createRuaSchema), registerRuaHandler);

// Get rua por id
router.get("/show/:id", getRuaHandler);

// Get ruas
router.get("/show-all", getAllRuasHandler);

export default router;
