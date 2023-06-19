import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687205753929 implements MigrationInterface {
    name = 'Default1687205753929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos" DROP CONSTRAINT "FK_68928da7bc2d17aa97320091370"`);
        await queryRunner.query(`CREATE TABLE "alunos_interpretes" ("aluno_id" uuid NOT NULL, "interprete_id" uuid NOT NULL, CONSTRAINT "PK_f1222ad713f65bfa3ed00a57d03" PRIMARY KEY ("aluno_id", "interprete_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_669d286644c154d38f3ca4d1df" ON "alunos_interpretes" ("aluno_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b0358eea8799aef03636d6fb46" ON "alunos_interpretes" ("interprete_id") `);
        await queryRunner.query(`ALTER TABLE "alunos" DROP COLUMN "interpreteId"`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" ADD CONSTRAINT "FK_669d286644c154d38f3ca4d1df7" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" ADD CONSTRAINT "FK_b0358eea8799aef03636d6fb46d" FOREIGN KEY ("interprete_id") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" DROP CONSTRAINT "FK_b0358eea8799aef03636d6fb46d"`);
        await queryRunner.query(`ALTER TABLE "alunos_interpretes" DROP CONSTRAINT "FK_669d286644c154d38f3ca4d1df7"`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD "interpreteId" uuid`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b0358eea8799aef03636d6fb46"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_669d286644c154d38f3ca4d1df"`);
        await queryRunner.query(`DROP TABLE "alunos_interpretes"`);
        await queryRunner.query(`ALTER TABLE "alunos" ADD CONSTRAINT "FK_68928da7bc2d17aa97320091370" FOREIGN KEY ("interpreteId") REFERENCES "interpretes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
