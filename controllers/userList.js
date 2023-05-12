let userList = [
	{
		name: "Freddie",
		age: 42,
		id: 1
	},
	{
		name: "Test",
		age: 4,
		id: 4
	},
	{
		name: "Annelie",
		age: 41,
		id: 2
	}
]

let newId = userList.length + 1

export const getUsers = (req, res) => {
	res.json(userList)
}

export const createUser = (req, res) => {
	const { name, age } = req.body
	
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
}

export const getOneUser = (req, res) => {
	const userId = req.params.id

	const user = userList.find(user => {
		return user.id === Number(userId)
	})

	res.json(user)
}

export const deleteUser = (req, res) => {
	const userId = req.params.id

	userList = userList.filter(user => {
		return user.id !== Number(userId)
	})

	res.json(userList)
}

export const editUser = (req, res) => {
	const userId = req.params.id
	const {age, name} = req.body

	userList = userList.map(user => {
		if (user.id === Number(userId)) {
			return {
				name,
				age,
				id: user.id
			}
		}

		return user
	})

	res.json(userList)
}