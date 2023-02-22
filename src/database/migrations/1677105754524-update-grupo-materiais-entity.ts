import { MigrationInterface, QueryRunner } from "typeorm";

export class updateGrupoMateriaisEntity1677105754524
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "grupo_materiais" DROP COLUMN "obraId"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "grupo_materiais" ADD COLUMN "obraId"`
    );
  }
}
