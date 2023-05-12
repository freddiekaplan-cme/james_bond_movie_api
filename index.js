import express from "express";
import useRouter from "./routes/users.js";
import cors from "cors";
import { apiKeyList } from "./configs/apiKeyList.js"

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
	
const validApiKey = apiKeyList.find((key) => key === apiKey);

	if (!apiKey) {
		return res
		.status(401)
		.json({ message: "Unauthorized. Missing API key." + statusMsg });
	};
	
	if (apiKey !== validApiKey) {
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

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
  });