const express = require('express');
const { resolve } = require('path');

const port = 3000;

let { track } = require('./models/track.model.js');
let { sequelize } = require('./lib/index.js');
const app = express();

const movieData = [
  {
    name: 'Raabta',
    genre: 'Romantic',
    release_year: 2012,
    artist: 'Arijit Singh',
    album: 'Agent Vinod',
    duration: 4,
  },
  {
    name: 'Naina Da Kya Kasoor',
    genre: 'Pop',
    release_year: 2018,
    artist: 'Amit Trivedi',
    album: 'Andhadhun',
    duration: 3,
  },
  {
    name: 'Ghoomar',
    genre: 'Traditional',
    release_year: 2018,
    artist: 'Shreya Ghoshal',
    album: 'Padmaavat',
    duration: 3,
  },
  {
    name: 'Bekhayali',
    genre: 'Rock',
    release_year: 2019,
    artist: 'Sachet Tandon',
    album: 'Kabir Singh',
    duration: 6,
  },
  {
    name: 'Hawa Banke',
    genre: 'Romantic',
    release_year: 2019,
    artist: 'Darshan Raval',
    album: 'Hawa Banke (Single)',
    duration: 3,
  },
  {
    name: 'Ghungroo',
    genre: 'Dance',
    release_year: 2019,
    artist: 'Arijit Singh',
    album: 'War',
    duration: 5,
  },
  {
    name: 'Makhna',
    genre: 'Hip-Hop',
    release_year: 2019,
    artist: 'Tanishk Bagchi',
    album: 'Drive',
    duration: 3,
  },
  {
    name: 'Tera Ban Jaunga',
    genre: 'Romantic',
    release_year: 2019,
    artist: 'Tulsi Kumar',
    album: 'Kabir Singh',
    duration: 3,
  },
  {
    name: 'First Class',
    genre: 'Dance',
    release_year: 2019,
    artist: 'Arijit Singh',
    album: 'Kalank',
    duration: 4,
  },
  {
    name: 'Kalank Title Track',
    genre: 'Romantic',
    release_year: 2019,
    artist: 'Arijit Singh',
    album: 'Kalank',
    duration: 5,
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await track.bulkCreate(movieData);
    res.status(200).json({ message: 'Database seeding successful' });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error saving the data, Error: ' + err.message });
  }
});

/*
Exercise 1: Fetch all tracks

Create an endpoint /tracks that’ll return all the tracks in the database.

Create a function named fetchAllTracks to query the database using the sequelize instance

API Call

http://localhost:3000/tracks
*/

async function fetchAllTracks() {
  const tracks = await track.findAll();
  return { tracks };
}

app.get('/tracks', async (req, res) => {
  try {
    const result = await fetchAllTracks();
    if (result.tracks.length === 0) {
      return res.status(404).json({ message: 'No Tracks found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch track details by ID

Create an endpoint /tracks/details/:id that’ll return track details based on the ID.

Declare a variable named id to store the path parameter passed by the user

Create a function named fetchTrackById to query the database using the sequelize instance

API Call

http://localhost:3000/tracks/details/2
*/

async function fetchAllTracksById(id) {
  const trackData = await track.findOne({ where: { id } });
  return { track: trackData };
}

app.get('/tracks/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchAllTracksById(id);
    if (result.track === null) {
      return res.status(404).json({ message: 'No Track found by id: ' + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch all tracks by an artist

Create an endpoint /tracks/artist/:artist that’ll return all the tracks by an artist

Declare a variable named artist to store the path parameter passed by the user

Create a function named fetchTracksByArtist to query the database using the sequelize instance

API Call

http://localhost:3000/tracks/artist/Arijit%20Singh
*/

async function fetchTracksByArtist(artist) {
  const trackData = await track.findAll({ where: { artist } });
  return { track: trackData };
}

app.get('/tracks/artist/:artist', async (req, res) => {
  try {
    const artist = req.params.artist;
    const result = await fetchTracksByArtist(artist);
    if (result.track.length === 0) {
      return res
        .status(404)
        .json({ message: 'No Track found by artist: ' + artist });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 4: Sort all the tracks by their release year

Create an endpoint /tracks/sort/release_year that’ll return all the tracks sorted by their release year

Declare a variable named order to store the query parameter passed by the user

order can only hold asc OR desc

Create a function named sortTracksByReleaseYear to query the database using the sequelize instance

API Call

http://localhost:3000/tracks/sort/release_year?order=desc
*/

async function sortTrackByRelaseYear(order) {
  let sortedTrack = await track.findAll({
    order: [['release_year', order]],
  });
  return { track: sortedTrack };
}

app.get('/tracks/sort/release_year', async (req, res) => {
  try {
    const order = req.query.order;
    console.log(order);
    const result = await sortTrackByRelaseYear(order);
    if (result.track.length === 0) {
      return res
        .status(404)
        .json({ message: 'No Track found by release_year: ' + order });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
