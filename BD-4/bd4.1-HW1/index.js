const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.1_HW_1/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch All Books

Create an endpoint /books return all the books

Create a function fetchAllBooks to fetch all the books from the database.

API Call:

http://localhost:3000/books
*/

async function fetchBooks() {
  const query = 'SELECT * FROM books';
  const response = await db.all(query, []);
  return { books: response };
}

app.get('/books', async (req, res) => {
  const result = await fetchBooks();
  res.status(200).json(result);
});

/*
Exercise 2: Fetch Books by Author

Create an endpoint /books/author/:author return all the books by a specific author.

Create a function fetchBooksByAuthor to fetch all the books by an author from the database.

API Call:

http://localhost:3000/books/author/George%20Orwell
*/

async function fetchBooksByAuthor(author) {
  const query = 'SELECT * FROM books WHERE author=?';
  const response = await db.all(query, [author]);
  return { books: response };
}

app.get('/books/author/:author', async (req, res) => {
  const author = req.params.author;
  const result = await fetchBooksByAuthor(author);
  res.status(200).json(result);
});

/* 
Exercise 3: Fetch Books by Genre

Create an endpoint /books/genre/:genre

Create a function fetchBooksByGenre to fetch all the books based on specific genre.

API Call:

http://localhost:3000/books/genre/Fiction

*/

async function fetchBooksByGenre(genre) {
  const query = 'SELECT * FROM books WHERE genre = ?';
  const response = await db.all(query, [genre]);
  return { books: response };
}

app.get('/books/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
  const result = await fetchBooksByGenre(genre);
  res.status(200).json(result);
});

/*
Exercise 4: Fetch Books by Publication Year

Create an endpoint /books/publication_year/:year return all the books

Create a function fetchBooksByPublicationYear to fetch all the books in a specific year.

API Call:

http://localhost:3000/books/publication_year/1960
*/

async function fetchBooksByYear(year) {
  const query = 'SELECT * FROM books WHERE publication_year = ?';
  const response = await db.all(query, [year]);
  return { books: response };
}

app.get('/books/publication_year/:year', async (req, res) => {
  const year = req.params.year;
  const result = await fetchBooksByYear(year);
  res.status(200).json(result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
