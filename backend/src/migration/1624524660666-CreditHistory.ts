import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditHistory1624524660666 implements MigrationInterface {
    name = 'CreditHistory1624524660666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "credit_history" DROP COLUMN "creditScore"`);
        await queryRunner.query(`ALTER TABLE "credit_history" ADD "negScore" double precision`);
        await queryRunner.query(`ALTER TABLE "credit_history" ADD "posScore" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "credit_history" DROP COLUMN "posScore"`);
        await queryRunner.query(`ALTER TABLE "credit_history" DROP COLUMN "negScore"`);
        await queryRunner.query(`ALTER TABLE "credit_history" ADD "creditScore" double precision`);
    }

}
