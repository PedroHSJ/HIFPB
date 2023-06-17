import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687019710383 implements MigrationInterface {
    name = 'Default1687019710383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos" ADD CONSTRAINT "UQ_1c78ebc1eef67355aff554d8c67" UNIQUE ("cpf")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos" DROP CONSTRAINT "UQ_1c78ebc1eef67355aff554d8c67"`);
    }

}
