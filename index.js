import express from "express"
import useRouter from "./routes/users.js"

const app = express()

app.use(express.json());

app.use("/api", useRouter)

app.listen(3000, () => {
	console.log('Listening on port 3000 😎')
})

