import { NextFunction, Request, Response } from 'express';
import { CreateRuaInput } from '../schemas/rua.schema';
import { createRua, findRuaById, findRuas } from '../services/rua.service';

export const registerRuaHandler = async (
  req: Request<{}, {}, CreateRuaInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nome } = req.body;

    const rua = await createRua({
      nome,
    });

    res.status(201).json({
      status: 'success',
      data: {
        rua,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getRuaHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const rua = await findRuaById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        rua,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllRuasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ruas = await findRuas();

    res.status(200).json({
      status: 'success',
      data: {
        ruas,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
