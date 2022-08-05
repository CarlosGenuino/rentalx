import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSpecification1659666388042 implements MigrationInterface {

    private static TABLE_NAME = "specifications"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: CreateSpecification1659666388042.TABLE_NAME,
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }

                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(CreateSpecification1659666388042.TABLE_NAME)
    }

}
