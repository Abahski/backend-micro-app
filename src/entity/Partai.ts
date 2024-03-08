import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from "typeorm"

@Entity()
export class Partai {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	leader_name: string

	@Column()
	address: string

	@Column()
	visi_mission: string

	@Column()
	image: string
}