const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.4-CW-Select-specific-columns/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: SELECT only id, title & release_year of all movies

Create an endpoint /movies to return all the movies

Create a function fetchAllMovies to fetch all the movies from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/movies
*/

async function fetchAllMovies() {
  const query = 'SELECT id, title, release_year FROM movies';
  const response = await db.all(query, []);
  return { movies: response };
}

app.get('/movies', async (req, res) => {
  try {
    const result = await fetchAllMovies();
    if (result.movies.length === 0) {
      return res.status(404).json({ message: `No MOVIES found.` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: SELECT id, title, actor & release_year from all movies by an actor

Create an endpoint /movies/actor/:actor to return all the movies of an actor.

Create a function fetchMoviesByActor to fetch all the movies of an actor from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/movies/actor/Salman%20Khan
*/

async function fetchMoviesByActor(actor) {
  const query =
    'SELECT id, title, actor, release_year FROM movies where actor = ?';
  const response = await db.all(query, [actor]);
  return { movies: response };
}

app.get('/movies/actor/:actor', async (req, res) => {
  try {
    const actor = req.params.actor;
    const result = await fetchMoviesByActor(actor);
    if (result.movies.length === 0) {
      return res
        .status(404)
        .json({ message: `No MOVIES found for actor ${actor}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: SELECT id, title, director & release_year from all movies by a director

Create an endpoint /movies/director/:director to return all the movies of an actor.

Create a function fetchMoviesByDirector to fetch all the movies of an actor from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/movies/director/Kabir%20Khan
*/

async function fetchMoviesByDirector(director) {
  const query =
    'SELECT id, title, director, release_year FROM movies where director = ?';
  const response = await db.all(query, [director]);
  return { movies: response };
}

app.get('/movies/director/:director', async (req, res) => {
  try {
    const director = req.params.director;
    const result = await fetchMoviesByDirector(director);
    if (result.movies.length === 0) {
      return res
        .status(404)
        .json({ message: `No MOVIES found for director ${director}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
