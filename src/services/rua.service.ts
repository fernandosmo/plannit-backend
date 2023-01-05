import { Rua } from '../database/entities/rua.entity';
import { CreateRuaInput } from '../schemas/rua.schema';
import { AppDataSource } from '../utils/data-source';

const ruaRepository = AppDataSource.getRepository(Rua);

export const createRua = async (input: CreateRuaInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Rua, input)
  )) as Rua;
};

export const findRuaById = async (ruaId: number) => {
  return await ruaRepository.findOneBy({ id: ruaId });
};
export const findRuas = async () => {
  console.log(ruaRepository.find());

  return await ruaRepository.find();
};
