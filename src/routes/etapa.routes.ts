import express from 'express';
import {
  getEtapaHandler,
  getAllEtapasHandler,
  registerEtapaHandler,
} from '../controllers/etapa.controller';
import { validate } from '../middleware/validate';
import { createEtapaSchema } from '../schemas/etapa.schema';

const router = express.Router();

// Register user
router.post('/register', validate(createEtapaSchema), registerEtapaHandler);

// Get obra por id
router.get('/show/:id', getEtapaHandler);

// Get obras
router.get('/show-all', getAllEtapasHandler);

export default router;
