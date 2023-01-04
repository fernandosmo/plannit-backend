import config from 'config';
import { Obra } from '../database/entities/obra.entity';
import { CreateObraInput } from '../schemas/obra.schema';
import { AppDataSource } from '../utils/data-source';

const obraRepository = AppDataSource.getRepository(Obra);

export const createObra = async (input: CreateObraInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Obra, input)
  )) as Obra;
};

export const findObraById = async (obraId: number) => {
  return await obraRepository.findOneBy({ id: obraId });
};
export const findObras = async () => {
  console.log(obraRepository.find());

  return await obraRepository.find();
};
