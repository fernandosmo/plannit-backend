import { NextFunction, Request, Response } from 'express';
import { CreateEtapaInput } from '../schemas/etapa.schema';
import {
  createEtapa,
  findEtapaById,
  findEtapas,
} from '../services/etapa.service';

export const registerEtapaHandler = async (
  req: Request<{}, {}, CreateEtapaInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nome } = req.body;

    const etapa = await createEtapa({
      nome,
    });

    res.status(201).json({
      status: 'success',
      data: {
        etapa,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getEtapaHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const etapa = await findEtapaById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        etapa,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllEtapasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const etapas = await findEtapas();

    res.status(200).json({
      status: 'success',
      data: {
        etapas,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
