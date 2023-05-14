import express, { Router } from "express"
import { getMovies, createMovie, getOneMovie, deleteMovie, editMovie} from "../controllers/movieList.js"
import apiKeyRouter from "./apiKeys.js"

const router = express.Router()

router.get("/", getMovies)
router.post("/", createMovie)
router.get("/:id", getOneMovie)
router.delete("/:id", deleteMovie)
router.put("/:id", editMovie)

router.use(apiKeyRouter)

export default router