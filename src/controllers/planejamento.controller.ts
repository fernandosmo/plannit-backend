import { NextFunction, Request, Response } from "express";
import { CreatePlanejamentoInput } from "../schemas/planejamento.schema";
import {
  createPlanejamento,
  findPlanejamentoById,
  findPlanejamentos,
} from "../services/planejamento.service";

export const registerPlanejamentoHandler = async (
  req: Request<{}, {}, CreatePlanejamentoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { etapa, atividade, unidade, ordem, total, executado, previsao_fim } =
      req.body;

    const planejamento = await createPlanejamento({
      etapa,
      atividade,
      unidade,
      ordem,
      total,
      executado,
      previsao_fim,
    });

    res.status(201).json({
      status: "success",
      data: {
        planejamento,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getPlanejamentoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const planejamento = await findPlanejamentoById(JSON.parse(id));

    res.status(200).json({
      status: "success",
      data: {
        planejamento,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllPlanejamentosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const planejamentos = await findPlanejamentos();

    res.status(200).json({
      status: "success",
      data: {
        planejamentos,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
