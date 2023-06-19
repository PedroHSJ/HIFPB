import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687205345463 implements MigrationInterface {
    name = 'Default1687205345463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "ativo"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "ativo" bit NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "ativo"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "ativo" boolean NOT NULL DEFAULT true`);
    }

}
