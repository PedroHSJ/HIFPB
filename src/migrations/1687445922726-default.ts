import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687445922726 implements MigrationInterface {
    name = 'Default1687445922726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_fda96609e322409e28ed5561427"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_d2c74a3166ed1a36fb24c5762f7"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_9260fdf54a06ccec9eee74652e4"`);
        await queryRunner.query(`ALTER TABLE "aulas" ALTER COLUMN "aluno_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "aulas" ALTER COLUMN "dia_da_semana_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "aulas" ALTER COLUMN "sala_de_aula_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_fda96609e322409e28ed5561427" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_d2c74a3166ed1a36fb24c5762f7" FOREIGN KEY ("dia_da_semana_id") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_9260fdf54a06ccec9eee74652e4" FOREIGN KEY ("sala_de_aula_id") REFERENCES "salas_de_aula"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_9260fdf54a06ccec9eee74652e4"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_d2c74a3166ed1a36fb24c5762f7"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_fda96609e322409e28ed5561427"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT B'1'`);
        await queryRunner.query(`ALTER TABLE "aulas" ALTER COLUMN "sala_de_aula_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "aulas" ALTER COLUMN "dia_da_semana_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "aulas" ALTER COLUMN "aluno_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_9260fdf54a06ccec9eee74652e4" FOREIGN KEY ("sala_de_aula_id") REFERENCES "salas_de_aula"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_d2c74a3166ed1a36fb24c5762f7" FOREIGN KEY ("dia_da_semana_id") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_fda96609e322409e28ed5561427" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
