import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687214215385 implements MigrationInterface {
    name = 'Default1687214215385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "interpretes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9276e77278d320afd467815618e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alunos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "aulaId" uuid, CONSTRAINT "UQ_1c78ebc1eef67355aff554d8c67" UNIQUE ("cpf"), CONSTRAINT "PK_0090f2d8573e71e8e4e274db905" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estabelecimentos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "cnpj" character varying(14) NOT NULL, CONSTRAINT "UQ_3455d71046d47839f3a69954fbe" UNIQUE ("cnpj"), CONSTRAINT "PK_d53b7e443cbcf3ca911534c9ad2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salas_de_aula" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "estabelecimentoId" uuid, "aulaId" uuid, CONSTRAINT "PK_7a6efa08374feaa9f5205d0e081" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "aulas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1c24faf8a7f2309f6b44679ee91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dias_da_semana" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "aulaId" uuid, CONSTRAINT "UQ_480ecf8fe1bc0e999b1be023419" UNIQUE ("nome"), CONSTRAINT "PK_253377aee483fcf102d6dc1bc92" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(64) NOT NULL, "password" character varying(64) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(255) NOT NULL, "ativo" bit NOT NULL DEFAULT '1', CONSTRAINT "UQ_9f78cfde576fc28f279e2b7a9cb" UNIQUE ("username"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(64) NOT NULL, CONSTRAINT "UQ_894f1ce8f4cb35f97cb2b5e0f55" UNIQUE ("nome"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alunos_interpretes" ("aluno_id" uuid NOT NULL, "interprete_id" uuid NOT NULL, CONSTRAINT "PK_f1222ad713f65bfa3ed00a57d03" PRIMARY KEY ("aluno_id", "interprete_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_669d286644c154d38f3ca4d1df" ON "alunos_interpretes" ("aluno_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b0358eea8799aef03636d6fb46" ON "alunos_interpretes" ("interprete_id") `);
        await queryRunner.query(`CREATE TABLE "usuarios_roles" ("usuario_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_98022d9c2727ebbf9bd2042d30b" PRIMARY KEY ("usuario_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2c14b9e5e2d0cf077fa4dd3350" ON "usuarios_roles" ("usuario_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_25bde7adfa5d3084b099da6476" ON "usuarios_roles" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "alunos" ADD CONSTRAINT "FK_f7edb8e58517b1f319d2d99df9d" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD CONSTRAINT "FK_b0020562dac58751ee2f386d344" FOREIGN KEY ("estabelecimentoId") REFERENCES "estabelecimentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD CONSTRAINT "FK_fbbc6d9d09aa3c9630c901c5184" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" ADD CONSTRAINT "FK_dbc17a8dee463d992c82722fdd4" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" ADD CONSTRAINT "FK_669d286644c154d38f3ca4d1df7" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" ADD CONSTRAINT "FK_b0358eea8799aef03636d6fb46d" FOREIGN KEY ("interprete_id") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios_roles" ADD CONSTRAINT "FK_2c14b9e5e2d0cf077fa4dd33502" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usuarios_roles" ADD CONSTRAINT "FK_25bde7adfa5d3084b099da64769" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios_roles" DROP CONSTRAINT "FK_25bde7adfa5d3084b099da64769"`);
        await queryRunner.query(`ALTER TABLE "usuarios_roles" DROP CONSTRAINT "FK_2c14b9e5e2d0cf077fa4dd33502"`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" DROP CONSTRAINT "FK_b0358eea8799aef03636d6fb46d"`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" DROP CONSTRAINT "FK_669d286644c154d38f3ca4d1df7"`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" DROP CONSTRAINT "FK_dbc17a8dee463d992c82722fdd4"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP CONSTRAINT "FK_fbbc6d9d09aa3c9630c901c5184"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP CONSTRAINT "FK_b0020562dac58751ee2f386d344"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP CONSTRAINT "FK_f7edb8e58517b1f319d2d99df9d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_25bde7adfa5d3084b099da6476"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c14b9e5e2d0cf077fa4dd3350"`);
        await queryRunner.query(`DROP TABLE "usuarios_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b0358eea8799aef03636d6fb46"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_669d286644c154d38f3ca4d1df"`);
        await queryRunner.query(`DROP TABLE "alunos_interpretes"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "dias_da_semana"`);
        await queryRunner.query(`DROP TABLE "aulas"`);
        await queryRunner.query(`DROP TABLE "salas_de_aula"`);
        await queryRunner.query(`DROP TABLE "estabelecimentos"`);
        await queryRunner.query(`DROP TABLE "alunos"`);
        await queryRunner.query(`DROP TABLE "interpretes"`);
    }

}
