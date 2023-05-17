# Bond Movie API
*A REST API using Node.js and Express.js*

Create, read, update and delete from a list of Bond movies. You will need an **API key** to get access to the list of movies.

## Install

1. Install **Node.js** and **Express.js**.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the server.

## API Endpoints

This project uses different endpoints depending on what you want to do. Creating and deleting IPA keys also use a different endpoint, see **Creating and deleting API keys** further down.

When running the server the endpoints will be available on a specific port. You should get this message in your terminal:

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

You can add a lot of information about the movie but only some are required, see below.

Method: `POST`
URL: `/bond/:id`
Example: `http://localhost:3007/bond/`
Body: 
```
{
	"title": "Title of Movie",(*)
	"year": "Year of release in numbers",(*)
	"rated": "Movie rating",
	"released": "Date released",(*)
	"runtime": "Movie runtime",
	"genre": "Genres of the movie",(*)
	"director": "Director(s)",
	"writer": "Writer(s)",
	"actors": "Actors",
	"plot": "Plot summary",
	"language": "Language",
	"country": "Country",
	"awards": "Awards",
	"poster": "Link to url with poster image",
	"type": "Media type",
	"dvd": "Date of DVD release",
	"boxoffice": "Boxoffice earnings",
	"production": "Production cost",
	"website": "URL to movie website"
}
```
(*) Required

### Update a movie  using ID

Method: `PUT`
URL: `/bond/:id`
Example: `http://localhost:3007/bond/tt6110504`
Body: 
```
{
	"title": "Title of Movie",
	"year": "Year of release in numbers",
	"rated": "Movie rating",
	"released": "Date released",
	"runtime": "Movie runtime",
	"genre": "Genres of the movie",
	"director": "Director(s)",
	"writer": "Writer(s)",
	"actors": "Actors",
	"plot": "Plot summary",
	"language": "Language",
	"country": "Country",
	"awards": "Awards",
	"poster": "Link to url with poster image",
	"type": "Media type",
	"dvd": "Date of DVD release",
	"boxoffice": "Boxoffice earnings",
	"production": "Production cost",
	"website": "URL to movie website"
}
```

### Delete a movie using ID

Method: `DELETE`
URL: `/bond/:id`
Example: `http://localhost:3007/bond/tt6110504`

## Using an API key

With your API key you will have access to the list of movies. Note that a request should start with a `?`.

Key: `apiKey`
URL: `/bond/keys`
Example: `http://localhost:3007/bond/?apiKey=`

You will need to provide your API key value after `apiKey=`.

## Creating and deleting API keys

You can use **POST** and **DELETE** requests to create and delete API keys. When creating a new key you don't need to send anything in the **body** tag.

### Create a new API key

Method: `POST`
URL: `/bond/keys`
Example: `http://localhost:3007/bond/keys?apiKey=01234567`

### Delete an API key using ID

Method: `DELETE`
URL: `/bond/keys/:id`
Example: `http://localhost:3007/bond/keys/01234567?apiKey=01234567`

## Using the API with Postman

1. Download and install [Postman](http://postman.com/downloads/) or go to http://postman.com.
2. Open a workspace.
3. Add your API key on the **Params** tab and filling in the **Key** field with the key from above and your own API key in the **value** field.
4. Create a new request for each endpoint and configure it as described above.
5. When using **POST** and **PUT** requests fill in your data under the **Body** tab using the **raw** and **JSON** format.
6. Send your request.