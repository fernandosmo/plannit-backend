import { MigrationInterface, QueryRunner } from "typeorm";

export class addedAtividadeEntity1672847066041 implements MigrationInterface {
    name = 'addedAtividadeEntity1672847066041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "atividades" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "ordem" integer NOT NULL, "unidade" character varying NOT NULL, "etapaId" integer, CONSTRAINT "PK_a6aaafbd59aa3ed64c5fa2b196b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "atividades" ADD CONSTRAINT "FK_3521ca1aa2c12c0087f7a3a6dbf" FOREIGN KEY ("etapaId") REFERENCES "etapas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atividades" DROP CONSTRAINT "FK_3521ca1aa2c12c0087f7a3a6dbf"`);
        await queryRunner.query(`DROP TABLE "atividades"`);
    }

}
