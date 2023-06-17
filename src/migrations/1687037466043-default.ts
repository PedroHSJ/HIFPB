import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687037466043 implements MigrationInterface {
    name = 'Default1687037466043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "salas_de_aula" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, CONSTRAINT "PK_7a6efa08374feaa9f5205d0e081" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horarios_salas_de_aula" ("horario_id" uuid NOT NULL, "sala_de_aula_id" uuid NOT NULL, CONSTRAINT "PK_92f06365a3061823a80c9a8e414" PRIMARY KEY ("horario_id", "sala_de_aula_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3d1399606ffa931fc8537d3e29" ON "horarios_salas_de_aula" ("horario_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a212dad3e062d58d82a3110452" ON "horarios_salas_de_aula" ("sala_de_aula_id") `);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "data_alteracao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD "horario" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD "data_alteracao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD "data_alteracao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "horarios_salas_de_aula" ADD CONSTRAINT "FK_3d1399606ffa931fc8537d3e29f" FOREIGN KEY ("horario_id") REFERENCES "salas_de_aula"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "horarios_salas_de_aula" ADD CONSTRAINT "FK_a212dad3e062d58d82a31104527" FOREIGN KEY ("sala_de_aula_id") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horarios_salas_de_aula" DROP CONSTRAINT "FK_a212dad3e062d58d82a31104527"`);
        await queryRunner.query(`ALTER TABLE "horarios_salas_de_aula" DROP CONSTRAINT "FK_3d1399606ffa931fc8537d3e29f"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "data_alteracao"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP COLUMN "data_alteracao"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP COLUMN "horario"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "data_alteracao"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD "data" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a212dad3e062d58d82a3110452"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d1399606ffa931fc8537d3e29"`);
        await queryRunner.query(`DROP TABLE "horarios_salas_de_aula"`);
        await queryRunner.query(`DROP TABLE "salas_de_aula"`);
    }

}
