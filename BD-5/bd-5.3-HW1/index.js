const express = require('express');
const { resolve } = require('path');

const { post } = require('./models/post.model.js');
const { sequelize } = require('./lib/index.js');

const app = express();
const port = 3000;

app.use(express.json());

const postData = [
  {
    title: 'Getting Started with Node.js',
    content:
      'This post will guide you through the basics of Node.js and how to set up a Node.js project.',
    author: 'Alice Smith',
  },
  {
    title: 'Advanced Express.js Techniques',
    content:
      'Learn advanced techniques and best practices for building applications with Express.js.',
    author: 'Bob Johnson',
  },
  {
    title: 'ORM with Sequelize',
    content:
      'An introduction to using Sequelize as an ORM for Node.js applications.',
    author: 'Charlie Brown',
  },
  {
    title: 'Boost Your JavaScript Skills',
    content:
      'A collection of useful tips and tricks to improve your JavaScript programming.',
    author: 'Dana White',
  },
  {
    title: 'Designing RESTful Services',
    content: 'Guidelines and best practices for designing RESTful APIs.',
    author: 'Evan Davis',
  },
  {
    title: 'Mastering Asynchronous JavaScript',
    content:
      'Understand the concepts and patterns for writing asynchronous code in JavaScript.',
    author: 'Fiona Green',
  },
  {
    title: 'Modern Front-end Technologies',
    content:
      'Explore the latest tools and frameworks for front-end development.',
    author: 'George King',
  },
  {
    title: 'Advanced CSS Layouts',
    content: 'Learn how to create complex layouts using CSS Grid and Flexbox.',
    author: 'Hannah Lewis',
  },
  {
    title: 'Getting Started with React',
    content: 'A beginners guide to building user interfaces with React.',
    author: 'Ian Clark',
  },
  {
    title: 'Writing Testable JavaScript Code',
    content:
      'An introduction to unit testing and test-driven development in JavaScript.',
    author: 'Jane Miller',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await post.bulkCreate(postData);
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

Expected Output:

{
  posts: [
    // All post entries in the database
  ],
}
*/

async function fetchAllPosts() {
  const posts = await post.findAll();
  return { posts };
}

app.get('/posts', async (req, res) => {
  try {
    const response = await fetchAllPosts();
    if (response.posts.length === 0) {
      return res.status(404).json({ message: 'No posts found' });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Add a new post in the database

Create a POST endpoint /posts/new that’ll return the newly inserted post details.

Declare a variable named newPost to store the request body data AKA req.body.newPost.

Create a function named addNewPost that’ll insert the new post into the database and return the new post record from the database.

API Call

http://localhost:3000/posts/new

Request Body:

{
    'newPost': {
        'title': 'Introduction to Sequelize',
        'content': 'This post explains how to use Sequelize ORM for Node.js.',
        'author': 'John Doe'
    }
}

Expected Output:

{
    'newPost': {
        'id': 11,
        'title': 'Introduction to Sequelize',
        'content': 'This post explains how to use Sequelize ORM for Node.js.',
        'author': 'John Doe'
    }
}
*/
async function addNewPost(newPost) {
  const newposts = await post.create(newPost);
  return { newposts };
}

app.post('/posts/new', async (req, res) => {
  try {
    const newPost = req.body.newPost;
    const response = addNewPost(newPost);
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*

Exercise 3: Update post information

Create a POST endpoint /posts/update/:id that’ll return the updated post details.

Declare a variable named id to store the path parameter passed by the user.

Declare a variable named newPostData to store the request body data.

Create a function named updatePostById that’ll update the post in the database and return the updated post record from the database.

API Call

http://localhost:3000/posts/update/11

Request Body:

{
  'title': 'Advanced Sequelize'
}

Expected Output:

{
    'message': 'Post updated successfully',
    'updatedPost': {
        'id': 11,
        'title': 'Advanced Sequelize',
        'content': 'This post explains how to use Sequelize ORM for Node.js.',
        'author': 'John Doe'
    }
}
*/

async function updatePostById(id, newPostData) {
  const postDetails = await post.findOne({ where: { id } });
  if (!postDetails) {
    return {};
  }
  postDetails.set(newPostData);
  const updatedPostData = await postDetails.save();
  return { message: 'Post Updated successfully', updatedPostData };
}

app.post('/posts/update/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newPostData = req.body;
    const response = await updatePostById(id, newPostData);
    if (!response.message) {
      return res.status(404).json({ message: `Post not found` });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*

Exercise 4: Delete a post from the database

Create a POST endpoint /posts/delete that’ll delete the post record from the database.

Declare a variable named id to store the parameter from request body.

Create a function named deletePostById that’ll delete the post record from the database based on the post id.

API Call

http://localhost:3000/posts/delete

Request Body:

{
  'id': 11
}

Expected Output:

{ 'message': 'Post record deleted successfully' }

*/

async function deletePostById(id) {
  const destroyedTrack = await post.destroy({ where: { id } });
  if (destroyedTrack === 0) {
    return {};
  }
  return { message: `post record deleted` };
}

app.post('/posts/delete', async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const response = await deletePostById(id);
    if (!response.message) {
      res.status(404).json({ message: 'post not found' });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
