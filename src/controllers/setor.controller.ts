import { NextFunction, Request, Response } from 'express';
import { CreateSetorInput } from '../schemas/setor.schema';
import {
  createSetor,
  findSetorById,
  findSetores,
} from '../services/setor.service';

export const registerSetorHandler = async (
  req: Request<{}, {}, CreateSetorInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nome } = req.body;

    const setor = await createSetor({
      nome,
    });

    res.status(201).json({
      status: 'success',
      data: {
        setor,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSetorHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const setor = await findSetorById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        setor,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllSetoresHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const setores = await findSetores();

    res.status(200).json({
      status: 'success',
      data: {
        setores,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
