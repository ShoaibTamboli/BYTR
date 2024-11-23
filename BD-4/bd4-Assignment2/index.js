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

async function fetchGamesByRatings() {
  const query = 'SELECT * FROM games ORDER BY rating DESC';
  const response = await db.all(query, []);
  return { games: response };
}

app.get('/games/sort-by-rating', async (req, res) => {
  try {
    const result = await fetchGamesByRatings();
    if (result.games.length === 0) {
      return res.status(404).json({ message: 'No Games found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 6: Get All Players

Objective: Fetch all players from the database.

Query Parameters: None

Tasks: Implement a function to fetch all players.

Example Call:

http://localhost:3000/players
*/

async function fetchAllPlayers() {
  const query = 'SELECT * FROM players';
  const response = await db.all(query, []);
  return { players: response };
}

app.get('/players', async (req, res) => {
  try {
    const result = await fetchAllPlayers();
    if (result.players.length === 0) {
      return res.status(404).json({ message: 'No players found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 7: Get Player by ID

Objective: Fetch a specific player by their ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a player by their ID.

Example Call:

http://localhost:3000/players/details/1
*/

async function fetchPlayersByID(id) {
  const query = 'SELECT * FROM players WHERE id = ?';
  const response = await db.all(query, [id]);
  return { players: response };
}

app.get('/players/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchPlayersByID(id);
    if (result.players.length === 0) {
      return res.status(404).json({ message: 'No players found by id: ' + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 8: Get Players by Platform

Objective: Fetch players based on their platform.

Query Parameters:

platform (string)

Tasks: Implement a function to fetch players by platform.

Example Call:

http://localhost:3000/players/platform/PC
*/

async function fetchPlayersByplatform(platform) {
  const query = 'SELECT * FROM players WHERE platform = ?';
  const response = await db.all(query, [platform]);
  return { players: response };
}

app.get('/players/platform/:platform', async (req, res) => {
  try {
    const platform = req.params.platform;
    const result = await fetchPlayersByplatform(platform);
    if (result.players.length === 0) {
      return res
        .status(404)
        .json({ message: 'No players found by platform: ' + platform });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 9: Get Players Sorted by Rating

Objective: Fetch players sorted by their rating ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch players sorted by rating.

Example Call:

http://localhost:3000/players/sort-by-rating
*/

async function ftechPlayerByRating() {
  const query = 'SELECT * FROM players ORDER BY rating DESC';
  const response = await db.all(query, []);
  return { players: response };
}

app.get('/players/sort-by-rating', async (req, res) => {
  try {
    const result = await ftechPlayerByRating();
    if (result.players.length === 0) {
      return res.status(404).json({ message: 'No players found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 10: Get All Tournaments

Objective: Fetch all tournaments from the database.

Query Parameters: None

Tasks: Implement a function to fetch all tournaments.

Example Call:

http://localhost:3000/tournaments
*/

async function fetchAllTournamnents() {
  const query = 'SELECT * FROM tournaments';
  const response = await db.all(query, []);
  return { tournaments: response };
}

app.get('/tournaments', async (req, res) => {
  try {
    const result = await fetchAllTournamnents();
    if (result.tournaments.length === 0) {
      return res.status(404).json({ message: 'No tournaments found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 11: Get Tournament by ID

Objective: Fetch a specific tournament by its ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a tournament by its ID.

Example Call:

http://localhost:3000/tournaments/details/1
*/

async function fetchAllTournamnentsByID(id) {
  const query = 'SELECT * FROM tournaments WHERE id = ?';
  const response = await db.all(query, [id]);
  return { tournaments: response };
}

app.get('/tournaments/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchAllTournamnentsByID(id);
    if (result.tournaments.length === 0) {
      return res
        .status(404)
        .json({ message: 'No tournaments found by id: ' + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 12: Get Tournaments by Game ID

Objective: Fetch tournaments based on their game ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch tournaments by game ID.

Example Call:

http://localhost:3000/tournaments/game/1
*/

async function fetchTournamnentsByGameID(id) {
  const query = 'SELECT * FROM tournaments WHERE gameId = ?';
  const response = await db.all(query, [id]);
  return { tournaments: response };
}

app.get('/tournaments/game/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchTournamnentsByGameID(id);
    if (result.tournaments.length === 0) {
      return res
        .status(404)
        .json({ message: 'No tournaments found by id: ' + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 13: Get Tournaments Sorted by Prize Pool

Objective: Fetch tournaments sorted by their prize pool ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch tournaments sorted by prize pool.

Example Call:

http://localhost:3000/tournaments/sort-by-prize-pool
*/

async function fetchTournamentByPoolPrice() {
  const query = 'SELECT * FROM tournaments ORDER BY prizePool DESC';
  const response = await db.all(query, []);
  return { tournaments: response };
}

app.get('/tournaments/sort-by-prize-pool', async (req, res) => {
  try {
    const result = await fetchTournamentByPoolPrice();
    if (result.tournaments.length === 0) {
      return res.status(404).json({ message: 'No tournaments found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

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
