import express from 'express';
import {
  getSetorHandler,
  getAllSetoresHandler,
  registerSetorHandler,
} from '../controllers/setor.controller';
import { validate } from '../middleware/validate';
import { createSetorSchema } from '../schemas/setor.schema';

const router = express.Router();

// Register user
router.post('/register', validate(createSetorSchema), registerSetorHandler);

// Get obra por id
router.get('/show/:id', getSetorHandler);

// Get obras
router.get('/show-all', getAllSetoresHandler);

export default router;
