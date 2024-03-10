import { AppDataSource } from "../data-source";
import { Candidate } from "../entity/Candidate";

export default new ( class CandiateService {
	repository = AppDataSource.getRepository(Candidate)

	//create
	async create(reqBody: any) {
		try {
			const candidate = this.repository.create({
				name: reqBody.name,
				visi_mission: reqBody.visi_mission,
				coalition: reqBody.coalition,
				image: reqBody.image,
				party: reqBody.party

			})

			await this.repository
			.createQueryBuilder()
	        .insert()
	        .into(Candidate)
	        .values(candidate)
	        .execute();
		} catch(error) {
			throw(error)
		}
	}

	//find all
	async find(): Promise<any> {
		try {
			const candidate = await AppDataSource
				.getRepository(Candidate)
				.createQueryBuilder("candidate")
				.leftJoinAndSelect("candidate.party", "party")
				.getMany()

			return candidate
		} catch(error) {
			throw error
		}
	}

	// find one
	async catch(id: number): Promise<any> {
		try {
			const candidate = await AppDataSource
				.getRepository(Candidate)
				.createQueryBuilder("candidate")
				.leftJoinAndSelect("candidate.party", "party")
				.where("candidate.id = :id", { id: id})
				.getOne()

			return candidate
		} catch(error) {
			throw error
		}
	}

	//update
	async updateArticle(reqBody: any, id:number): Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Candidate)

			const candidate = this.repository.create({
				name: reqBody.name,
				visi_mission: reqBody.visi_mission,
				coalition: reqBody.coalition,
				image: reqBody.image,
				party: reqBody.party
				})

			await AppDataSource
			.getRepository(Candidate)
			.createQueryBuilder()
			.update(Candidate)
			.set(candidate)
			.where({ id })
			.execute();

		} catch(error) {
			throw error
		}
	}

	//delete
	async delete(id: number): Promise<any> {
		try {
			const article = await AppDataSource
				.getRepository(Candidate)
				.createQueryBuilder()
			    .delete()
			    .from(Candidate)
			    .where({ id })
			    .execute()

			return article
		} catch(error) {
			throw error
		}
	}

	})
