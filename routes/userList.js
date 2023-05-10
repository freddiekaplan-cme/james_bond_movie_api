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

export function updateUserList(updatedList) {
	userList = updatedList;
  }

export default userList