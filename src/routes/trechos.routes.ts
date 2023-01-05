import express from 'express';
import {
  getTrechoHandler,
  getAllTrechosHandler,
  registerTrechoHandler,
} from '../controllers/trechos.controller';
import { validate } from '../middleware/validate';
import { createTrechoSchema } from '../schemas/trecho.schema';

const router = express.Router();

// Register user
router.post('/register', validate(createTrechoSchema), registerTrechoHandler);

// Get obra por id
router.get('/show/:id', getTrechoHandler);

// Get obras
router.get('/show-all', getAllTrechosHandler);

export default router;
