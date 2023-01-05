import { NextFunction, Request, Response } from 'express';
import { CreateTrechoInput } from '../schemas/trecho.schema';
import {
  createTrecho,
  findTrechoById,
  findTrechos,
} from '../services/trecho.service';

export const registerTrechoHandler = async (
  req: Request<{}, {}, CreateTrechoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nome, setor, rua } = req.body;

    const trecho = await createTrecho({
      nome,
      setor,
      rua,
    });

    res.status(201).json({
      status: 'success',
      data: {
        trecho,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getTrechoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const trecho = await findTrechoById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        trecho,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllTrechosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trechos = await findTrechos();

    res.status(200).json({
      status: 'success',
      data: {
        trechos,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
