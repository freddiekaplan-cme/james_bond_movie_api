import { bondData } from "../bondData.js";
import { fullYear } from "../configs/date-and-time.js";

let bondMovies = bondData;
let newId = bondMovies.length + 1;
let createdId = "";
const requiredValues = "Title, year, released and genre must be filled in.";
const yearMustBeNumber =
	"Year must be a number, YYYY, set between James Bond's creation in 1953 and next year.";

function createId() {
	const createdId = "tt00" + (70000 + newId).toString();
	newId++;
	return createdId;
}

function updateBondMovies() {
	bondMovies = bondMovies.map((movie) => {
		const year = Number(movie.Year) || "N/A";

		if (
			movie.imdbID !== "N/A" &&
			movie.imdbID !== null &&
			movie.imdbID !== undefined
		) {
			return { Id: movie.imdbID, ...movie, Year: year };
		} else {
			createId();
			return { Id: createdId, ...movie, Year: year };
		}
	});
}
updateBondMovies();

export const getMovies = (req, res) => {
	res.json(bondMovies);
};

export const createMovie = (req, res) => {
	const {
		title,
		year,
		rated,
		released,
		runtime,
		genre,
		director,
		writer,
		actors,
		plot,
		language,
		country,
		awards,
		poster,
		imdbid,
		type,
		dvd,
		boxoffice,
		production,
		website,
	} = req.body;

	if (title && year && released && genre) {
		if (isNaN(year) || year < 1953 || year > fullYear + 1) {
			console.log(yearMustBeNumber);
			return res.json({ message: yearMustBeNumber });
		} else {
			function createMovieId() {
				const findId = bondMovies.find((id) => id.Id === createdId);

				if (findId) {
					createId();
					return createMovieId();
				} else {
					bondMovies.push({
						Id: createdId,
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
						Website: website,
					});

					console.log("Added with id " + createdId);
				}
			}
			createMovieId();
		}

		res.json(bondMovies);
	} else {
		console.log(requiredValues);
		return res.json({ message: requiredValues });
	}
};

export const getOneMovie = (req, res) => {
	const chosenMovieId = req.params.id;

	const chosenMovie = bondMovies.find((movie) => {
		return movie.Id === chosenMovieId;
	});

	if (!chosenMovie) {
		return res
		  .status(404)
		  .json({ message: "This movie ID is missing in action!" });
	  }

	res.json(chosenMovie);
};

export const deleteMovie = (req, res) => {
	const chosenMovieId = req.params.id;

	const chosenMovie = bondMovies.find((movie) => {
		return movie.Id === chosenMovieId;
	});

	bondMovies = bondMovies.filter((movie) => {
		return movie.Id !== chosenMovieId;
	});

	if (!chosenMovie) {
		return res
		  .status(404)
		  .json({ message: "This movie ID is missing in action!" });
	  }

	res.json({ message: "The movie has been deleted." });
}; 	

export const editMovie = (req, res) => {
	const movieId = req.params.id;

	const chosenMovie = bondMovies.find((movie) => {
		return movie.Id === movieId;
	});

	const {
		title,
		year,
		rated,
		released,
		runtime,
		genre,
		director,
		writer,
		actors,
		plot,
		language,
		country,
		awards,
		poster,
		imdbid,
		type,
		dvd,
		boxoffice,
		production,
		website,
	} = req.body;

	if (!chosenMovie) {
		return res
		  .status(404)
		  .json({ message: "This movie ID is missing in action!" });
	  }

	if (title && year && released && genre) {
		if (isNaN(year) || year < 1953 || year > fullYear + 1) {
			console.log(yearMustBeNumber);
			return res.json({ message: yearMustBeNumber });
		} else {
			bondMovies = bondMovies.map((movie) => {
				if (movie.Id === movieId) {
					return {
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
						Website: website || movie.Website,
					};
				}

				return movie;
			});
		}


		res.json(bondMovies);
	} else {
		console.log(requiredValues);
		return res.json({ message: requiredValues });
	}
};
