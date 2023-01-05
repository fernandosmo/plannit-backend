import { NextFunction, Request, Response } from 'express';
import { CreateGrupoMateriaisInput } from '../schemas/grupo-materiais.schema';
import {
  createGrupoMateriais,
  findGrupoMateriaisById,
  findGrupoMateriais,
} from '../services/grupo-materiais.service';

export const registerGrupoMateriaisHandler = async (
  req: Request<{}, {}, CreateGrupoMateriaisInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nome } = req.body;

    const grupo_materiais = await createGrupoMateriais({
      nome,
    });

    res.status(201).json({
      status: 'success',
      data: {
        grupo_materiais,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getGrupoMateriaisHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const grupo_materiais = await findGrupoMateriaisById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        grupo_materiais,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllGrupoMateriaisHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const grupo_materiais = await findGrupoMateriais();

    res.status(200).json({
      status: 'success',
      data: {
        grupo_materiais,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
