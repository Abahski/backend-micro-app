import { Entity, PrimaryGeneratedColumn, Column, 
CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Articles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    image: string

    @Column()
    content: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column()
    description: string;

    @UpdateDateColumn()
    updatedDate: Date;

    @ManyToOne(() => Users, (user) => user.articles)
    @JoinColumn({ name: 'user', referencedColumnName: 'id' })
    users: Users;
}
