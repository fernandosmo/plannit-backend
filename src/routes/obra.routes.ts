import express from 'express';
import {
  getObraHandler,
  getAllObrasHandler,
  registerObraHandler,
} from '../controllers/obras.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { validate } from '../middleware/validate';
import { createObraSchema } from '../schemas/obra.schema';

const router = express.Router();

// Register user
router.post('/register', validate(createObraSchema), registerObraHandler);

// Get obra por id
router.get('/show/:id', getObraHandler);

// Get obras
router.get('/show-all', deserializeUser, getAllObrasHandler);

export default router;
