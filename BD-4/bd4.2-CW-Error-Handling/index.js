const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD-4.2_CW_ErrorHandling/database.sqlite',
    driver: sqlite3.Database,
  });
})();
/* 
Exercise 1: Get all movies

Wrap the database call in a try/catch block to handle errors.

If no movies are found return 404 error

If some error happens while reading database return 500 error

Otherwise send 200 status & the data

API Call

http://localhost:3000/movies
*/

async function fetchAllMovies() {
  const query = 'SELECT * FROM movies';
  const response = await db.all(query, []);
  return { movies: response };
}

app.get('/movies', async (req, res) => {
  try {
    const result = await fetchAllMovies();
    if (result.movies.length === 0) {
      return res.status(404).json({ message: 'No movies found in DB' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
Exercise 2: Fetch movies by genre

Wrap the database call in a try/catch block to handle errors.

If no movies by genre are found return 404 error

If some error happens while reading database return 500 error

Otherwise send 200 status & the data

API Call

http://localhost:3000/movies/genre/Biography
*/

async function fetchMoviesByGenre(genre) {
  const query = 'SELECT * FROm movies WHERE genre = ?';
  const response = await db.all(query, [genre]);
  return { movies: response };
}

app.get('/movies/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const result = await fetchMoviesByGenre(genre);
    if (result.movies.length === 0) {
      return res
        .status(404)
        .json({ message: 'no movies found for genre', genre });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* 
Exercise 3: Fetch movie by ID

Wrap the database call in a try/catch block to handle errors.

If no movie by ID is found return 404 error

If some error happens while reading database return 500 error

Otherwise send 200 status & the data

API Call

http://localhost:3000/movies/details/2
*/

async function fetchMoviesByDetails(id) {
  const query = 'SELECT * FROM movies WHERE id = ? ';
  const response = await db.all(query, [id]);
  return { movies: response };
}

app.get('/movies/details/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await fetchMoviesByDetails(id);
    if (result.movies.length === 0) {
      return res.status(404).json({ message: 'no movies found with ID' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
Exercise 4: Fetch movies by release year

Wrap the database call in a try/catch block to handle errors.

If no movies by release year are found return 404 error

If some error happens while reading database return 500 error

Otherwise send 200 status & the data

API Call

http://localhost:3000/movies/release-year/2015
*/

async function fetchMoviesByYear(year) {
  const query = 'SELECT * FROM movies WHERE release_year = ?';
  const response = await db.all(query, [year]);
  return { movies: response };
}

app.get('/movies/release-year/:year', async (req, res) => {
  try {
    const year = req.params.year;
    const result = await fetchMoviesByYear(year);
    if (result.movies.length === 0) {
      return res
        .status(404)
        .json({ message: 'no movies found with year', year });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
