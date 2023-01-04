import { MigrationInterface, QueryRunner } from "typeorm";

export class addedGrupoMateriaisEntity1672849667923 implements MigrationInterface {
    name = 'addedGrupoMateriaisEntity1672849667923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "grupo_materiais" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_3a816e396faf0d3f38a399c9c55" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "grupo_materiais"`);
    }

}
