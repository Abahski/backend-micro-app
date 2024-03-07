import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";
import { Articles } from "../entity/Articles";
import { getRepository, getConnection } from "typeorm";

export default new class ArticleService {
		async insertArticle(reqBody:any, userId: number) {
	    try {
	        const repository = await getRepository(Users).findOne(userId);
	        
	        const newArticle = new Articles();
	        newArticle.Judul = reqBody.Judul;
	        newArticle.Content = reqBody.Content;
	        newArticle.Author = reqBody.Author;
	        newArticle.Deskripsi = reqBody.Deskripsi;


	        if (repository) {
	            newArticle.users = repository;
	            await getConnection()
	                .createQueryBuilder()
	                .insert()
	                .into(Articles)
	                .values(newArticle)
	                .execute();

	            console.log("Article saved successfully.");
	        } else {
	            console.log("User not found.");
	        }
	    } catch (error) {
	        console.error("Error inserting article:", error);
	        throw error;
	    }
	}

}