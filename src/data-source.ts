import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Users } from "./entity/Users"
import { Articles } from "./entity/Articles"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qwerty1234",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: [User, Users, Articles],
    migrations: [],
    subscribers: [],
    cache: true,
})