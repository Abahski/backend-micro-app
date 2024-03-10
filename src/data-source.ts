import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Articles } from "./entity/Articles"
import { Party } from "./entity/Party"
import { Candidate } from "./entity/Candidate"
import { Votes } from "./entity/Votes"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qwerty1234",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: [Users, Articles, Party, Candidate, Votes],
    migrations: [],
    subscribers: [],
    cache: true,
})
