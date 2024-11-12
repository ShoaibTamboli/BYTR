const express = require('express');
const { resolve } = require('path');

const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3000;

let db;

(async () => {
  db = await open({
    filename: './BD-4.2-HW1/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch All Books

Create an endpoint /books return all the books

Create a function getAllBooks to fetch all the books from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API Call:

http://localhost:3000/books
*/

async function getAllBooks() {
  const query = 'SELECT * FROM books';
  const response = await db.all(query, []);
  return { books: response };
}

app.get('/books', async (req, res) => {
  try {
    const result = await getAllBooks();
    if (result.books.length === 0) {
      return res.status(404).json({ message: 'Books not found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch Books by Author

Create an endpoint /books/author/:author return all the books by a specific author.

Create a function getAllBooksByAuthor to fetch all the books by an author from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API Call:

http://localhost:3000/books/author/George%20Orwell
*/

async function getAllBooksByAuthor(author) {
  const query = 'SELECT * FROM books WHERE author = ? ';
  const response = await db.all(query, [author]);
  return { books: response };
}

app.get('/books/author/:author', async (req, res) => {
  const author = req.params.author;
  try {
    const result = await getAllBooksByAuthor(author);
    if (result.books.length === 0) {
      return res
        .status(404)
        .json({ message: 'books not found by author ' + author });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/*
Exercise 3: Fetch Books by Genre

Create an endpoint /books/genre/:genre

Create a function getAllBooksByGenre to fetch all the books based on specific genre.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API Call:

http://localhost:3000/books/genre/Fiction
*/

async function getAllBooksByGenre(genre) {
  const query = 'SELECT * FROM books WHERE genre = ? ';
  const response = await db.all(query, [genre]);
  return { books: response };
}

app.get('/books/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
  try {
    const result = await getAllBooksByGenre(genre);
    if (result.books.length === 0) {
      return res
        .status(404)
        .json({ message: 'books not found by genre ' + genre });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/* 
Exercise 4: Fetch Books by Publication Year

Create an endpoint /books/publication_year/:year return all the books

Create a function getAllBooksByPublicationYear to fetch all the books in a specific year.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found

API Call:

http://localhost:3000/books/publication_year/1960
*/

async function getAllBooksByPublicationYear(year) {
  const query = 'SELECT * FROM books WHERE publication_year = ? ';
  const response = await db.all(query, [year]);
  return { books: response };
}

app.get('/books/publication_year/:year', async (req, res) => {
  const year = req.params.year;
  try {
    const result = await getAllBooksByPublicationYear(year);
    if (result.books.length === 0) {
      return res
        .status(404)
        .json({ message: 'books not found by year ' + year });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
