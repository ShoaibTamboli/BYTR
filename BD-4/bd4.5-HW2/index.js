const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.5-HW2/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch Employees by Minimum Salary

Create an endpoint /employees/salary to return employees with a salary greater than a specified value.

Declare a variable minSalary to store the query parameter.

Create a function filterEmployeesBySalary to fetch the employees from the database greater than equal to the minimum salary.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call

http://localhost:3000/employees/salary?minSalary=80000
*/

async function filterEmployeesBySalary(minSalary) {
  const query = 'SELECT * FROM employees WHERE salary >= ?';
  const response = await db.all(query, [minSalary]);
  return { employees: response };
}

app.get('/employees/salary', async (req, res) => {
  try {
    const minSalary = req.query.minSalary;
    const result = await filterEmployeesBySalary(minSalary);
    if (result.employees.length === 0) {
      return res.status(404).json({
        message: 'No employee found in DB with minSalary: ' + minSalary,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch Employees by Department and Minimum Experience

Create an endpoint /employees/department-experience to return employees by a specific department with years of experience greater than a specified value.

Declare 2 variables named department & minExperience to store query parameter values.

Create a function filterEmployeesByDepartmentAndExperience to fetch the employees from the database based on the department and minimum experience ( greater than or equal to ).

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call

http://localhost:3000/employees/department-experience?department=Engineering&minExperience=5
*/

async function filterEmployeesByDepartmentAndExperience(
  department,
  minExperience
) {
  const query =
    'SELECT * FROM employees WHERE department = ? AND years_of_experience >= ?';
  const response = await db.all(query, [department, minExperience]);
  return { employees: response };
}

app.get('/employees/department-experience', async (req, res) => {
  try {
    const department = req.query.department;
    const minExperience = req.query.minExperience;
    const result = await filterEmployeesByDepartmentAndExperience(
      department,
      minExperience
    );
    if (result.employees.length === 0) {
      return res.status(404).json({
        message:
          'No employee found in DB with department: ' +
          department +
          ' and minExperience ' +
          minExperience,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch Employees Ordered by Salary

Create an endpoint /employees/ordered-by-salary to return employees ordered by salary in descending order.

Create a function fetchEmployeesOrderedBySalary to fetch the employees from the database and order them by salary ( highest to lowest salary ).

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call

http://localhost:3000/employees/ordered-by-salary
*/

async function fetchEmployeesOrderedBySalary() {
  const query = 'SELECT * FROM employees ORDER BY salary DESC';
  const response = await db.all(query, []);
  return { employees: response };
}

app.get('/employees/ordered-by-salary', async (req, res) => {
  try {
    const result = await fetchEmployeesOrderedBySalary();
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: 'No employee found in DB for ordered-by-salary' });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
