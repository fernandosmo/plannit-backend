import { NextFunction, Request, Response } from 'express';
import { CreateAtividadeInput } from '../schemas/atividade.schema';
import {
  createAtividade,
  findAtividadeById,
  findAtividades,
} from '../services/atividade.service';

export const registerAtividadeHandler = async (
  req: Request<{}, {}, CreateAtividadeInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { etapa, nome, ordem, unidade } = req.body;

    const atividade = await createAtividade({
      etapa,
      nome,
      ordem,
      unidade,
    });

    res.status(201).json({
      status: 'success',
      data: {
        atividade,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAtividadeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const atividade = await findAtividadeById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        atividade,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllAtividadesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const atividades = await findAtividades();

    res.status(200).json({
      status: 'success',
      data: {
        atividades,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
