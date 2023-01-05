import express from 'express';
import {
  getMaterialHandler,
  getAllMaterialHandler,
  registerMaterialHandler,
} from '../controllers/materiais.controller';
import { validate } from '../middleware/validate';
import { createMaterialSchema } from '../schemas/materiais.schema';

const router = express.Router();

// Register user
router.post(
  '/register',
  validate(createMaterialSchema),
  registerMaterialHandler
);

// Get obra por id
router.get('/show/:id', getMaterialHandler);

// Get obras
router.get('/show-all', getAllMaterialHandler);

export default router;
