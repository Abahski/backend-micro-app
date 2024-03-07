import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Articles } from "./Articles"


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
    Fullname: string

    @Column()
    Alamat: string

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.Male,
    })
    Jenis_Kelamin: Gender

    @Column()
    Username: string

    @Column()
    Password: string

    @Column({
        type: "enum",
        enum: Roles,
        default: Roles.User
    })
    Role: Roles

    @OneToMany(() => Articles, (articles) => articles.users)
    articles: Articles[]
}