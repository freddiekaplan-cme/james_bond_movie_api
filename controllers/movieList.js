import { bondData } from "./bondData.js";

let bondMovies = bondData
let newId = bondMovies.length + 1

function updateBondMovies() {
	bondMovies = bondMovies
	.map((movie) => {
		const year = Number(movie.Year) || "N/A"

		if (movie.imdbID !== "N/A" && movie.imdbID !== null && movie.imdbID !== undefined) {
			console.log(year)
			return { Id: movie.imdbID, Year: year, ...movie };
		} else {
			return { Id: newId.toString(), Year: year, ...movie };
		}
	});
	console.log(bondMovies[0])
}
updateBondMovies();

export const getMovies = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.json(bondMovies)
}

function convertToString(inputValues) {
	Object.keys(inputValues).forEach((key) => {
		if (key !== "Year") {
			inputValues[key] = inputValues[key]?.toString() || "N/A";
		}
	})
}

export const createMovie = (req, res) => {
	const { title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, awards, poster, imdbid, type, dvd, boxoffice, production, website } = req.body
	
	function createMovieId() {
		const findId = bondMovies.find(id => id.Id === newId.toString())

		if (findId) {
			newId++
			return createMovieId()
		} else {
			const inputValues = {
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
			}
				
				// Object.keys(inputValues).forEach((key) => {
					// 	inputValues[key] = inputValues[key]?.toString() || "N/A";
					// })
					convertToString(inputValues)
					
					bondMovies.push(inputValues)
					
					console.log("Added with id " + newId)
		}
	}
	createMovieId()

	res.setHeader('Content-Type', 'application/json');
	res.json(bondMovies)
}

export const getOneMovie = (req, res) => {
	const chosenMovieId = req.params.id
	
	const chosenMovie = bondMovies.find(movie => {
		return movie.Id === chosenMovieId
	})

	res.setHeader('Content-Type', 'application/json');
	res.json(chosenMovie)
}

export const deleteMovie = (req, res) => {
	const chosenMovieId = req.params.id

	bondMovies = bondMovies.filter(movie => {
		return movie.Id !== chosenMovieId
	})

	res.setHeader('Content-Type', 'application/json');
	res.json(bondMovies)
}

export const editMovie = (req, res) => {
	const movieId = req.params.id
	const { title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, awards, poster, imdbid, type, dvd, boxoffice, production, website } = req.body

	bondMovies = bondMovies.map(movie => {
		if (movie.Id === movieId) {
			// return {
				const inputValues = {
					...movie,
					Title: title || movie.Title,
					Year: year || movie.Year,
					Rated: rated || movie.Rated,
					Released: released || movie.Released,
					Runtime: runtime || movie.Runtime,
					Genre: genre || movie.Genre,
					Director: director || movie.Director,
					Writer: writer || movie.Writer,
					Actors: actors || movie.Actors,
					Plot: plot || movie.Plot,
					Language: language || movie.Language,
					Country: country || movie.Country,
					Awards: awards || movie.Awards,
					Poster: poster || movie.Poster,
					imdbID: imdbid || movie.imdbID,
					Type: type || movie.Type,
					DVD: dvd || movie.DVD,
					BoxOffice: boxoffice || movie.BoxOffice,
					Production: production || movie.Production,
					Website: website || movie.Website
				}
				convertToString(inputValues)
				return inputValues

		}

		return movie
	})

	res.setHeader('Content-Type', 'application/json');
	res.json(bondMovies)
}