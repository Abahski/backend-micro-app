import { AppDataSource } from "../data-source";
import { Votes } from "../entity/Votes";

export default new (class VotesService {
	repository = AppDataSource.getRepository(Votes)

	// create
	async create(reqBody: any) {
		try {
			const vote = this.repository.create({
				candidate: reqBody.candidate,
				users: reqBody.users
				})

			await this.repository
	        .createQueryBuilder()
	        .insert()
	        .into(Votes)
	        .values(vote)
	        .execute();
		} catch(error) {
			throw(error)
		}
	}

	//find all
	async find(): Promise<any> {
		try {
			const vote = await AppDataSource
				.getRepository(Votes)
				.createQueryBuilder("vote")
				.leftJoinAndSelect("vote.users", "users")
				.leftJoinAndSelect("vote.candidate", "candidate")
				.getMany()

			return vote
		} catch(error) {
			throw error
		}
	}

	// find one
	async catch(id: number): Promise<any> {
		try {
			const vote = await AppDataSource
				.getRepository(Votes)
				.createQueryBuilder("vote")
				.leftJoinAndSelect("vote.users", "users")
				.leftJoinAndSelect("vote.candidate", "candidate")
				.where("vote.id = :id", { id: id})
				.getOne()

			return vote
		} catch(error) {
			throw error
		}
	}

	//update
	async update(reqBody: any, id:number): Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Votes)

			const vote = this.repository.create({
				candidate: reqBody.candidate,
				users: reqBody.users
				})

			await AppDataSource
			.getRepository(Votes)
			.createQueryBuilder()
			.update(Votes)
			.set(vote)
			.where({ id })
			.execute();

		} catch(error) {
			throw error
		}
	}

	//delete
	async delete(id: number): Promise<any> {
		try {
			const vote = await AppDataSource
				.getRepository(Votes)
				.createQueryBuilder()
			    .delete()
			    .from(Votes)
			    .where({ id })
			    .execute()

			return vote
		} catch(error) {
			throw error
		}
	}
})

