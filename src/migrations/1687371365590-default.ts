import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687371365590 implements MigrationInterface {
    name = 'Default1687371365590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT B'1'`);
    }

}
