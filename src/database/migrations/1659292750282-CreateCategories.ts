import { MigrationInterface, QueryRunner, Table } from "typeorm"
export class CreateCategories1659292750282 implements MigrationInterface {

    private static TABLE_NAME = "categories";


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: CreateCategories1659292750282.TABLE_NAME,
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
        await queryRunner.dropTable(CreateCategories1659292750282.TABLE_NAME)
    }

}
