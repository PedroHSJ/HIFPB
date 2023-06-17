import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687037763205 implements MigrationInterface {
    name = 'Default1687037763205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos" ADD "interpreteId" uuid`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD CONSTRAINT "FK_68928da7bc2d17aa97320091370" FOREIGN KEY ("interpreteId") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos" DROP CONSTRAINT "FK_68928da7bc2d17aa97320091370"`);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "interpreteId"`);
    }

}
