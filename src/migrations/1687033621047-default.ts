import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687033621047 implements MigrationInterface {
    name = 'Default1687033621047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "username" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD CONSTRAINT "UQ_8e9fc9b659bd7b0574dedf22238" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "interpretes" ADD "password" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP CONSTRAINT "UQ_8e9fc9b659bd7b0574dedf22238"`);
        await queryRunner.query(`ALTER TABLE "interpretes" DROP COLUMN "username"`);
    }

}
