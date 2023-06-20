import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687214671268 implements MigrationInterface {
    name = 'Default1687214671268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_e3dd613f57b4ff9725bec52f1a3"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_1922236f26394431b81c71d803f"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_e4f20c8899faf15d2084dd33d9f"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "alunoId"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "diasDaSemanaId"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "salaDeAulaId"`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "aluno_id" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "dias_da_semana_id" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "sala_de_aula_id" uuid`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_fda96609e322409e28ed5561427" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_b8a9bdfaa191fc76f733f67da1a" FOREIGN KEY ("dias_da_semana_id") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_9260fdf54a06ccec9eee74652e4" FOREIGN KEY ("sala_de_aula_id") REFERENCES "salas_de_aula"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_9260fdf54a06ccec9eee74652e4"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_b8a9bdfaa191fc76f733f67da1a"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_fda96609e322409e28ed5561427"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT B'1'`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "sala_de_aula_id"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "dias_da_semana_id"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "aluno_id"`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "salaDeAulaId" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "diasDaSemanaId" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "alunoId" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_e4f20c8899faf15d2084dd33d9f" FOREIGN KEY ("diasDaSemanaId") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_1922236f26394431b81c71d803f" FOREIGN KEY ("salaDeAulaId") REFERENCES "salas_de_aula"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_e3dd613f57b4ff9725bec52f1a3" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
