import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687356573996 implements MigrationInterface {
    name = 'Default1687356573996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "interpretes" ADD CONSTRAINT "UQ_85040a2226c6b9bc9826bdc219d" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT B'1'`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP CONSTRAINT "UQ_85040a2226c6b9bc9826bdc219d"`);
    }

}
