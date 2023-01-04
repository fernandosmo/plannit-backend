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
      Empreendimento: Empreendimento,
      Endereço: Endereço,
      Estado: Estado,
      Regiao: Regiao,
      Assinatura_Contrato: Assinatura_Contrato,
      Alvara_Exec: Alvara_Exec,
      Prazo_Exec: Prazo_Exec,
      Data_Final: Data_Final,
      prazo_exec_invest: prazo_exec_invest,
      Início_atividades: Início_atividades,
      Coordenacao: Coordenacao,
      Gestor: Gestor,
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
