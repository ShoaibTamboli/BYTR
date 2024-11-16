const express = require('express');
const { resolve } = require('path');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;
let db;
(async () => {
  db = await open({
    filename: './BD4.4-HW2/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Fetch All Artworks

Create an endpoint /artworks to return all the artworks.

Create a function fetchAllArtworks to fetch all the artworks from the database and only returns the columns id, title & artist.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/artworks
*/

async function fetchAllArtworks() {
  const query = 'SELECT id, title, artist FROM artworks';
  const response = await db.all(query, []);
  return { artworks: response };
}

app.get('/artworks', async (req, res) => {
  try {
    const result = await fetchAllArtworks();
    if (result.artworks.length === 0) {
      return res.status(404).json({ message: `Artworks not found.` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch Artworks by Artist

Create an endpoint /artworks/artist/:artist to return artworks by the given artist.

Create a function fetchArtworksByArtist to fetch artworks by the artist from the database.

Extract only id, title, artist & year columns

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/artworks/artist/Vincent%20Van%20Gogh
*/

async function fetchArtworksByArtist(artist) {
  const query = 'SELECT id, title, artist, year FROM artworks WHERE artist = ?';
  const response = await db.all(query, [artist]);
  return { artworks: response };
}

app.get('/artworks/artist/:artist', async (req, res) => {
  try {
    const artist = req.params.artist;
    const result = await fetchArtworksByArtist(artist);
    if (result.artworks.length === 0) {
      return res
        .status(404)
        .json({ message: `Artworks not found for artist: ${artist}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 3: Fetch Artworks by Year

Create an endpoint /artworks/year/:year to return artworks by the given year.

Create a function fetchArtworksByYear to fetch artworks by the year from the database.

Extract only id, title, artist & year columns

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/artworks/year/1889
*/

async function fetchArtworksByYear(year) {
  const query = 'SELECT id, title, artist, year FROM artworks WHERE year = ?';
  const response = await db.all(query, [year]);
  return { artworks: response };
}

app.get('/artworks/year/:year', async (req, res) => {
  try {
    const year = req.params.year;
    const result = await fetchArtworksByYear(year);
    if (result.artworks.length === 0) {
      return res
        .status(404)
        .json({ message: `Artworks not found for year: ${year}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 4: Fetch Artworks by Medium

Create an endpoint /artworks/medium/:medium to return artworks by the given medium.

Create a function fetchArtworksByMedium to fetch artworks by the medium from the database.

Extract only id, title, artist & medium columns

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/artworks/medium/Oil%20Painting
*/

async function fetchArtworksByMedium(medium) {
  const query =
    'SELECT id, title, artist, medium FROM artworks WHERE medium = ?';
  const response = await db.all(query, [medium]);
  return { artworks: response };
}

app.get('/artworks/medium/:medium', async (req, res) => {
  try {
    const medium = req.params.medium;
    const result = await fetchArtworksByMedium(medium);
    if (result.artworks.length === 0) {
      return res
        .status(404)
        .json({ message: `Artworks not found for medium: ${medium}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
