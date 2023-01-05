import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateMateriaisTrechos1672956863411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "materiais" ALTER COLUMN "custo" TYPE numeric(12,2)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "materiais"`);
  }
}
