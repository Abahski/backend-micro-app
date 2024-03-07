import express from "express"
import UsersController from "../controllers/UsersController"
const Route = express.Router()

Route.post("/register", UsersController.create)
Route.get("/registers", UsersController.find)
Route.get("/registers/:id", UsersController.catch)
Route.delete("/registers/:id", UsersController.delete)
Route.put("/registers/:id", UsersController.update)

export default Route