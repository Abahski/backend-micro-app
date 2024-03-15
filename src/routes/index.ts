import express from "express"
import UsersController from "../controllers/UsersController"
import ArticleController from "../controllers/ArticleController"
import PartyController from "../controllers/PartyController"
import CandidateController from "../controllers/CandidateController"
import VotesController from "../controllers/VotesController"


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
Route.get("/article/users/:id", ArticleController.findUser)
Route.delete("/article/:id", ArticleController.delete)
Route.put("/article/:id", ArticleController.update)

// party (partai)
Route.post("/partai", PartyController.create)
Route.get("/partai", PartyController.find)
Route.get("/partai/:id", PartyController.catch)
Route.delete("/partai/:id", PartyController.delete)
Route.put("/partai/:id", PartyController.update)

// candidate
Route.post("/paslon", CandidateController.create)
Route.get("/paslon", CandidateController.find)
Route.get("/paslon/:id", CandidateController.catch)
Route.delete("/paslon/:id", CandidateController.delete)
Route.put("/paslon/:id", CandidateController.update)

// vote
Route.post("/vote", VotesController.create)
Route.get("/vote", VotesController.find)
Route.get("/vote/:id", VotesController.catch)
Route.delete("/vote/:id", VotesController.delete)
Route.put("/vote/:id", VotesController.update)

export default Route