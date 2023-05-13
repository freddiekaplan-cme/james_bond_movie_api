// let userList = [
// 	{
// 		name: "Freddie",
// 		age: 42,
// 		id: 1
// 	},
// 	{
// 		name: "Test",
// 		age: 4,
// 		id: 4
// 	},
// 	{
// 		name: "Annelie",
// 		age: 41,
// 		id: 2
// 	}
// ]

import { bondData } from "./bondData";

let bondMovies = bondData;

let newId = bondMovies.length + 1

export const getMovies = (req, res) => {
	res.json(bondMovies)
}

export const createMovie = (req, res) => {
	const { name, age } = req.body
	
	function createMovieId() {
		const findId = bondMovies.find(id => id.id === newId)
		
		if (findId) {
			newId++
			console.log("Id found in list!")
			return createMovieId()
		} else {
			bondMovies.push({
				title: Title,
				year: Year,
				rated: Rated,
				released: Released,
				runtime: Runtime,
				genre: Genre,
				director: Director,
				writer: Writer,
				actors: Actors,
				plot: Plot,
				language: Language,
				country: Country,
				awards: Awards,
				poster: Poster,
				imdbid: imdbID,
				type: Type,
				dvd: DVD,
				boxoffice: BoxOffice,
				production: Production,
				website: Website 
			})
		}
	}
	createMovieId()
	
	console.log(name, age, newId)

	res.json(bondMovies)
}

export const getOneMovie = (req, res) => {
	const userId = req.params.id

	const user = bondMovies.find(user => {
		return user.id === Number(userId)
	})

	res.json(user)
}

export const deleteMovie = (req, res) => {
	const userId = req.params.id

	bondMovies = bondMovies.filter(user => {
		return user.id !== Number(userId)
	})

	res.json(bondMovies)
}

export const editMovie = (req, res) => {
	const userId = req.params.id
	const {age, name} = req.body

	bondMovies = bondMovies.map(user => {
		if (user.id === Number(userId)) {
			return {
				name,
				age,
				id: user.id
			}
		}

		return user
	})

	res.json(bondMovies)
}