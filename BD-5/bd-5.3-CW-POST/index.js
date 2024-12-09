const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;
let { track } = require('./models/track.model.js');
let { sequelize } = require('./lib/index.js');

let trackData = [
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

/*
Exercise 1: Fetch all tracks

Create an endpoint /tracks that’ll return all the tracks in the database.

Create a function named fetchAllTracks to query the database using the sequelize instance

API Call

http://localhost:3000/tracks
*/

/* 
Exercise 2: Add a new track in the database

Create a POST endpoint /tracks/new that’ll return the newly inserted track details

Declare a variable named newTrack to store the request body data AKA req.body.newTrack

Create a function named addNewTrack that’ll insert the new track into the database and return the new track record from the database

API Call

http://localhost:3000/tracks/new
*/

/*
Exercise 3: Update track information

Create a POST endpoint /tracks/update/:id that’ll return the updated track details.

Declare a variable named id to store the path parameter passed by the user

Declare a variable named newTrackData to store the request body data

Create a function named updateTrackById that’ll insert the new track into the database and return the new track record from the database

API Call

http://localhost:3000/tracks/update/11
*/

/*
Exercise 4: Delete a track from the database

Create a POST endpoint /tracks/delete that’ll delete the track record from the database.

Declare a variable named id to store the parameter from request body

Create a function named deleteTrackById that’ll delete the track record from the database based on the track id

API Call

http://localhost:3000/tracks/delete
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
