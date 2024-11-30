const express = require('express');
let { book } = require('./models/book.model.js');
let { sequelize } = require('./lib/index.js');
let app = express();

let books = [
  {
    title: 'TITLE ONE',
    author: 'AUTHOR 1',
    description: 'DESCRIPTION_ONE',
    genre: 'Inspiration',
  },
  {
    title: 'TITLE TWO',
    author: 'AUTHOR 2',
    description: 'DESCRIPTION_TWO',
    genre: 'Motivation',
  },
  {
    title: 'TITLE THREE',
    author: 'AUTHOR 3',
    description: 'DESCRIPTION_THREE',
    genre: 'comedy',
  },
  {
    title: 'TITLE FOUR',
    author: 'AUTHOR 4',
    description: 'DESCRIPTION_FOUR',
    genre: 'drama',
  },
  {
    title: 'TITLE FIVE',
    author: 'AUTHOR 5',
    description: 'DESCRIPTION_FIVE',
    genre: 'Inspiration',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await book.bulkCreate(books);
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
Make your own array of dummy data. The datatype of this array of objects should match that of the model. You can refer the dummy data of BD5.1_CW for examples

Sequelize Installation & Setup

Install the following packages from the Dependencies tab in Replit

express, sequelize , sqlite3

Create a folder named lib and create a file inside this folder named index.js

Create a sequelize instance

Export both sequelize instance and DataTypes which will be used to create models in the next step

Creating Models

Create a folder named models and create a file inside this folder named book.model.js

Import the sequelize instance & DataTypes from the /lib/index.js file

Define a model named book with the columns title as TEXT, author as TEXT, description as TEXT, genre as TEXT

Export the model from the file

Seeding the database with data

Create an express server with an endpoint /seed_db which will seed the database with dummy data

Declare a variable named books which will contain an array of objects with dummy books.

Populate the variable books with dummy books data

Use the model books and bulkCreate method to seed dummy data into the database file whenever the user visits the /seed_db endpoint.
*/