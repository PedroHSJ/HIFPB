import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687040318954 implements MigrationInterface {
    name = 'Default1687040318954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD "data_alteracao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "data_alteracao" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "data_alteracao"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP COLUMN "data_alteracao"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP COLUMN "data_criacao"`);
    }

}
