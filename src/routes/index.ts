import express from "express"
import UsersController from "../controllers/UsersController"
import ArticleController from "../controllers/ArticleController"
 import PartyController from "../controllers/PartyController"

const Route = express.Router()

// user
Route.post("/register", UsersController.create)
Route.get("/registers", UsersController.find)
Route.get("/registers/:id", UsersController.catch)
Route.delete("/registers/:id", UsersController.delete)
Route.put("/registers/:id", UsersController.update)

// article
Route.post("/article", ArticleController.insertArticle)
Route.get("/article", ArticleController.find)
Route.get("/article/:id", ArticleController.catch)
Route.delete("/article/:id", ArticleController.delete)
Route.put("/article/:id", ArticleController.update)

// party (partai)
Route.post("/partai", PartyController.create)
Route.get("/partai", PartyController.find)
Route.get("/partai/:id", PartyController.catch)
Route.delete("/partai/:id", PartyController.delete)
Route.put("/partai/:id", PartyController.update)

export default Route