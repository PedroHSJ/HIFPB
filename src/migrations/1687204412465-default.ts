import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687204412465 implements MigrationInterface {
    name = 'Default1687204412465'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "alunos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "interpreteId" uuid, CONSTRAINT "UQ_1c78ebc1eef67355aff554d8c67" UNIQUE ("cpf"), CONSTRAINT "PK_0090f2d8573e71e8e4e274db905" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "interpretes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9276e77278d320afd467815618e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estabelecimentos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "cnpj" character varying(14) NOT NULL, CONSTRAINT "UQ_3455d71046d47839f3a69954fbe" UNIQUE ("cnpj"), CONSTRAINT "PK_d53b7e443cbcf3ca911534c9ad2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salas_de_aula" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "estabelecimentoId" uuid, CONSTRAINT "PK_7a6efa08374feaa9f5205d0e081" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dias_da_semana" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "interpreteId" uuid, CONSTRAINT "UQ_480ecf8fe1bc0e999b1be023419" UNIQUE ("nome"), CONSTRAINT "PK_253377aee483fcf102d6dc1bc92" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(64) NOT NULL, "password" character varying(64) NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "data_alteracao" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(255) NOT NULL, CONSTRAINT "UQ_9f78cfde576fc28f279e2b7a9cb" UNIQUE ("username"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(64) NOT NULL, CONSTRAINT "UQ_894f1ce8f4cb35f97cb2b5e0f55" UNIQUE ("nome"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salas_de_aula_dias_da_semana" ("sala_de_aula_id" uuid NOT NULL, "dia_da_semana_id" uuid NOT NULL, CONSTRAINT "PK_1cce72ec24457f973b2455fbbcf" PRIMARY KEY ("sala_de_aula_id", "dia_da_semana_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6123721083976a0686a6eb5f49" ON "salas_de_aula_dias_da_semana" ("sala_de_aula_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_d00b59db1012044ab2ea3dbe59" ON "salas_de_aula_dias_da_semana" ("dia_da_semana_id") `);
        await queryRunner.query(`CREATE TABLE "usuarios_roles" ("usuario_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_98022d9c2727ebbf9bd2042d30b" PRIMARY KEY ("usuario_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2c14b9e5e2d0cf077fa4dd3350" ON "usuarios_roles" ("usuario_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_25bde7adfa5d3084b099da6476" ON "usuarios_roles" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "alunos" ADD CONSTRAINT "FK_68928da7bc2d17aa97320091370" FOREIGN KEY ("interpreteId") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" ADD CONSTRAINT "FK_b0020562dac58751ee2f386d344" FOREIGN KEY ("estabelecimentoId") REFERENCES "estabelecimentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" ADD CONSTRAINT "FK_9c995812ae98c69a47db5d25ed8" FOREIGN KEY ("interpreteId") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula_dias_da_semana" ADD CONSTRAINT "FK_6123721083976a0686a6eb5f492" FOREIGN KEY ("sala_de_aula_id") REFERENCES "salas_de_aula"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula_dias_da_semana" ADD CONSTRAINT "FK_d00b59db1012044ab2ea3dbe595" FOREIGN KEY ("dia_da_semana_id") REFERENCES "dias_da_semana"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios_roles" ADD CONSTRAINT "FK_2c14b9e5e2d0cf077fa4dd33502" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usuarios_roles" ADD CONSTRAINT "FK_25bde7adfa5d3084b099da64769" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios_roles" DROP CONSTRAINT "FK_25bde7adfa5d3084b099da64769"`);
        await queryRunner.query(`ALTER TABLE "usuarios_roles" DROP CONSTRAINT "FK_2c14b9e5e2d0cf077fa4dd33502"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula_dias_da_semana" DROP CONSTRAINT "FK_d00b59db1012044ab2ea3dbe595"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula_dias_da_semana" DROP CONSTRAINT "FK_6123721083976a0686a6eb5f492"`);
        await queryRunner.query(`ALTER TABLE "dias_da_semana" DROP CONSTRAINT "FK_9c995812ae98c69a47db5d25ed8"`);
        await queryRunner.query(`ALTER TABLE "salas_de_aula" DROP CONSTRAINT "FK_b0020562dac58751ee2f386d344"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP CONSTRAINT "FK_68928da7bc2d17aa97320091370"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_25bde7adfa5d3084b099da6476"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c14b9e5e2d0cf077fa4dd3350"`);
        await queryRunner.query(`DROP TABLE "usuarios_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d00b59db1012044ab2ea3dbe59"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6123721083976a0686a6eb5f49"`);
        await queryRunner.query(`DROP TABLE "salas_de_aula_dias_da_semana"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "dias_da_semana"`);
        await queryRunner.query(`DROP TABLE "salas_de_aula"`);
        await queryRunner.query(`DROP TABLE "estabelecimentos"`);
        await queryRunner.query(`DROP TABLE "interpretes"`);
        await queryRunner.query(`DROP TABLE "alunos"`);
    }

}
