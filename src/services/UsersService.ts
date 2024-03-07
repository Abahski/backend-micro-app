import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";

export default new class UsersService {
	async create(reqBody: any) : Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Users)

			const user = repository.create({
				Fullname: reqBody.Fullname,
				Alamat: reqBody.Alamat,
				Jenis_Kelamin: reqBody.Jenis_Kelamin,
				Username: reqBody.Username,
				Password: reqBody.Password,
				Role: reqBody.Role
			})

			await AppDataSource
				.getRepository(Users)
				.createQueryBuilder()
				.insert()
				.into(Users)
				.values(user)
				.execute()

			return user
		} catch(error) {
			throw error
		}
	}

	async find(): Promise<any> {
		try {
			const users = await AppDataSource
				.getRepository(Users)
				.createQueryBuilder("user")
				.getMany()

			return users
		} catch(error) {
			throw error
		}
	}

	async catch(id: number): Promise<any> {
		try {
			const users = await AppDataSource
				.getRepository(Users)
				.createQueryBuilder("user")
				.where("user.id = :id", { id: id})
				.getOne()

			return users
		} catch(error) {
			throw error
		}
	}


	async delete(id: number): Promise<any> {
		try {
			const users = await AppDataSource
				.getRepository(Users)
				.createQueryBuilder()
			    .delete()
			    .from(Users)
			    .where({ id })
			    .execute()

			return users
		} catch(error) {
			throw error
		}
	}

	async updateUser(reqBody: any, id:number): Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Users)

			const user = repository.create({
				Fullname: reqBody.Fullname,
				Alamat: reqBody.Alamat,
				Password: reqBody.Password
			})

			await AppDataSource
			.getRepository(Users)
			.createQueryBuilder()
			.update(Users)
			.set(user)
			.where({ id })
			.execute();

		} catch(error) {
			throw error
		}
	}
}