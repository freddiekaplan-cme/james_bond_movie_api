import express, { Router } from "express"
import userList from "./userList.js"
import { updateUserList } from "./userList.js"

const router = express.Router()

let newId = userList.length + 1

router.get('/users', (req, res) => {
	res.json(userList)
})

router.post('/users', (req, res) => {
	const { name, age }= req.body
	
	function createUserId() {
		const findId = userList.find(id => id.id === newId)
		
		if (findId) {
			newId++
			console.log("Id found in list!")
			return createUserId()
		} else {
			userList.push({
				name: name,
				age: age,
				id: newId
			})
		}
	}
	createUserId()
	
	console.log(name, age, newId)

	res.json(userList)
})

router.get('/users/:id', (req, res) => {
	const userId = req.params.id

	const user = userList.find(user => {
		return user.id === Number(userId)
	})

	res.json(user)
})

router.delete('/users/:id', (req, res) => {
	const userId = req.params.id

	const updatedUserList = userList.filter(user => {
		return user.id !== Number(userId)
	})

	updateUserList(updatedUserList);

	res.json(userList)
})

router.put('/users/:id', (req, res) => {
	const userId = req.params.id
	const {age, name} = req.body

	userList = userList.map(user => {
		if (userList.id === userId) {
			return {
				name,
				age,
				id: user.id
			}
		}

		return user
	})

	res.json(userList)
})

export default router