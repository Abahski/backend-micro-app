import { Request, Response } from 'express';
import CandidateService from '../services/CandidateService';


export default new class CandidateController{
    // create
    async create(req: Request, res: Response) : Promise<Response> {
        try {
          const data = req.body;
          await CandidateService.create(data);

          return res
            .status(200)
            .json({ message: "Create Candidate Success", data });
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Server Error", serverMessage: error });
        }  
    }

    // find all
    async find(req: Request, res: Response): Promise<Response> {
    try {
      const candidate = await CandidateService.find();

      return res.status(200).json(candidate);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

    // find one
    async catch(req: Request, res: Response) : Promise<Response> {
        try {
            const candidateId = parseInt(req.params.id);
            const finding = await CandidateService.catch(candidateId)

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
      await CandidateService.updateArticle(body, id);
      return res
        .status(200)
        .json({ message: "Update Candidate Success", data: { id: id, ...body } });
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
      await CandidateService.delete(id);
      return res.status(200).json({ message: "Delete Candidate Success" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

}
