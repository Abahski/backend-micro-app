import { Request, Response } from 'express';
import ArticleService from '../services/ArticleService';
import { ArticleValidator } from '../validator/Article';


export default new class ArticleControllers{
    // create
    async insertArticle(req: Request, res: Response) : Promise<Response> {
        try {
          const data = req.body

          const {error, value} = ArticleValidator.validate(data)

          if(error) return res.status(400).json({message: error.details[0].message})

          const user = await ArticleService.create(value)

          return res
            .status(200)
            .json({ message: "Create data Article Success", user });
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Server Error", serverMessage: error });
        }  
    }

    // find all
    async find(req: Request, res: Response): Promise<Response> {
    try {
      const article = await ArticleService.find();

      return res.status(200).json(article);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

    // find one
    async catch(req: Request, res: Response) : Promise<Response> {
        try {
            const articleId = parseInt(req.params.id);
            const finding = await ArticleService.catch(articleId)

            if (!finding) {
            return res.status(404).json({ message: "No data found" });
        }

            return res.status(202).json(finding)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    // find all article based on one id
    async findUser(req: Request, res: Response) : Promise<Response> {
        try {
            const userId = parseInt(req.params.id);
            
            const finding = await ArticleService.getArticleById(userId)

            if (!finding) {
            return res.status(404).json({ message: "No data found" });
        }

            return res.status(202).json(finding)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }


    // update
    async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await ArticleService.updateArticle(body, id);
      return res
        .status(200)
        .json({ message: "Update Article Success", data: { id: id, ...body } });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }


    // delete
    async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await ArticleService.delete(id);
      return res.status(200).json({ message: "Delete Article Success" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

}
