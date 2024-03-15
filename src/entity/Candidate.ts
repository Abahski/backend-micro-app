import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Party } from "./Party"
import { Votes } from "./Votes"


@Entity()
export class Candidate {

	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	visi_mission: string

	@Column()
	coalition: string

	@Column()
	image: string

	@OneToOne(() => Party, (party) => party.candidate)
	@JoinColumn({name: 'party', referencedColumnName: 'id'})
	party: Party

	@OneToMany(() => Votes, (votes) => votes.candidate)
	votes: Votes[]

}	