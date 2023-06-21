import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687371421340 implements MigrationInterface {
    name = 'Default1687371421340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_b8a9bdfaa191fc76f733f67da1a"`);
        await queryRunner.query(`ALTER TABLE "aulas" RENAME COLUMN "dias_da_semana_id" TO "dia_da_semana_id"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_d2c74a3166ed1a36fb24c5762f7" FOREIGN KEY ("dia_da_semana_id") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_d2c74a3166ed1a36fb24c5762f7"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT B'1'`);
        await queryRunner.query(`ALTER TABLE "aulas" RENAME COLUMN "dia_da_semana_id" TO "dias_da_semana_id"`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_b8a9bdfaa191fc76f733f67da1a" FOREIGN KEY ("dias_da_semana_id") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
