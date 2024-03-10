import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"
import { Articles } from "./Articles"
import { Votes } from "./Votes"


export enum Gender {
    Male = 'Laki-laki',
    Female = 'Perempuan'
}

export enum Roles {
    Admin = 'Admin',
    User = 'User'

}

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column()
    address: string

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.Male,
    })
    gender: Gender

    @Column()
    username: string

    @Column()
    password: string

    @Column({
        type: "enum",
        enum: Roles,
        default: Roles.User
    })
    role: Roles

    @OneToMany(() => Articles, (articles) => articles.users)
    articles: Articles[]

    @OneToOne(() => Votes, (votes) => votes.users)
    votes: Votes
}