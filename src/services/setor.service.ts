import { Setor } from '../database/entities/setor.entity';
import { CreateSetorInput } from '../schemas/setor.schema';
import { AppDataSource } from '../utils/data-source';

const setorRepository = AppDataSource.getRepository(Setor);

export const createSetor = async (input: CreateSetorInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Setor, input)
  )) as Setor;
};

export const findSetorById = async (setorId: number) => {
  return await setorRepository.findOneBy({ id: setorId });
};
export const findSetores = async () => {
  console.log(setorRepository.find());

  return await setorRepository.find();
};
