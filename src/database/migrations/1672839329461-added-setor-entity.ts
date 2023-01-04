import { MigrationInterface, QueryRunner } from "typeorm";

export class addedSetorEntity1672839329461 implements MigrationInterface {
    name = 'addedSetorEntity1672839329461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "setores" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_85908551895de8d968532c35d07" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "setores"`);
    }

}
