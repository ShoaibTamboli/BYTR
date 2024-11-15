const express = require('express');
const { resolve } = require('path');

const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3000;
let db;
(async () => {
  db = await open({
    filename: './BD4.3-HW1/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Fetch All Employees by Gender

Create an endpoint /employees/gender/:gender to return all employees of a specific gender.

Create a function filterByGender to fetch employees filtered by gender from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/employees/gender/female>
*/

async function filterByGender(gender) {
  const query = 'SELECT * FROM employees where gender = ?';
  const response = await db.all(query, [gender]);
  return { employees: response };
}

app.get('/employees/gender/:gender', async (req, res) => {
  try {
    const gender = req.params.gender;
    const result = await filterByGender(gender);
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: 'No employee found with Gender: ' + gender });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch All Employees by Department

Create an endpoint /employees/department/:department to return all employees of a specific department.

Create a function filterByDepartment to fetch employees filtered by department from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/employees/department/Engineering>
*/

async function filterByDepartment(department) {
  const query = 'SELECT * FROM employees where department = ?';
  const response = await db.all(query, [department]);
  return { employees: response };
}

app.get('/employees/department/:department', async (req, res) => {
  try {
    const department = req.params.department;
    const result = await filterByDepartment(department);
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: 'No employee found with department: ' + department });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch All Employees by Job Title

Create an endpoint /employees/job_title/:job_title to return all employees of a specific job title.

Create a function filterByJobTitle to fetch employees filtered by job title from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/employees/job_title/Software%20Engineer>

*/

async function filterByJobTitle(jobTitle) {
  const query = 'SELECT * FROM employees where job_title = ?';
  const response = await db.all(query, [jobTitle]);
  return { employees: response };
}

app.get('/employees/job_title/:job_title', async (req, res) => {
  try {
    const jobTitle = req.params.job_title;
    const result = await filterByJobTitle(jobTitle);
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: 'No employee found with jobTitle: ' + jobTitle });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 4: Fetch All Employees by Location

Create an endpoint /employees/location/:location to return all employees of a specific location.

Create a function filterByLocation to fetch employees filtered by location from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/employees/location/New%20York>
*/

async function filterByLocation(location) {
  const query = 'SELECT * FROM employees where location = ?';
  const response = await db.all(query, [location]);
  return { employees: response };
}

app.get('/employees/location/:location', async (req, res) => {
  try {
    const location = req.params.location;
    const result = await filterByLocation(location);
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: 'No employee found with location: ' + location });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
