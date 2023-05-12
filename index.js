import express from "express";
import useRouter from "./routes/users.js";

const app = express();

app.use(express.json());

const authenticateApiKey = (req, res, next) => {
	const apiKey = req.query.apiKey;
	console.log(req.query);
	
	if (!apiKey) {
		return res
		.status(401)
		.json({ message: "Inga karaktärer till dig! Din api key saknas." });
	};
	
	const validApiKey = "5";
	
	if (apiKey !== validApiKey) {
		return res
		.status(403)
		.json({ message: "Invalid API key" });
	};
	
	next();
};

app.use((req, res, next) => {
	authenticateApiKey(req, res, next);
});

app.use("/api", useRouter);

app.listen(3000, () => {
	console.log('Listening on port 3000 😎');
});