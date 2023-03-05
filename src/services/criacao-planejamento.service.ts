import { Criar_planejamento } from "../database/entities/criacao-planejamento.entity";
import { CreateCriacaoPlanejamentoInput } from "../schemas/criacao-planejamento.schema";
import { AppDataSource } from "../utils/data-source";

const criacaoPlanejamentoRepository =
  AppDataSource.getRepository(Criar_planejamento);

export const createCriacaoPlanejamento = async (
  input: CreateCriacaoPlanejamentoInput
) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Criar_planejamento, input)
  )) as Criar_planejamento;
};

export const findCriacaoPlanejamentoById = async (
  criacaoPlanejamentoId: number
) => {
  return await criacaoPlanejamentoRepository.findOne({
    where: { id: criacaoPlanejamentoId },
    relations: {
      obra: true,
      user: true,
      etapa: true,
      atividade: true,
      rua: true,
      setor: true,
      trecho: true,
      grupo_materiais: true,
      material: true,
    },
  });
};
export const findCriacaoPlanejamentos = async () => {
  console.log(
    criacaoPlanejamentoRepository.find({
      relations: {
        obra: true,
        user: true,
        etapa: true,
        atividade: true,
        rua: true,
        setor: true,
        trecho: true,
        grupo_materiais: true,
        material: true,
      },
    })
  );

  return await criacaoPlanejamentoRepository.find({
    relations: {
      obra: true,
      user: true,
      etapa: true,
      atividade: true,
      rua: true,
      setor: true,
      trecho: true,
      grupo_materiais: true,
      material: true,
    },
  });
};
