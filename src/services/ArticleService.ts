import { AppDataSource } from "../data-source";
import { Articles } from "../entity/Articles";

export default new (class ArticleService {
	repository = AppDataSource.getRepository(Articles)

	// create
	async create(reqBody: any) {
		try {
			const article = this.repository.create({
				title: reqBody.title,
		        image: reqBody.image,
		        content: reqBody.content,
		        description: reqBody.description,
		        users: reqBody.users,
				})

			await this.repository
	        .createQueryBuilder()
	        .insert()
	        .into(Articles)
	        .values(article)
	        .execute();
		} catch(error) {
			throw(error)
		}
	}

	//find all
	async find(): Promise<any> {
		try {
			const article = await AppDataSource
				.getRepository(Articles)
				.createQueryBuilder("article")
				.leftJoinAndSelect("article.users", "users")
				.getMany()

			return article
		} catch(error) {
			throw error
		}
	}

	// find one
	async catch(id: number): Promise<any> {
		try {
			const article = await AppDataSource
				.getRepository(Articles)
				.createQueryBuilder("article")
				.leftJoinAndSelect("article.users", "users")
				.where("article.id = :id", { id: id})
				.getOne()

			return article
		} catch(error) {
			throw error
		}
	}

	//update
	async updateArticle(reqBody: any, id:number): Promise<any> {
		try {
			const repository = AppDataSource.getRepository(Articles)

			const article = this.repository.create({
				title: reqBody.title,
		        image: reqBody.image,
		        content: reqBody.content,
		        description: reqBody.description,
				})

			await AppDataSource
			.getRepository(Articles)
			.createQueryBuilder()
			.update(Articles)
			.set(article)
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
				.getRepository(Articles)
				.createQueryBuilder()
			    .delete()
			    .from(Articles)
			    .where({ id })
			    .execute()

			return article
		} catch(error) {
			throw error
		}
	}
})

