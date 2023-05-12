import express, { Router } from "express"
import { getUsers, createUser, getOneUser, deleteUser, editUser} from "../controllers/userList.js"

const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', getOneUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', editUser)

export default router