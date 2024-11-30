const express = require('express');
let { post } = require('./models/post.model.js');
let { sequelize } = require('./lib/index.js');
let app = express();

let posts = [
  {
    name: 'Raabta',
    author: 'Romantic',
    title: 2012,
    content: 'Arijit Singh',
  },
  {
    name: 'Raabta',
    author: 'Romantic',
    title: 2012,
    content: 'Arijit Singh',
  },
  {
    name: 'Raabta',
    author: 'Romantic',
    title: 2012,
    content: 'Arijit Singh',
  },
  {
    name: 'Raabta',
    author: 'Romantic',
    title: 2012,
    content: 'Arijit Singh',
  },
  {
    name: 'Raabta',
    author: 'Romantic',
    title: 2012,
    content: 'Arijit Singh',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await post.bulkCreate(posts);
    res.status(200).json({ message: 'Database seeding successful' });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error saving the data, Error: ' + err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


/* 
Sequelize Installation & Setup

Install the following packages from the Dependencies tab in Replit

express, sequelize , sqlite3

Create a folder named lib and create a file inside this folder named index.js

Create a sequelize instance

Export both sequelize instance and DataTypes which will be used to create models in the next step

Creating Models

Create a folder named models and create a file inside this folder named post.model.js

Import the sequelize instance & DataTypes from the /lib/index.js file

Define a model named post with the columns name as TEXT, author as TEXT, title as TEXT, content as TEXT

Export the model from the file

Seeding the database with data

Create an express server with an endpoint /seed_db which will seed the database with dummy data

Declare a variable named posts which will contain an array of objects with dummy posts.

Populate the variable posts with dummy post-data.

Use the model post and bulkCreate method to seed dummy data into the database file whenever the user visits the /seed_db endpoint.
*/