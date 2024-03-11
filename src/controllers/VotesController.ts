import { Request, Response } from 'express';
import VoteService from '../services/VotesService';
import { VoteValidator } from '../validator/Vote';


export default new class VoteControllers{
    // create
    async create(req: Request, res: Response) : Promise<Response> {
        try {
          const data = req.body

          const {error, value} = VoteValidator.validate(data)

          if(error) return res.status(400).json({message: error.details[0].message})

            const user = await VoteService.create(value)

            return res
            .status(200)
            .json({ message: "Create data vote Success", user });
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Server Error", serverMessage: error });
        }  
    }

    // find all
    async find(req: Request, res: Response): Promise<Response> {
    try {
      const vote = await VoteService.find();

      return res.status(200).json(vote);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

    // find one
    async catch(req: Request, res: Response) : Promise<Response> {
        try {
            const voteId = parseInt(req.params.id);
            const finding = await VoteService.catch(voteId)

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
      await VoteService.update(body, id);
      return res
        .status(200)
        .json({ message: "Update vote Success", data: { id: id, ...body } });
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
      await VoteService.delete(id);
      return res.status(200).json({ message: "Delete vote Success" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

}
