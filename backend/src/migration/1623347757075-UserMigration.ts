import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1623347757075 implements MigrationInterface {
    name = 'UserMigration1623347757075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "username" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "username" DROP NOT NULL`);
    }

}
