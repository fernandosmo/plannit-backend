import express from 'express';
import {
  getRuaHandler,
  getAllRuasHandler,
  registerRuaHandler,
} from '../controllers/rua.controller';
import { validate } from '../middleware/validate';
import { createRuaSchema } from '../schemas/rua.schema';

const router = express.Router();

// Register user
router.post('/register', validate(createRuaSchema), registerRuaHandler);

// Get obra por id
router.get('/show/:id', getRuaHandler);

// Get obras
router.get('/show-all', getAllRuasHandler);

export default router;
