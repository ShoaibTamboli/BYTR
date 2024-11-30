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
