import { NextFunction, Request, Response } from 'express';
import { CreateMaterialInput } from '../schemas/materiais.schema';
import {
  createMaterial,
  findMaterialById,
  findMateriais,
} from '../services/materiais.service';

export const registerMaterialHandler = async (
  req: Request<{}, {}, CreateMaterialInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { grupo, descricao, custo, produtividade_dia_equipe } = req.body;

    const material = await createMaterial({
      grupo,
      descricao,
      custo,
      produtividade_dia_equipe,
    });

    res.status(201).json({
      status: 'success',
      data: {
        material,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getMaterialHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const material = await findMaterialById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        material,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllMaterialHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const materiais = await findMateriais();

    res.status(200).json({
      status: 'success',
      data: {
        materiais,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
