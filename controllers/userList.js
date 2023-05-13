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

let bondMovies = bondData
  .filter((movie) => movie.imdbID !== "N/A")
  .map((movie) => ({ id: movie.imdbID }));

let newId = bondMovies.length + 1

export const getMovies = (req, res) => {
	res.json(bondMovies)
}

export const createMovie = (req, res) => {
	const { title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, awards, poster, imdbid, type, dvd, boxoffice, production, website } = req.body
	
	function createMovieId() {
		const findId = bondMovies.find(id => id.id === newId)
		
		if (findId) {
			newId++
			console.log("Id found in list! Running again.")
			return createMovieId()
		} else {
			bondMovies.push({
				Id: newId,
				Title: title,
				Year: year,
				Rated: rated,
				Released: released,
				Runtime: runtime,
				Genre: genre,
				Director: director,
				Writer: writer,
				Actors: actors,
				Plot: plot,
				Language: language,
				Country: country,
				Awards: awards,
				Poster: poster,
				imdbID: imdbid,
				Type: type,
				DVD: dvd,
				BoxOffice: boxoffice,
				Production: production,
				Website: website
			})
			console.log("Added with id " + newId)
		}
	}
	createMovieId()

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