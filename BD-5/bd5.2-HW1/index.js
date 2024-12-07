const express = require('express');
const { resolve } = require('path');

const port = 3000;

let { post } = require('./models/post.model.js');
let { sequelize } = require('./lib/index.js');
const app = express();

let postsData = [
  {
    id: 1,
    name: 'Post1',
    author: 'Author1',
    content: 'This is the content of post 1',
    title: 'Title1',
  },
  {
    id: 2,
    name: 'Post2',
    author: 'Author2',
    content: 'This is the content of post 2',
    title: 'Title2',
  },
  {
    id: 3,
    name: 'Post3',
    author: 'Author1',
    content: 'This is the content of post 3',
    title: 'Title3',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await post.bulkCreate(postsData);
    res.status(200).json({ message: 'Database seeding successful' });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error saving the data, Error: ' + err.message });
  }
});

/*
Exercise 1: Fetch all posts

Create an endpoint /posts that’ll return all the posts in the database.

Create a function named fetchAllPosts to query the database using the sequelize instance.

API Call

http://localhost:3000/posts
*/

async function fetchAllPosts() {
  const postData = await post.findAll();
  return { posts: postData };
}

app.get('/posts', async (req, res) => {
  try {
    const result = await fetchAllPosts();
    if (result.posts.length === 0) {
      return res.status(404).json({ message: `No posts found: ` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch post details by ID

Create an endpoint /posts/details/:id that’ll return post details based on the ID.

Declare a variable named id to store the path parameter passed by the user.

Create a function named fetchPostById to query the database using the sequelize instance.

API Call

http://localhost:3000/posts/details/2
*/

async function fetchPostsDetailsById(id) {
  const postData = await post.findOne({ where: { id } });
  return { post: postData };
}

app.get('/posts/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchPostsDetailsById(id);
    if (result.post === null) {
      return res.status(404).json({ message: `No posts found by id: ` + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch all posts by an author

Create an endpoint /posts/author/:author that’ll return all the posts by an author.

Declare a variable named author to store the path parameter passed by the user.

Create a function named fetchPostsByAuthor to query the database using the sequelize instance.

API Call

http://localhost:3000/posts/author/Author1
*/

async function fetchPostsByAuthor(author) {
  const postData = await post.findAll({ where: { author } });
  return { post: postData };
}

app.get('/posts/author/:author', async (req, res) => {
  try {
    const author = req.params.author;
    const result = await fetchPostsByAuthor(author);
    if (result.post.length === 0) {
      return res
        .status(404)
        .json({ message: `No posts found by author: ` + author });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*

Exercise 4: Sort all the posts by their name

Create an endpoint /posts/sort/name that’ll return all the posts sorted by their name.

Declare a variable named order to store the query parameter passed by the user.

order can only hold asc OR desc.

Create a function named sortPostsByName to query the database using the sequelize instance.

API Call

http://localhost:3000/posts/sort/name?order=desc

*/

async function sortPost(author) {
  const postData = await post.findAll({ order: [['name', author]] });
  return { post: postData };
}

app.get('/posts/sort/name', async (req, res) => {
  try {
    const order = req.query.order;
    const result = await sortPost(order);
    if (result.post.length === 0) {
      return res
        .status(404)
        .json({ message: `No posts found by order: ` + order });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
