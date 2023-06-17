import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687017999983 implements MigrationInterface {
    name = 'Default1687017999983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "alunos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0090f2d8573e71e8e4e274db905" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "interpreteId" uuid, CONSTRAINT "PK_c69b602fc8441125f1310a4858d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "interpretes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9276e77278d320afd467815618e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD CONSTRAINT "FK_18f613762e53a74c9752d323a3f" FOREIGN KEY ("interpreteId") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horarios" DROP CONSTRAINT "FK_18f613762e53a74c9752d323a3f"`);
        await queryRunner.query(`DROP TABLE "interpretes"`);
        await queryRunner.query(`DROP TABLE "horarios"`);
        await queryRunner.query(`DROP TABLE "alunos"`);
    }

}
