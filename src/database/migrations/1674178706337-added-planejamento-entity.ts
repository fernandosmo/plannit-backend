import { MigrationInterface, QueryRunner } from "typeorm";

export class addedPlanejamentoEntity1674178706337 implements MigrationInterface {
    name = 'addedPlanejamentoEntity1674178706337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "planejamentos" ("id" SERIAL NOT NULL, "total" integer, "executado" integer, "previsao_fim" TIMESTAMP NOT NULL, "etapaId" integer, "atividadeId" integer, "unidadeId" integer, "ordemId" integer, CONSTRAINT "PK_c9c074e105de19e1650e90d0fa2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "obras" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "etapas" ADD "obraId" integer`);
        await queryRunner.query(`ALTER TABLE "grupo_materiais" ADD "obraId" integer`);
        await queryRunner.query(`ALTER TABLE "ruas" ADD "obraId" integer`);
        await queryRunner.query(`ALTER TABLE "setores" ADD "obraId" integer`);
        await queryRunner.query(`ALTER TABLE "obras" DROP COLUMN "Prazo_Exec"`);
        await queryRunner.query(`ALTER TABLE "obras" ADD "Prazo_Exec" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "obras" ADD CONSTRAINT "FK_40750d625bb3cb19757837f5b77" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "etapas" ADD CONSTRAINT "FK_2dcf4ecbc8e00155561d053f8a7" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "grupo_materiais" ADD CONSTRAINT "FK_9fe298553be75e928500bd5856c" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ruas" ADD CONSTRAINT "FK_886defa029b9946f61b8d78b87d" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "setores" ADD CONSTRAINT "FK_2c36618691e55d3be49ecbeb11d" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planejamentos" ADD CONSTRAINT "FK_cc5295104d3040c48e7172f4657" FOREIGN KEY ("etapaId") REFERENCES "atividades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planejamentos" ADD CONSTRAINT "FK_17550259b5d5c50a8a65e21943c" FOREIGN KEY ("atividadeId") REFERENCES "atividades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planejamentos" ADD CONSTRAINT "FK_6f87e8ee18c45f220eec9d304e9" FOREIGN KEY ("unidadeId") REFERENCES "atividades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planejamentos" ADD CONSTRAINT "FK_6d590eaf233b6231a87ab0e6657" FOREIGN KEY ("ordemId") REFERENCES "atividades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "planejamentos" DROP CONSTRAINT "FK_6d590eaf233b6231a87ab0e6657"`);
        await queryRunner.query(`ALTER TABLE "planejamentos" DROP CONSTRAINT "FK_6f87e8ee18c45f220eec9d304e9"`);
        await queryRunner.query(`ALTER TABLE "planejamentos" DROP CONSTRAINT "FK_17550259b5d5c50a8a65e21943c"`);
        await queryRunner.query(`ALTER TABLE "planejamentos" DROP CONSTRAINT "FK_cc5295104d3040c48e7172f4657"`);
        await queryRunner.query(`ALTER TABLE "setores" DROP CONSTRAINT "FK_2c36618691e55d3be49ecbeb11d"`);
        await queryRunner.query(`ALTER TABLE "ruas" DROP CONSTRAINT "FK_886defa029b9946f61b8d78b87d"`);
        await queryRunner.query(`ALTER TABLE "grupo_materiais" DROP CONSTRAINT "FK_9fe298553be75e928500bd5856c"`);
        await queryRunner.query(`ALTER TABLE "etapas" DROP CONSTRAINT "FK_2dcf4ecbc8e00155561d053f8a7"`);
        await queryRunner.query(`ALTER TABLE "obras" DROP CONSTRAINT "FK_40750d625bb3cb19757837f5b77"`);
        await queryRunner.query(`ALTER TABLE "obras" DROP COLUMN "Prazo_Exec"`);
        await queryRunner.query(`ALTER TABLE "obras" ADD "Prazo_Exec" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "setores" DROP COLUMN "obraId"`);
        await queryRunner.query(`ALTER TABLE "ruas" DROP COLUMN "obraId"`);
        await queryRunner.query(`ALTER TABLE "grupo_materiais" DROP COLUMN "obraId"`);
        await queryRunner.query(`ALTER TABLE "etapas" DROP COLUMN "obraId"`);
        await queryRunner.query(`ALTER TABLE "obras" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "planejamentos"`);
    }

}
