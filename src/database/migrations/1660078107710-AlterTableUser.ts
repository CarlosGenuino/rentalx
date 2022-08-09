import { CreateUser1659724911833 } from './1659724911833-CreateUser';
import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class AlterTableUser1660078107710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username");
        await queryRunner.changeColumn("users", "email", new TableColumn({
            name: "email",
            type: "varchar",
            isUnique: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "username",
            type: "varchar",
            isUnique: true
        }))
    }

}
