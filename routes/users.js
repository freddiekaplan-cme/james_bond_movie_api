import express, { Router } from "express"
import { getUsers, createUser, getOneUser, deleteUser, editUser} from "../controllers/userList.js"
import { createKey, deleteKey } from "../configs/apiKeyList.js"

const router = express.Router()

router.get("/users", getUsers)
router.post("/users", createUser)
router.get("/users/:id", getOneUser)
router.delete("/users/:id", deleteUser)
router.put("/users/:id", editUser)

router.post("/keys", createKey)
router.delete("/keys/:key", deleteKey)

export default router