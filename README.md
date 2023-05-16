# Bond Movie API
*A REST API using Node.js and Express.js*

Create, read, update and delete from a list of Bond movies.

## Install

1. Install **Node.js** and **Express.js**.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the server.

## API Endpoints

When running the server the endpoints will be available on a specific port. You should get a message in your terminal like this:

> Listening on port 3007

That means you should be able to acces the server here:

> http://localhost:3007

### List all movies

Method: `GET`
URL: `/bond`
Example: `http://localhost:3007/bond/`

### List one movie

Method: `GET`
URL: `/bond/:id`
Example: `http://localhost:3007/bond/tt6110504`

### Create a new movie

Method: `POST`
URL: `/bond/:id`
Body: 
```
{
	"Title": "Title of Movie",(*)
	"Year": "Year of release in numbers",(*)
	"Rated": "Movie rating",
	"Released": "Date released",(*)
	"Runtime": "Movie runtime",
	"Genre": "Genres of the movie",(*)
	"Director": "Director(s)",
	"Writer": "Writer(s)",
	"Actors": "Actors",
	"Plot": "Plot summary",
	"Language": "Language",
	"Country": "Country",
	"Awards": "Awards",
	"Poster": "Link to url with poster image",
	"Type": "Media type",
	"DVD": "Date of DVD release",
	"BoxOffice": "Boxoffice earnings",
	"Production": "Production cost",
	"Website": "URL to movie website"
}
```
(*) Are required
Example: `http://localhost:3007/bond/`

### Update a movie  using ID

Method: `PUT`
URL: `/bond/:id`
Body: 
```
{
	"Title": "Title of Movie",
	"Year": "Year of release in numbers",
	"Rated": "Movie rating",
	"Released": "Date released",(*)
	"Runtime": "Movie runtime",
	"Genre": "Genres of the movie",(*)
	"Director": "Director(s)",
	"Writer": "Writer(s)",
	"Actors": "Actors",
	"Plot": "Plot summary",
	"Language": "Language",
	"Country": "Country",
	"Awards": "Awards",
	"Poster": "Link to url with poster image",
	"Type": "Media type",
	"DVD": "Date of DVD release",
	"BoxOffice": "Boxoffice earnings",
	"Production": "Production cost",
	"Website": "URL to movie website"
}
```
Example: `http://localhost:3007/bond/tt6110504`

### Delete a movie using ID

Method: `DELETE`
URL: `/bond/:id`
Example: `http://localhost:3007/bond/tt6110504`

## Using the API with Postman

1. Download and install [Postman](http://postman.com/downloads/) or go to http://postman.com.
2. Open a workspace.
3. Create a new request for each endpoint and configure it as described above.
4. When using **POST** and **PUT** requests fill in your data under the **Body** tab using the **raw** and **JSON** format.
5. Send your request.