import express from "express";
import useRouter from "./routes/movies.js";
import apiKeyRouter from "./routes/apiKeys.js"
import { apiKeyList } from "./configs/apiKeyList.js"
import cors from "cors";

const app = express();
const port = 3007;
const statusMsg = " Get a licens to thrill with your own API key. More information in the documentation, README.md.";

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

const authenticateApiKey = (req, res, next) => {
	const apiKey = req.query.apiKey;
	console.log(req.query);
	
	if (!apiKey) {
		return res
		.status(401)
		.json({ message: "Unauthorized. Missing API key." + statusMsg });
	};

	const validApiKey = apiKeyList.find((keyObj) => keyObj.key === apiKey);
	
	if (!validApiKey) {
		return res
		.status(403)
		.json({ message: "Forbidden. Invalid API key." + statusMsg });
	};
	
	next();
};

app.use((req, res, next) => {
	authenticateApiKey(req, res, next);
});

app.use("/bond", useRouter);
app.use("/bond", apiKeyRouter);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
  });