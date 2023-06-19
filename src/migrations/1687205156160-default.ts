import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687205156160 implements MigrationInterface {
    name = 'Default1687205156160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "ativo" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "ativo"`);
    }

}
