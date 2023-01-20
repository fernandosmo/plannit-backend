import { NextFunction, Request, Response } from 'express';
import { CreateObraInput } from '../schemas/obra.schema';
import { createObra, findObraById, findObras } from '../services/obra.service';

export const registerObraHandler = async (
  req: Request<{}, {}, CreateObraInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user,
      Empreendimento,
      Endereço,
      Estado,
      Regiao,
      Assinatura_Contrato,
      Alvara_Exec,
      Prazo_Exec,
      Data_Final,
      prazo_exec_invest,
      Início_atividades,
      Coordenacao,
      Gestor,
    } = req.body;

    const obra = await createObra({
      user,
      Empreendimento,
      Endereço,
      Estado,
      Regiao,
      Assinatura_Contrato,
      Alvara_Exec,
      Prazo_Exec,
      Data_Final,
      prazo_exec_invest,
      Início_atividades,
      Coordenacao,
      Gestor,
    });

    res.status(201).json({
      status: 'success',
      data: {
        obra,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getObraHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const obra = await findObraById(JSON.parse(id));

    res.status(200).json({
      status: 'success',
      data: {
        obra,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllObrasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const obras = await findObras();

    res.status(200).json({
      status: 'success',
      data: {
        obras,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
