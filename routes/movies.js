import express, { Router } from "express"
import { getMovies, createMovie, getOneMovie, deleteMovie, editMovie} from "../controllers/movieList.js"

const router = express.Router()

router.get("/", getMovies)
router.post("/", createMovie)
router.get("/:id", getOneMovie)
router.delete("/:id", deleteMovie)
router.put("/:id", editMovie)

export default router