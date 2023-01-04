import { MigrationInterface, QueryRunner } from "typeorm";

export class addedMateriaisEntity1672849949849 implements MigrationInterface {
    name = 'addedMateriaisEntity1672849949849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "materiais" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, "custo" integer NOT NULL, "produtividade_dia_equipe" integer NOT NULL, "grupoId" integer, CONSTRAINT "PK_d3a9bcfff14650a528fab03c5be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "materiais" ADD CONSTRAINT "FK_acb95feaa97c0e0b76d6cb027e5" FOREIGN KEY ("grupoId") REFERENCES "grupo_materiais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materiais" DROP CONSTRAINT "FK_acb95feaa97c0e0b76d6cb027e5"`);
        await queryRunner.query(`DROP TABLE "materiais"`);
    }

}
