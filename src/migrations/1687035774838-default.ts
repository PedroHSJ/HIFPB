import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687035774838 implements MigrationInterface {
    name = 'Default1687035774838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "UQ_9f78cfde576fc28f279e2b7a9cb" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "UQ_9f78cfde576fc28f279e2b7a9cb"`);
    }

}
