import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from "typeorm"

@Entity()
export class Party {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	leader_name: string

	@Column()
	address: string

	@Column('text', { array: true})
	visi_mission: string[]

	@Column()
	image: string
}