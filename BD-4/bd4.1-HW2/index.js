const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');
const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.1_HW_2/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Retrieve All Tracks

Define the endpoint /tracks to retrieve all music tracks.

Define the function name fetchAllTracks which returns all tracks from the database.

API call

http://localhost:3000/tracks
*/

async function fetchAllTracks() {
  const query = 'SELECT * FROM tracks';
  const response = await db.all(query, []);
  return { tracks: response };
}

app.get('/tracks', async (req, res) => {
  const result = await fetchAllTracks();
  res.status(200).json(result);
});

/*
Exercise 2: Retrieve Tracks by Artist

Define the endpoint /tracks/artist/:artist to retrieve tracks by a specific artist.

Define the function name fetchTracksByArtist which returns tracks for a given artist from the database.

API call

http://localhost:3000/tracks/artist/Arijit%20Singh
*/

async function fetchTrackbyartist(artist) {
  const query = 'SELECT * FROM tracks WHERE artist = ?';
  const response = await db.all(query, [artist]);
  return { tracks: response };
}

app.get('/tracks/artist/:artist', async (req, res) => {
  const artist = req.params.artist;
  const result = await fetchTrackbyartist(artist);
  res.status(200).send(result);
});

/*
Exercise 3: Retrieve Tracks by Genre

Define the endpoint /tracks/genre/:genre to retrieve tracks by genre.

Define the function name fetchTracksByGenre which returns tracks for a given genre from the database.

API call

http://localhost:3000/tracks/genre/Romantic
*/

async function fetchTrackByGenre(genre) {
  const query = 'SELECT * FROM tracks WHERE genre = ?';
  const response = await db.all(query, [genre]);
  return { tracks: response };
}

app.get('/tracks/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
  const result = await fetchTrackByGenre(genre);
  res.status(200).json(result);
});

/* 
Exercise 4: Retrieve Tracks by Release Year

Define the endpoint /tracks/release_year/:year to retrieve tracks by release year.

Define the function name fetchTracksByReleaseYear which returns tracks for a given release year from the database.

API call

http://localhost:3000/tracks/release_year/2019
*/

async function fetchTrackByReleaseYear(year) {
  const query = 'SELECT * FROM tracks WHERE release_year = ?';
  const response = await db.all(query, [year]);
  return { track: response };
}

app.get('/tracks/release_year/:year', async (req, res) => {
  const year = req.params.year;
  const result = await fetchTrackByReleaseYear(year);
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
