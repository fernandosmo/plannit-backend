import { Planejamento } from "../database/entities/planejamento.entity";
import { CreatePlanejamentoInput } from "../schemas/planejamento.schema";
import { AppDataSource } from "../utils/data-source";

const planejamentoRepository = AppDataSource.getRepository(Planejamento);

export const createPlanejamento = async (input: CreatePlanejamentoInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Planejamento, input)
  )) as Planejamento;
};

export const findPlanejamentoById = async (planejamentoId: number) => {
  return await planejamentoRepository.findOne({
    where: { id: planejamentoId },
    relations: {
      etapa: true,
      atividade: true,
      unidade: true,
      ordem: true,
    },
  });
};
export const findPlanejamentos = async () => {
  console.log(
    planejamentoRepository.find({
      relations: {
        etapa: true,
        atividade: true,
        unidade: true,
        ordem: true,
      },
    })
  );

  return await planejamentoRepository.find({
    relations: {
      etapa: true,
      atividade: true,
      unidade: true,
      ordem: true,
    },
  });
};
