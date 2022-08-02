import { DataSource } from "typeorm"
import { Category } from "../modules/entities/Category"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "develop",
    password: "123456",
    database: "rentalx",
    entities: [Category],
    synchronize: true,
    logging: false,
    migrations: ["./src/database/migrations/*.ts"],
})

AppDataSource.initialize()
    .then(() => {
        console.log('tentando criar conexão com banco de dados');
    })
    .catch((error) => console.log(error))


export default AppDataSource;