const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4-Assignment2/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Get All Games

Objective: Fetch all games from the database.

Query Parameters: None

Tasks: Implement a function to fetch all games.

Example Call:

http://localhost:3000/games
*/

async function fetchAllGames() {
  const query = 'SELECT * FROM games';
  const response = await db.all(query, []);
  return { games: response };
}

app.get('/games', async (req, res) => {
  try {
    const result = await fetchAllGames();
    if (result.games.length === 0) {
      return res.status(404).json({ message: 'No Games found.' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Get Game by ID

Objective: Fetch a specific game by its ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a game by its ID.

Example Call:

http://localhost:3000/games/details/1

*/

async function fetchGamesByID(id) {
  const query = 'SELECT * FROM games WHERE id = ?';
  const response = await db.all(query, [id]);
  return { games: response };
}

app.get('/games/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchGamesByID(id);
    if (result.games.length === 0) {
      return res.status(404).json({ message: 'No Games found by id: ' + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Get Games by Genre

Objective: Fetch games based on their genre.

Query Parameters:

genre (string)

Tasks: Implement a function to fetch games by genre.

Example Call:

http://localhost:3000/games/genre/FPS
*/

async function fetchGamesByGenre(genre) {
  const query = 'SELECT * FROM games WHERE genre = ?';
  const response = await db.all(query, [genre]);
  return { games: response };
}

app.get('/games/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const result = await fetchGamesByGenre(genre);
    if (result.games.length === 0) {
      return res
        .status(404)
        .json({ message: 'No Games found by genre: ' + genre });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 4: Get Games by Platform

Objective: Fetch games based on their platform.

Query Parameters:

platform (string)

Tasks: Implement a function to fetch games by platform.

Example Call:

http://localhost:3000/games/platform/PC
*/

async function fetchGamesByPlatform(platform) {
  const query = 'SELECT * FROM games WHERE platform = ?';
  const response = await db.all(query, [platform]);
  return { games: response };
}

app.get('/games/platform/:platform', async (req, res) => {
  try {
    const platform = req.params.platform;
    const result = await fetchGamesByPlatform(platform);
    if (result.games.length === 0) {
      return res
        .status(404)
        .json({ message: 'No Games found by platform: ' + platform });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 5: Get Games Sorted by Rating

Objective: Fetch games sorted by their rating ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch games sorted by rating.

Example Call:

http://localhost:3000/games/sort-by-rating
*/

/*
Exercise 6: Get All Players

Objective: Fetch all players from the database.

Query Parameters: None

Tasks: Implement a function to fetch all players.

Example Call:

http://localhost:3000/players
*/

/* 
Exercise 7: Get Player by ID

Objective: Fetch a specific player by their ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a player by their ID.

Example Call:

http://localhost:3000/players/details/1
*/

/* 
Exercise 8: Get Players by Platform

Objective: Fetch players based on their platform.

Query Parameters:

platform (string)

Tasks: Implement a function to fetch players by platform.

Example Call:

http://localhost:3000/players/platform/PC
*/

/*
Exercise 9: Get Players Sorted by Rating

Objective: Fetch players sorted by their rating ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch players sorted by rating.

Example Call:

http://localhost:3000/players/sort-by-rating
*/

/*
Exercise 10: Get All Tournaments

Objective: Fetch all tournaments from the database.

Query Parameters: None

Tasks: Implement a function to fetch all tournaments.

Example Call:

http://localhost:3000/tournaments
*/

/*
Exercise 11: Get Tournament by ID

Objective: Fetch a specific tournament by its ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a tournament by its ID.

Example Call:

http://localhost:3000/tournaments/details/1
*/

/*
Exercise 12: Get Tournaments by Game ID

Objective: Fetch tournaments based on their game ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch tournaments by game ID.

Example Call:

http://localhost:3000/tournaments/game/1
*/

/*
Exercise 13: Get Tournaments Sorted by Prize Pool

Objective: Fetch tournaments sorted by their prize pool ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch tournaments sorted by prize pool.

Example Call:

http://localhost:3000/tournaments/sort-by-prize-pool
*/

/*
How to integrate the Backend APIs with the Frontend UI?

Deploy your StackBlitz project to Vercel by following the steps in this document.
You can also watch this video for reference: https://drive.google.com/file/d/18OCtAhMJtplpC1Hi5msUxyGSLy849K8d/view?usp=sharing

Copy the Vercel URL.

Once done, go to this link: https://bd4-gamestore.vercel.app/

Copy your Vercel URL to the Server URL text box.

Once you click “Save Changes”, it will show the Product Listing page with various filters and sorting parameters.

Summary

In this lesson, you have learned how to build a backend for a Gaming Community Platform using raw SQL queries. You have practiced performing various read operations, filtering, and sorting data. With these skills, you can now create and manage a comprehensive gaming community system. Continue practicing and exploring more advanced features to enhance your SQL knowledge further.
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
