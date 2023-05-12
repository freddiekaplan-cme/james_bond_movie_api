import express, { Router } from "express"
import { createKey, deleteKey } from "../configs/apiKeyList.js"

const router = express.Router()

router.post('/keys', createKey)
// router.delete('/keys/:id', deleteKey)

export default router