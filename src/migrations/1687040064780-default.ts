import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687040064780 implements MigrationInterface {
    name = 'Default1687040064780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD "estabelecimentoId" uuid`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD CONSTRAINT "FK_b0020562dac58751ee2f386d344" FOREIGN KEY ("estabelecimentoId") REFERENCES "estabelecimentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP CONSTRAINT "FK_b0020562dac58751ee2f386d344"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP COLUMN "estabelecimentoId"`);
    }

}
