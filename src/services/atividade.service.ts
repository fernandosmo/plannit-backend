import { Atividade } from '../database/entities/atividade.entity';
import { CreateAtividadeInput } from '../schemas/atividade.schema';
import { AppDataSource } from '../utils/data-source';

const atividadeRepository = AppDataSource.getRepository(Atividade);

export const createAtividade = async (input: CreateAtividadeInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Atividade, input)
  )) as Atividade;
};

export const findAtividadeById = async (atividadeId: number) => {
  return await atividadeRepository.findOne({
    where: { id: atividadeId },
    relations: {
      etapa: true,
    },
  });
};
export const findAtividades = async () => {
  console.log(
    atividadeRepository.find({
      relations: {
        etapa: true,
      },
    })
  );

  return await atividadeRepository.find({
    relations: {
      etapa: true,
    },
  });
};
