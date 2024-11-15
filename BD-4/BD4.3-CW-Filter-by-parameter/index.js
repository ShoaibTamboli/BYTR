const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.3-Filter-by-parameter-CW/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Question 1: Fetch All Movies

Create an endpoint /movies to return all the movies.

Create a function fetchAllMovies to fetch all the movies from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/movies>

*/

async function fetchAllMovies() {
  const query = 'SELECT * FROM movies';
  const response = await db.all(query, []);
  return { movies: response };
}

app.get('/movies', async (req, res) => {
  try {
    const result = await fetchAllMovies();
    res.status(200).json({ result });
    if (result.movies.length === 0) {
      return res.status(404).json({ message: `No movies Found` });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Question 2: Fetch All Movies by Actor

Create an endpoint /movies/actor/:actor to return all movies featuring a specific actor.

Create a function filterByActor to fetch movies filtered by actor from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/movies/actor/Salman%20Khan>
*/

async function filterByActor(actor) {
  const query = 'SELECT * FROM movies WHERE actor like ?';
  const response = await db.all(query, [`%${actor}%`]);
  return { movies: response };
}

app.get('/movies/actor/:actor', async (req, res) => {
  try {
    const actor = req.params.actor;
    const result = await filterByActor(actor);

    if (result.movies.length === 0) {
      return res
        .status(404)
        .json({ message: 'No movies found by Actor: ' + actor });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Question 3: Fetch All Movies by Director

Create an endpoint /movies/director/:director to return all movies directed by a specific director.

Create a function filterByDirector to fetch movies filtered by director from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/movies/director/S.S.%20Rajamouli>
*/

async function filterByDirector(director) {
  const query = 'SELECT * FROM movies WHERE director = ?';
  const response = await db.all(query, [director]);
  return { movies: response };
}

app.get('/movies/director/:director', async (req, res) => {
  try {
    const director = req.params.director;
    const result = await filterByDirector(director);
    if (result.movies.length === 0) {
      return res
        .status(404)
        .json({ message: `No Movies found from Director: ${director}` });
    }
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
