const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.5-SQL-Comparison-Operators/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Filter Movies by Year and Actor

Create an endpoint /movies/year-actor to return all movies filtered by release year and actor.

Declare 2 variables releaseYear & actor to store query parameters.

Create a function filterByYearAndActor to fetch all movies from the database based on release year and actor.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/movies/year-actor?releaseYear=2019&actor=Hrithik%20Roshan
*/

async function filterByYearAndActor(releaseYear, actor) {
  const query = 'SELECT * FROM movies WHERE release_year = ? AND actor = ?';
  const response = await db.all(query, [releaseYear, actor]);
  return { movies: response };
}

app.get('/movies/year-actor', async (req, res) => {
  try {
    const releaseYear = req.query.releaseYear;
    const actor = req.query.actor;
    const result = await filterByYearAndActor(releaseYear, actor);
    if (result.movies.length === 0) {
      return res.status(404).json({
        message: `movies not found for year ${releaseYear} by actor ${actor}`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch Award Winning Movies

Create an endpoint /movies/award-winning to return all award-winning movies.

Create a function filterAwardWinningMovies to fetch all movies from the database with a rating of 4.5 or higher & order by rating in ascending.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/movies/award-winning
*/

async function filterAwardWinningMovies() {
  const query = 'SELECT * FROM movies WHERE rating >= 4.5 ORDER BY rating';
  const response = await db.all(query, []);
  return { movies: response };
}

app.get('/movies/award-winning', async (req, res) => {
  try {
    const result = await filterAwardWinningMovies();
    if (result.movies.length === 0) {
      return res.status(404).json({
        message: `No Award Winning movies found`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch Blockbuster Movies

Create an endpoint /movies/blockbuster to return all blockbuster movies.

Create a function fetchBlockbusterMovies to fetch all movies from the database with a box office collection of 100 or more & order by box_office_collection in descending.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/movies/blockbuster
*/

async function fetchBlockbusterMovies() {
  const query =
    'SELECT * FROM movies WHERE box_office_collection >= 100 ORDER BY box_office_collection DESC';
  const response = await db.all(query, []);
  return { movies: response };
}

app.get('/movies/blockbuster', async (req, res) => {
  try {
    const result = await fetchBlockbusterMovies();
    if (result.movies.length === 0) {
      return res.status(404).json({
        message: `No BlockBuster movies found.`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
