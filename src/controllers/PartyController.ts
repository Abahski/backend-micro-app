import { Request, Response } from 'express'
import PartyService from '../services/PartyService'

export default new class UserControllers {
	// create
	async create(req: Request, res: Response) : Promise<Response> {
		try {
			const data = req.body
			await PartyService.create(data)

			return res
			.status(201)
			.json({ message: "Success", data });
		} catch (error) {
			return res.status(500).json({ message:error })
		}
	}

	//find all
	async find(req: Request, res: Response) : Promise<Response> {
		try {
			const data = await PartyService.find()

			return res.status(200).json(data)
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}

	// find one
	async catch(req: Request, res: Response) : Promise<Response> {
		try {
			const articelId = parseInt(req.params.id);
			const finding = await PartyService.catch(articelId)

			if (!finding) {
            return res.status(404).json({ message: "No data found" });
        }

			return res.status(202).json(finding)
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}


	//delete
	async delete(req: Request, res: Response) : Promise<Response> {
		try {
			const articleId = parseInt(req.params.id);
			const hapus = await PartyService.delete(articleId)

			return res.status(202).json({message: "User has been removed"})
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}

	//update
	async update(req: Request, res: Response) : Promise<Response> {
		try {
			const articleId = parseInt(req.params.id);
			const updated = await PartyService.updateUser(req.body, articleId)

			return res.status(202).json({message: "User has been updated"})
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}
}