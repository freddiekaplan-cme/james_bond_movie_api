import express, { Router } from "express";
import { createKey, deleteKey } from "../configs/apiKeyList.js";

const apiKeyRouter = express.Router();

apiKeyRouter.post("/keys", createKey);
apiKeyRouter.delete("/keys/:key", deleteKey);

export default apiKeyRouter;
