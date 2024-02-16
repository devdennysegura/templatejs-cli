import { MigrationInterface, QueryRunner } from "typeorm";

export class UserCreation1708065467976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" (
                    "id" SERIAL NOT NULL,
                    "name" character varying NOT NULL,
                    "email" character varying NOT NULL,
                    "password" character varying NOT NULL,
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                    CONSTRAINT "PK_user" PRIMARY KEY ("id")
                )`
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "IDX_user_email" ON "user" ("email")`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_user_email"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
