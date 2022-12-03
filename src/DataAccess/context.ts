import { DataSource } from "typeorm";
import { User } from "../Entities/User";

export const context = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "FisDb2",
    logging: true,
    synchronize: true,
    entities: [
        User
    ]
})