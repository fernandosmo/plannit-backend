import { Material } from '../database/entities/materiais.entity';
import { CreateMaterialInput } from '../schemas/materiais.schema';
import { AppDataSource } from '../utils/data-source';

const materialRepository = AppDataSource.getRepository(Material);

export const createMaterial = async (input: CreateMaterialInput) => {
  return (await AppDataSource.manager.save(
    AppDataSource.manager.create(Material, input)
  )) as Material;
};

export const findMaterialById = async (materialId: number) => {
  return await materialRepository.findOne({
    where: { id: materialId },
    relations: {
      grupo: true,
    },
  });
};
export const findMateriais = async () => {
  console.log(
    materialRepository.find({
      relations: {
        grupo: true,
      },
    })
  );

  return await materialRepository.find({
    relations: {
      grupo: true,
    },
  });
};
