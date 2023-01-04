import { MigrationInterface, QueryRunner } from "typeorm";

export class addedRuaEntity1672839403905 implements MigrationInterface {
    name = 'addedRuaEntity1672839403905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ruas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_3a7c0a2cbaf7326a29076e0548e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ruas"`);
    }

}
