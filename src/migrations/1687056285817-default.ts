import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687056285817 implements MigrationInterface {
    name = 'Default1687056285817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estabelecimentos" ADD "cnpj" character varying(14) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estabelecimentos" ADD CONSTRAINT "UQ_3455d71046d47839f3a69954fbe" UNIQUE ("cnpj")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estabelecimentos" DROP CONSTRAINT "UQ_3455d71046d47839f3a69954fbe"`);
        await queryRunner.query(`ALTER TABLE "estabelecimentos" DROP COLUMN "cnpj"`);
    }

}
