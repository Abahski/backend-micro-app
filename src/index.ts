import { AppDataSource } from "./data-source"
import  { Request, Response} from "express"
import express from "express"
import Route from "./routes"
import cors from 'cors'


AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000

    const corsConfig: object = {
        origin: "http://localhost:5173"
    } 

    app.use(cors(corsConfig))
    app.use(express.json());
    app.use('/api/v1', Route)

    app.get('/hello', (req: Request, res: Response) => {
        res.status(200).json({data: "Success get data"})
    })

    app.listen(port, () => console.log(`Server success on PORT ${port}`))
}).catch(error => console.log(error))
