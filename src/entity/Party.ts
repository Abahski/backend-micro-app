import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, OneToOne } from "typeorm"
import { Candidate } from "./Candidate"

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

	@Column()
	visi_mission: string

	@Column()
	image: string

	@OneToOne(() => Candidate, (candidate) => candidate.party)
	candidate: Candidate
}