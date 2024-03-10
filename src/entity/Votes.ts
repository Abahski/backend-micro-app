import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm"
import { Candidate } from "./Candidate"
import { Users } from "./Users"

@Entity()
export class Votes {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => Candidate, (candidate) => candidate.votes)
	@JoinColumn({name: 'candidate', referencedColumnName: 'id'})
	candidate: Candidate
	
	@OneToOne(() => Users, (users) => users.id)
	@JoinColumn({name: 'users', referencedColumnName: 'id'})
	users: Users
}