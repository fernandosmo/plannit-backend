import { MigrationInterface, QueryRunner } from "typeorm";

export class addedObraEntity1672781167494 implements MigrationInterface {
    name = 'addedObraEntity1672781167494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "obras" ("id" SERIAL NOT NULL, "Empreendimento" character varying NOT NULL, "Endereço" character varying NOT NULL, "Estado" character varying NOT NULL, "Regiao" character varying NOT NULL, "Assinatura_Contrato" character varying NOT NULL, "Alvara_Exec" character varying NOT NULL, "Prazo_Exec" character varying NOT NULL, "Data_Final" character varying NOT NULL, "prazo_exec_invest" character varying NOT NULL, "Início_atividades" character varying NOT NULL, "Coordenacao" character varying NOT NULL, "Gestor" character varying NOT NULL, CONSTRAINT "PK_1645460dfba8e8c144ecd8436da" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "obras"`);
    }

}
