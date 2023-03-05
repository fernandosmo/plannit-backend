import { MigrationInterface, QueryRunner } from "typeorm"

export class updatePlanejamentoEntity1677969371662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" DROP COLUMN "Data_criacao"`);
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" DROP COLUMN "Data_prevista"`);
        await queryRunner.query(`ALTER TABLE "planejamentos" DROP COLUMN "previsao_fim"`);
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" ADD COLUMN "Data_criacao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" ADD COLUMN "Data_prevista" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "planejamentos" ADD COLUMN "previsao_fim" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" ADD COLUMN "Data_criacao" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" ADD COLUMN "Data_prevista" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "planejamentos" ADD COLUMN "previsao_fim" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" DROP COLUMN "Data_criacao"`);
        await queryRunner.query(`ALTER TABLE "criar_planejamentos" DROP COLUMN "Data_prevista"`);
        await queryRunner.query(`ALTER TABLE "planejamentos" DROP COLUMN "previsao_fim"`);
    }

}
