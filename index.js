import express from "express"
import bodyParser from "body-parser"
import useRouter from "./routes/users.js"

const app = express()

app.use(bodyParser.json())

app.use("/api", useRouter)

app.listen(3000, function() {
	console.log('Listening on port 3000 😎')
})

