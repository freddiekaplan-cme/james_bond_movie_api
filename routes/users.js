import express, { Router } from "express"
import { getMovies, createMovie, getOneMovie, deleteMovie, editMovie} from "../controllers/userList.js"
import { createKey, deleteKey } from "../configs/apiKeyList.js"

const router = express.Router()

router.get("/bond", getMovies)
router.post("/bond", createMovie)
router.get("/bond/:id", getOneMovie)
router.delete("/bond/:id", deleteMovie)
router.put("/bond/:id", editMovie)

router.post("/keys", createKey)
router.delete("/keys/:key", deleteKey)

export default router