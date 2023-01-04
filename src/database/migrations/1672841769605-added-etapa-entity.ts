import { MigrationInterface, QueryRunner } from "typeorm";

export class addedEtapaEntity1672841769605 implements MigrationInterface {
    name = 'addedEtapaEntity1672841769605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "etapas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_26de329bbb63ed9c4e4023b6c2f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "etapas"`);
    }

}
