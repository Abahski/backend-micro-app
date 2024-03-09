import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Articles } from "./entity/Articles"
import { Party } from "./entity/Party"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qwerty1234",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: [Users, Articles, Party],
    migrations: [],
    subscribers: [],
    cache: true,
})
