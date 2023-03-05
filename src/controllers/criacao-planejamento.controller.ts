import { NextFunction, Request, Response } from "express";
import { CreateCriacaoPlanejamentoInput } from "../schemas/criacao-planejamento.schema";
import {
  createCriacaoPlanejamento,
  findCriacaoPlanejamentoById,
  findCriacaoPlanejamentos,
} from "../services/criacao-planejamento.service";

export const registerCriacaoPlanejamentoHandler = async (
  req: Request<{}, {}, CreateCriacaoPlanejamentoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user,
      obra,
      etapa,
      atividade,
      rua,
      setor,
      trecho,
      grupo_materiais,
      material,
      qtde,
      Data_criacao,
      Data_prevista,
      executado,
    } = req.body;

    const criacao_planejamento = await createCriacaoPlanejamento({
      user,
      obra,
      etapa,
      atividade,
      rua,
      setor,
      trecho,
      grupo_materiais,
      material,
      qtde,
      Data_criacao,
      Data_prevista,
      executado,
    });

    res.status(201).json({
      status: "success",
      data: {
        criacao_planejamento,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getCriacaoPlanejamentoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const criacao_planejamento = await findCriacaoPlanejamentoById(
      JSON.parse(id)
    );

    res.status(200).json({
      status: "success",
      data: {
        criacao_planejamento,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllCriacaoPlanejamentosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const criacao_planejamentos = await findCriacaoPlanejamentos();

    res.status(200).json({
      status: "success",
      data: {
        criacao_planejamentos,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
