const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.4-HW3/database.sqlite',
    driver: sqlite3.Database,
  });
})();
/*
Exercise 1: Fetch All Books

Create an endpoint /books to return all the books.

Create a function fetchAllBooks to fetch all the books from the database and only returns the columns id, title & author.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/books
*/

async function fetchAllBooks() {
  const query = 'SELECT id, title, author FROM books';
  const response = await db.all(query, []);
  return { books: response };
}

app.get('/books', async (req, res) => {
  try {
    const result = await fetchAllBooks();
    if (result.books.length === 0) {
      return res.status(404).json({ message: `books not found.` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch Books by Author

Create an endpoint /books/author/:author to return books by the given author.

Create a function fetchBooksByAuthor to fetch books by the author from the database.

Extract only id, title, author, and year columns.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/books/author/Dan%20Brown
*/

async function fetchBooksByAuthor(author) {
  const query = 'SELECT id, title, author, year FROM books WHERE author = ?';
  const response = await db.all(query, [author]);
  return { books: response };
}

app.get('/books/author/:author', async (req, res) => {
  try {
    const author = req.params.author;
    const result = await fetchBooksByAuthor(author);
    if (result.books.length === 0) {
      return res
        .status(404)
        .json({ message: `books not found by Author: ${author}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 3: Fetch Books by Genre

Create an endpoint /books/genre/:genre to return books by the given genre.

Create a function fetchBooksByGenre to fetch books by the genre from the database.

Extract only id, title, author, and genre columns.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/books/genre/Fantasy
*/

async function fetchBooksByGenre(genre) {
  const query = 'SELECT id, title, author, genre FROM books WHERE genre = ?';
  const response = await db.all(query, [genre]);
  return { books: response };
}

app.get('/books/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const result = await fetchBooksByGenre(genre);
    if (result.books.length === 0) {
      return res
        .status(404)
        .json({ message: `books not found by genre: ${genre}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 4 : Fetch Books by Year

Create an endpoint /books/year/:year to return books by the given year.

Create a function fetchBooksByYear to fetch books by the genre from the database.

Extract only id, title, author, genre and year columns.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/books/year/2000
*/

async function fetchBooksByYear(year) {
  const query =
    'SELECT id, title, author, genre, year FROM books WHERE year = ?';
  const response = await db.all(query, [year]);
  return { books: response };
}

app.get('/books/year/:year', async (req, res) => {
  try {
    const year = req.params.year;
    const result = await fetchBooksByYear(year);
    if (result.books.length === 0) {
      return res
        .status(404)
        .json({ message: `books not found by year: ${year}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
