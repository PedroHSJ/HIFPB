import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687034954366 implements MigrationInterface {
    name = 'Default1687034954366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(64) NOT NULL, "password" character varying(64) NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP CONSTRAINT "UQ_8e9fc9b659bd7b0574dedf22238"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "username" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD CONSTRAINT "UQ_8e9fc9b659bd7b0574dedf22238" UNIQUE ("username")`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
