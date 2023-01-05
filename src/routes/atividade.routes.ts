import express from 'express';
import {
  getAtividadeHandler,
  getAllAtividadesHandler,
  registerAtividadeHandler,
} from '../controllers/atividade.controller';
import { validate } from '../middleware/validate';
import { createAtividadeSchema } from '../schemas/atividade.schema';

const router = express.Router();

// Register user
router.post(
  '/register',
  validate(createAtividadeSchema),
  registerAtividadeHandler
);

// Get obra por id
router.get('/show/:id', getAtividadeHandler);

// Get obras
router.get('/show-all', getAllAtividadesHandler);

export default router;
