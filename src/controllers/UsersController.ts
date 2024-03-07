import { Request, Response } from 'express'
import UsersService from '../services/UsersService'
import { UserValidator } from '../validator/User'

export default new class UserControllers {
	async create(req: Request, res: Response) : Promise<Response> {
		try {
			const data = req.body

			const {error, value} = UserValidator.validate(data)

			if(error) return res.status(400).json({message: error.details[0].message})

			const user = await UsersService.create(value)

			return res.status(201).json(user)
		} catch (error) {
			return res.status(500).json({ message:error })
		}
	}

	async find(req: Request, res: Response) : Promise<Response> {
		try {
			const users = await UsersService.find()

			return res.status(200).json(users)
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}

	async catch(req: Request, res: Response) : Promise<Response> {
		try {
			const userId = parseInt(req.params.id);
			const finding = await UsersService.catch(userId)

			if (!finding) {
            return res.status(404).json({ message: "No data found" });
        }

			return res.status(202).json(finding)
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}

	async delete(req: Request, res: Response) : Promise<Response> {
		try {
			const userId = parseInt(req.params.id);
			const hapus = await UsersService.delete(userId)

			return res.status(202).json({message: "User has been removed"})
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}

	async update(req: Request, res: Response) : Promise<Response> {
		try {
			const userId = parseInt(req.params.id);
			const updated = await UsersService.updateUser(req.body, userId)

			return res.status(202).json({message: "User has been updated"})
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}
}