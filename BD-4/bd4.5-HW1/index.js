const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.5-HW1/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch Courses by Minimum Rating

Create an endpoint /courses/rating to return courses with a rating greater than a specified value.

Declare a variable minRating to store the query parameter

Create a function filterCoursesByRating to fetch the courses from the database based on the minimum rating.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/courses/rating?minRating=4
*/

async function filterCoursesByRating(minRating) {
  const query = 'SELECT * FROM courses WHERE rating > ? ';
  const response = await db.all(query, [minRating]);
  return { courses: response };
}

app.get('/courses/rating', async (req, res) => {
  try {
    const minRating = req.query.minRating;
    const result = await filterCoursesByRating(minRating);
    if (result.courses.length === 0) {
      return res
        .status(404)
        .json({ message: `No courses found for minRating: ${minRating}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch Courses by Instructor and Minimum Duration

Create an endpoint /courses/instructor-duration to return courses by a specific instructor with a duration greater than a specified value.

Declare 2 variables instructor & minDuration to store query parameters.

Create a function filterCoursesByInstructorAndDuration to fetch the courses from the database based on the instructor and greater than minimum duration.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/courses/instructor-duration?instructor=Instructor%20A&minDuration=7
*/

async function filterCoursesByInstructorAndDuration(instructor, minDuration) {
  const query = 'SELECT * FROM courses WHERE instructor = ? AND duration >  ?';
  const response = await db.all(query, [instructor, minDuration]);
  return { courses: response };
}

app.get('/courses/instructor-duration', async (req, res) => {
  try {
    const instructor = req.query.instructor;
    const minDuration = req.query.minDuration;
    const result = await filterCoursesByInstructorAndDuration(
      instructor,
      minDuration
    );
    if (result.courses.length === 0) {
      return res.status(404).json({
        message: `No courses found by instructor: ${instructor} and duration ${minDuration}`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch Courses Ordered by Price

Create an endpoint /courses/ordered-by-price to return courses ordered by price in descending order.

Create a function fetchCoursesOrderedByPrice to fetch the courses from the database and order them by price. ( highest to lowest price )

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/courses/ordered-by-price
*/

async function fetchCoursesOrderedByPrice() {
  const query = 'SELECT * FROM courses ORDER bY price DESC';
  const response = await db.all(query, []);
  return { courses: response };
}

app.get('/courses/ordered-by-price', async (req, res) => {
  try {
    const result = await fetchCoursesOrderedByPrice();
    if (result.courses.length === 0) {
      return res.status(404).json({
        message: `No courses found`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
