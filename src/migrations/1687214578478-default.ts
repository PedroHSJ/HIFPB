import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687214578478 implements MigrationInterface {
    name = 'Default1687214578478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos" DROP CONSTRAINT "FK_f7edb8e58517b1f319d2d99df9d"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP CONSTRAINT "FK_fbbc6d9d09aa3c9630c901c5184"`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" DROP CONSTRAINT "FK_dbc17a8dee463d992c82722fdd4"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "aulaId"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP COLUMN "aulaId"`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" DROP COLUMN "aulaId"`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "alunoId" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "diasDaSemanaId" uuid`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD "salaDeAulaId" uuid`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_e3dd613f57b4ff9725bec52f1a3" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_e4f20c8899faf15d2084dd33d9f" FOREIGN KEY ("diasDaSemanaId") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aulas" ADD CONSTRAINT "FK_1922236f26394431b81c71d803f" FOREIGN KEY ("salaDeAulaId") REFERENCES "salas_de_aula"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_1922236f26394431b81c71d803f"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_e4f20c8899faf15d2084dd33d9f"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP CONSTRAINT "FK_e3dd613f57b4ff9725bec52f1a3"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "ativo" SET DEFAULT B'1'`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "salaDeAulaId"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "diasDaSemanaId"`);
        await queryRunner.query(`ALTER TABLE "aulas" DROP COLUMN "alunoId"`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" ADD "aulaId" uuid`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD "aulaId" uuid`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD "aulaId" uuid`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" ADD CONSTRAINT "FK_dbc17a8dee463d992c82722fdd4" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD CONSTRAINT "FK_fbbc6d9d09aa3c9630c901c5184" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD CONSTRAINT "FK_f7edb8e58517b1f319d2d99df9d" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
