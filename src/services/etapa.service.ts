import { Etapa } from '../database/entities/etapa.entity';
import { CreateEtapaInput } from '../schemas/etapa.schema';
import { AppDataSource } from '../utils/data-source';

const etapaRepository = AppDataSource.getRepository(Etapa);

export const createEtapa = async (input: CreateEtapaInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Etapa, input)
  )) as Etapa;
};

export const findEtapaById = async (etapaId: number) => {
  return await etapaRepository.findOneBy({ id: etapaId });
};
export const findEtapas = async () => {
  console.log(etapaRepository.find());

  return await etapaRepository.find();
};
