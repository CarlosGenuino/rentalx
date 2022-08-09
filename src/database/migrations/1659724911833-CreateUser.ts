import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1659724911833 implements MigrationInterface {
    private static TABLE_NAME = "users";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: CreateUser1659724911833.TABLE_NAME,
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "driver_license",
                        type: "varchar"
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]

            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(CreateUser1659724911833.TABLE_NAME);
    }

}
