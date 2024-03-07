import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, 
		ManyToMany, ManyToOne, UpdateDateColumn} from "typeorm"
import { Users } from "./Users"

@Entity()
export class Articles {
	@PrimaryGeneratedColumn()
	id: Number

	@Column()
	Judul: string

	@Column()
	Content: string

	@Column()
	Author: string

	@CreateDateColumn()
	createdDate: Date

	@Column()
	Deskripsi: string

	@UpdateDateColumn()
	updatedDate: Date

	@ManyToOne(() => Users, (users) => users.articles)
	users: Users
}