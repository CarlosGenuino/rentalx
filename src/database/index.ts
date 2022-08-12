import { DataSource } from "typeorm"
import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category"
import { Specification } from "../modules/cars/entities/Specification";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "develop",
    password: "123456",
    database: "rentalx",
    entities: [Category, Specification, User],
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