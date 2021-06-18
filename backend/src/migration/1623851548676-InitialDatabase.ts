import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDatabase1623851548676 implements MigrationInterface {
    name = 'InitialDatabase1623851548676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "dateOfBirth" date, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "username" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "credit_history" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "creditScore" double precision, "customerId" integer NOT NULL, "userId" integer, CONSTRAINT "PK_1f23079c40e17baba72a8f83d41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "credit_history" ADD CONSTRAINT "FK_4041098965b5ea95c7863c94e2f" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credit_history" ADD CONSTRAINT "FK_7c689c904a5dadd63126a5c948f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "credit_history" DROP CONSTRAINT "FK_7c689c904a5dadd63126a5c948f"`);
        await queryRunner.query(`ALTER TABLE "credit_history" DROP CONSTRAINT "FK_4041098965b5ea95c7863c94e2f"`);
        await queryRunner.query(`DROP TABLE "credit_history"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
