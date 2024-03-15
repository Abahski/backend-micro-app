import { AppDataSource } from "../data-source";
import { Articles } from "../entity/Articles";
import { Users } from "../entity/Users";

export default new (class ArticleService {
	repository = AppDataSource.getRepository(Articles)

	// create
	async create(reqBody: any) {
		try {
			const article = this.repository.create({
				title: reqBody.title,
		        image: reqBody.image,
		        content: reqBody.content,
		        headline: reqBody.headline,
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

	//find all article
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

	// find one article
	async catch(id: number): Promise<any> {
		try {
			const article = await AppDataSource
				.getRepository(Articles)
				.createQueryBuilder("article")
				.leftJoinAndSelect("article.users", "users")
				.addSelect(["users.id"])
				.where("article.id = :id", { id: id})
				.getOne()

			return article
		} catch(error) {
			throw error
		}
	}

	// find all article based on id
	async getArticleById(userId: number): Promise<any> {
		try {
			const article = await this.repository
				.createQueryBuilder("article")
				.leftJoin("article.users", "users")
				.addSelect(["users.id"])
				.where("users.id = :userId", { userId: userId})
				.loadAllRelationIds()
				.getMany()

			return article
		} catch(error) {
			throw error
		}
	}

	//update
	async updateArticle(reqBody: any, id:number): Promise<any> {
		try {

			const article = this.repository.create({
				title: reqBody.title,
		        image: reqBody.image,
		        content: reqBody.content,
		        headline: reqBody.headline,
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

