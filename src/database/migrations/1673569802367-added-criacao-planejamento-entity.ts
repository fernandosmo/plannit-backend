import { MigrationInterface, QueryRunner } from 'typeorm';

export class addedCriacaoPlanejamentoEntity1673569802367
  implements MigrationInterface
{
  name = 'addedCriacaoPlanejamentoEntity1673569802367';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "criar_planejamentos" ("id" SERIAL NOT NULL, "qtde" integer, "Data_criacao" TIMESTAMP NOT NULL, "Data_prevista" TIMESTAMP NOT NULL, "executado" integer, "userId" uuid NOT NULL, "obraId" integer NOT NULL, "etapaId" integer NOT NULL, "atividadeId" integer NOT NULL, "ruaId" integer, "setorId" integer, "trechoId" integer, "grupoMateriaisId" integer, "materialId" integer, CONSTRAINT "PK_3eeb1d6b36726aef8cc876bae62" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_c455e6bf1e0b45b8c29ebecf1e3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_8b94fab3d37789ce39bef3eec6a" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_f343fae5ee6391635dfe7db282b" FOREIGN KEY ("etapaId") REFERENCES "etapas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_a46779ae7aa1b3a47cc1d3439ab" FOREIGN KEY ("atividadeId") REFERENCES "atividades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_ff55e20cc7d7ca2ace0b7f49139" FOREIGN KEY ("ruaId") REFERENCES "ruas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_9536109167cabe0bd1f1ff0ceac" FOREIGN KEY ("setorId") REFERENCES "setores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_061f39e033e2e21a67b64ea81ec" FOREIGN KEY ("trechoId") REFERENCES "trechos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_a33dfc62156614616019d91abbd" FOREIGN KEY ("grupoMateriaisId") REFERENCES "grupo_materiais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" ADD CONSTRAINT "FK_ea791dae4973660685c0605c7bf" FOREIGN KEY ("materialId") REFERENCES "materiais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_ea791dae4973660685c0605c7bf"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_a33dfc62156614616019d91abbd"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_061f39e033e2e21a67b64ea81ec"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_9536109167cabe0bd1f1ff0ceac"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_ff55e20cc7d7ca2ace0b7f49139"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_a46779ae7aa1b3a47cc1d3439ab"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_f343fae5ee6391635dfe7db282b"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_8b94fab3d37789ce39bef3eec6a"`
    );
    await queryRunner.query(
      `ALTER TABLE "criar_planejamentos" DROP CONSTRAINT "FK_c455e6bf1e0b45b8c29ebecf1e3"`
    );
    await queryRunner.query(`DROP TABLE "criar_planejamentos"`);
  }
}
