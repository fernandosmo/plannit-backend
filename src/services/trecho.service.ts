import { Trecho } from '../database/entities/trecho.entity';
import { CreateTrechoInput } from '../schemas/trecho.schema';
import { AppDataSource } from '../utils/data-source';

const trechoRepository = AppDataSource.getRepository(Trecho);

export const createTrecho = async (input: CreateTrechoInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Trecho, input)
  )) as Trecho;
};

export const findTrechoById = async (trechoId: number) => {
  return await trechoRepository.findOne({
    where: { id: trechoId },
    relations: {
      setor: true,
      rua: true,
    },
  });
};
export const findTrechos = async () => {
  console.log(
    trechoRepository.find({
      relations: {
        setor: true,
        rua: true,
      },
    })
  );

  return await trechoRepository.find({
    relations: {
      setor: true,
      rua: true,
    },
  });
};
