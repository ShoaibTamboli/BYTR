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
