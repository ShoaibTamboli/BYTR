const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;
let db;
(async () => {
  db = await open({
    filename: './BD4.4-HW1/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Fetch All Courses
Create an endpoint /courses to return all the courses.
Create a function fetchAllCourses to fetch all the courses from the database.
Wrap the function call in a try-catch block.
Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.
Return a 404 error if no data is found.
API Call:
http://localhost:3000/courses
*/

async function fetchAllCourses() {
  const query = 'SELECT id, title, release_year FROM courses';
  const response = await db.all(query, []);
  return { courses: response };
}

app.get('/courses', async (req, res) => {
  try {
    const result = await fetchAllCourses();
    if (result.courses.length === 0) {
      return res.status(404).json({ message: `No courses found.` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch Courses by Instructor

Create an endpoint /courses/instructor/:instructor to return courses by the given instructor.

Create a function fetchCoursesByInstructor to fetch courses by the instructor from the database.

Extract only id, title, instructor & category columns

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/courses/instructor/John%20Doe
*/

async function fetchCoursesByInstructor(instructor) {
  const query =
    'SeLECT id, title, instructor, category FROM courses where instructor = ? ';
  const response = await db.all(query, [instructor]);
  return { courses: response };
}

app.get('/courses/instructor/:instructor', async (req, res) => {
  try {
    const instructor = req.params.instructor;
    const result = await fetchCoursesByInstructor(instructor);
    if (result.courses.length === 0) {
      return res
        .status(404)
        .json({ message: `No courses found by instructor: ${instructor}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 3: Fetch Courses by Category

Create an endpoint /courses/category/:category to return courses by the given category.

Create a function fetchCoursesByCategory to fetch courses by the category from the database.

Extract only id, title, release_year & category columns

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/courses/category/Database
*/

async function fetchCoursesByCategory(category) {
  const query =
    'SeLECT id, title, release_year, category FROM courses where category = ? ';
  const response = await db.all(query, [category]);
  return { courses: response };
}

app.get('/courses/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const result = await fetchCoursesByCategory(category);
    if (result.courses.length === 0) {
      return res
        .status(404)
        .json({ message: `No courses found by category: ${category}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 4: Fetch Courses by Year

Create an endpoint /courses/year/:year to return courses by the given release year.

Create a function fetchCoursesByYear to fetch courses by the year from the database.

Extract only id, title, release_year & category columns

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/courses/year/2021
*/

async function fetchCoursesByYear(year) {
  const query =
    'SeLECT id, title, release_year , category FROM courses where release_year = ? ';
  const response = await db.all(query, [year]);
  return { courses: response };
}

app.get('/courses/year/:year', async (req, res) => {
  try {
    const year = req.params.year;
    const result = await fetchCoursesByYear(year);
    if (result.courses.length === 0) {
      return res
        .status(404)
        .json({ message: `No courses found by release_year: ${year}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
