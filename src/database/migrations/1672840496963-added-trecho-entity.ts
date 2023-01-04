import { MigrationInterface, QueryRunner } from "typeorm";

export class addedTrechoEntity1672840496963 implements MigrationInterface {
    name = 'addedTrechoEntity1672840496963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trechos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "setorId" integer, "ruaId" integer, CONSTRAINT "PK_20a22da33c6c3f656c16c731814" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "trechos" ADD CONSTRAINT "FK_fd0b28e26da4a707f8ce9f1b30e" FOREIGN KEY ("setorId") REFERENCES "setores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trechos" ADD CONSTRAINT "FK_ae8030310628327ab866c68d99a" FOREIGN KEY ("ruaId") REFERENCES "ruas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trechos" DROP CONSTRAINT "FK_ae8030310628327ab866c68d99a"`);
        await queryRunner.query(`ALTER TABLE "trechos" DROP CONSTRAINT "FK_fd0b28e26da4a707f8ce9f1b30e"`);
        await queryRunner.query(`DROP TABLE "trechos"`);
    }

}
