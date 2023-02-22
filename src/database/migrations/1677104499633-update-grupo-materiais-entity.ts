import { MigrationInterface, QueryRunner } from "typeorm";

export class updateGrupoMateriaisEntity1677104499633
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "grupo_materiais" DROP CONSTRAINT "FK_9fe298553be75e928500bd5856c"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "grupo_materiais" ADD CONSTRAINT "FK_9fe298553be75e928500bd5856c" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
