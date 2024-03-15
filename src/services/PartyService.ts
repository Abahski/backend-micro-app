import { AppDataSource } from "../data-source";
import { Party } from "../entity/Party";

export default new class PartyService {
	async create(reqBody: any) : Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Party)

			const party = repository.create({
				name: reqBody.name,
				leader_name: reqBody.leader_name,
				address: reqBody.address,
				visi_mission: reqBody.visi_mission,
				image: reqBody.image
			})

			await AppDataSource
				.getRepository(Party)
				.createQueryBuilder()
				.insert()
				.into(Party)
				.values(party)
				.execute()

			return party
		} catch(error) {
			throw error
		}
	}

	async find(): Promise<any> {
		try {
			const party = await AppDataSource
				.getRepository(Party)
				.createQueryBuilder("party")
				.getMany()

			return party
		} catch(error) {
			throw error
		}
	}

	async catch(id: number): Promise<any> {
		try {
			const users = await AppDataSource
				.getRepository(Party)
				.createQueryBuilder("party")
				.where("party.id = :id", { id: id})
				.getOne()

			return users
		} catch(error) {
			throw error
		}
	}


	async delete(id: number): Promise<any> {
		try {
			const users = await AppDataSource
				.getRepository(Party)
				.createQueryBuilder()
			    .delete()
			    .from(Party)
			    .where({ id })
			    .execute()

			return users
		} catch(error) {
			throw error
		}
	}

	async updateUser(reqBody: any, id:number): Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Party)

			const party = repository.create({
				name: reqBody.name,
				leader_name: reqBody.leader_name,
				address: reqBody.address,
				visi_mission: reqBody.visi_mission,
				image: reqBody.image
			})

			await AppDataSource
			.getRepository(Party)
			.createQueryBuilder()
			.update(Party)
			.set(party)
			.where({ id })
			.execute();

		} catch(error) {
			throw error
		}
	}
}