const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD-4.2-HW2/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Retrieve All Tracks

Define the endpoint /tracks to retrieve all music tracks.

Define the function name getAllTracks which returns all tracks from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API call

http://localhost:3000/tracks
*/

async function getAllTracks() {
  const query = 'SELECT * FROM tracks';
  const response = await db.all(query, []);
  return { tracks: response };
}

app.get('/tracks', async (req, res) => {
  try {
    const result = await getAllTracks();
    if (result.tracks.length === 0) {
      return res.status(404).json({ message: 'cannot find tracks' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/*
Exercise 2: Retrieve Tracks by Artist

Define the endpoint /tracks/artist/:artist to retrieve tracks by a specific artist.

Define the function name getTracksByArtist which returns tracks for a given artist from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API call

http://localhost:3000/tracks/artist/Arijit%20Singh
*/

async function getTracksByArtist(artist) {
  const query = 'SELECT * FROM tracks WHERE artist = ?';
  const response = await db.all(query, [artist]);
  return { tracks: response };
}

app.get('/tracks/artist/:artist', async (req, res) => {
  const artist = req.params.artist;
  try {
    const result = await getTracksByArtist(artist);
    if (result.tracks.length === 0) {
      return res
        .status(404)
        .json({ message: 'cannot find tracks by artist ' + artist });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/* 
Exercise 3: Retrieve Tracks by Genre

Define the endpoint /tracks/genre/:genre to retrieve tracks by genre.

Define the function name getTracksByGenre which returns tracks for a given genre from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API call

http://localhost:3000/tracks/genre/Romantic
*/

async function getTracksByGenre(genre) {
  const query = 'SELECT * FROM tracks WHERE genre = ?';
  const response = await db.all(query, [genre]);
  return { tracks: response };
}

app.get('/tracks/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
  try {
    const result = await getTracksByGenre(genre);
    if (result.tracks.length === 0) {
      return res
        .status(404)
        .json({ message: 'cannot find tracks by genre ' + genre });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/*
Exercise 4: Retrieve Tracks by Release Year

Define the endpoint /tracks/release_year/:year to retrieve tracks by release year.

Define the function name getTracksByReleaseYear which returns tracks for a given release year from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API call

http://localhost:3000/tracks/release_year/2012
*/

async function getTracksByReleaseYear(year) {
  const query = 'SELECT * FROM tracks WHERE release_year = ?';
  const response = await db.all(query, [year]);
  return { tracks: response };
}

app.get('/tracks/release_year/:year', async (req, res) => {
  const year = req.params.year;
  try {
    const result = await getTracksByReleaseYear(year);
    if (result.tracks.length === 0) {
      return res
        .status(404)
        .json({ message: 'cannot find tracks by year ' + year });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
