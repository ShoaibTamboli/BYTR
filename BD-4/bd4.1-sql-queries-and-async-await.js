const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

let db;
(async () => {
  db = await open({
    filename: './BD-4.1_CW/database.sqlite',
    driver: sqlite3.Database,
  });
})();

const app = express();
const port = 3000;

//above code is to initialise Database.

/* 
How to use DB Seeders

Create a folder for the exercise

Create initDB.js file in the folder.

Copy/Paste the content in the initDB.js file provided for the exercise

Update the 4th line which looks like const db = new sqlite3.Database('./BD4.1_CW/database.sqlite', (err) =>

Replace ./BD4.1_CW with your folder name. You’ll use this path in the index.js file too

Open the Shell and run the command node <folder_name>/initDB.js

This will create the database file inside the exercise folder

npm i sqlite
npm i sqlite3
*/

/*
Exercise 1: Fetch all movies
Create an endpoint /movies that fetches all the movies from the database.
API Call
http://localhost:3000/movies
Expected Output
// You'll get all the movies in the database in the format
// { movies: [...] }
*/

async function fetchMovies() {
  let query = 'SELECT * FROM movies';
  const response = await db.all(query, []);
  return { movies: response };
}

app.get('/movies', async (req, res) => {
  const result = await fetchMovies();
  res.status(200).json(result);
});

/*
Exercise 2: Fetch all movies by genre

Create an endpoint /movies/genre/:genre that fetches movies based on genre from the database.

API Call

http://localhost:3000/movies/genre/Biography
*/

async function fetchMovieByGenre(genre) {
  let query = 'SELECT * FROM movies WHERE genre=?';
  const response = await db.all(query, [genre]);
  return { movie: response };
}

app.get('/movies/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
  const result = await fetchMovieByGenre(genre);
  res.status(200).json(result);
});

/* 
Exercise 3: Fetch movie details by ID

Create an endpoint /movies/details/:id that fetches movies based on id from the database.

API Call

http://localhost:3000/movies/details/3
*/

async function fetchMovieById(id) {
  const query = 'SELECT * FROM movies WHERE id =?';
  const response = await db.get(query, [id]);
  return { movie: response };
}

app.get('/movies/details/:id', async (req, res) => {
  const id = req.params.id;
  const result = await fetchMovieById(id);
  res.status(200).json(result);
});
/*
Exercise 4: Fetch movie details by release_year

Create an endpoint /movies/release_year/:year that fetches movies based on release_year from the database.

API Call

http://localhost:3000/movies/release_year/2016
*/

async function fetchMovieByYear(year) {
  const query = 'SELECT * FROM movies WHERE release_year=?';
  const response = await db.all(query, [year]);
  return { movies: response };
}

app.get('/movies/release_year/:year', async (req, res) => {
  const year = req.params.year;
  const result = await fetchMovieByYear(year);
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
