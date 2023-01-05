import { Grupo_materiais } from '../database/entities/grupo-materiais.entity';
import { CreateGrupoMateriaisInput } from '../schemas/grupo-materiais.schema';
import { AppDataSource } from '../utils/data-source';

const grupoMateriaisRepository = AppDataSource.getRepository(Grupo_materiais);

export const createGrupoMateriais = async (
  input: CreateGrupoMateriaisInput
) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Grupo_materiais, input)
  )) as Grupo_materiais;
};

export const findGrupoMateriaisById = async (grupoMateriaisId: number) => {
  return await grupoMateriaisRepository.findOneBy({ id: grupoMateriaisId });
};
export const findGrupoMateriais = async () => {
  console.log(grupoMateriaisRepository.find());

  return await grupoMateriaisRepository.find();
};
