const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD-4.2-HW3/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch All Companies

Create an endpoint /companies to return all the companies.

Create a function fetchAllCompanies to fetch all the companies from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/companies
*/

async function fetchAllCompanies() {
  const query = 'SELECT * FROM companies';
  const response = await db.all(query, []);
  return { companies: response };
}

app.get('/companies', async (req, res) => {
  try {
    const result = await fetchAllCompanies();
    if (result.companies.length === 0) {
      return res.status(404).json({ message: 'companies not found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch Companies by Industry

Create an endpoint /**companies/industry/:industry**to return all the companies.

Create a function fetchCompaniesByIndustry to fetch all the companies from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/companies/industry/Energy
*/

async function fetchCompaniesByIndustry(industry) {
  const query = 'SELECT * FROM companies WHERE industry = ?';
  const response = await db.all(query, [industry]);
  return { companies: response };
}

app.get('/companies/industry/:industry', async (req, res) => {
  const industry = req.params.industry;
  try {
    const result = await fetchCompaniesByIndustry(industry);
    if (result.companies.length === 0) {
      return res
        .status(404)
        .json({ message: 'cannot find companies by industry ' + industry });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/*
Exercise 3: Fetch Companies by Revenue Range

Create an endpoint /**companies/revenue** to return all the companies.

Create a function fetchCompaniesByRevenue with parameters minRevenue and maxRevenue to fetch all the companies from the database having range between min and max revenue.

Get Query Parameters const **minRevenue = req.query.minRevenue**and const **maxRevenue = req.query.maxRevenue**

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/companies/revenue?minRevenue=1000&maxRevenue=3000
*/

async function fetchCompaniesByRevenue(minRevenue, maxRevenue) {
  const query = 'SELECT * FROM companies WHERE revenue BETWEEN ? AND ? ';
  const response = await db.all(query, [minRevenue, maxRevenue]);
  return { companies: response };
}

app.get('/companies/revenue', async (req, res) => {
  const minRevenue = req.query.minRevenue;
  const maxRevenue = req.query.maxRevenue;
  try {
    const result = await fetchCompaniesByRevenue(minRevenue, maxRevenue);
    if (result.companies.length === 0) {
      return res
        .status(404)
        .json({ message: 'cannot find companies by revenue ' + industry });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/* 
Exercise 4 : Fetch Companies by Employee Count

Create an endpoint /**companies/employees/:employeesCount** to return all the companies.

Create a function fetchCompaniesByEmployeesCount to fetch all the companies having employee having less than employeesCount from the database .

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/companies/employees/1000
*/

async function employeesCount(employeeCount) {
  const query = 'SELECT * FROM companies WHERE employee_count < ?';
  const response = await db.all(query, [employeeCount]);
  return { companies: response };
}

app.get('/companies/employees/:employeesCount', async (req, res) => {
  try {
    const employeeCount = req.params.employeesCount;
    const result = await employeesCount(employeeCount);
    if (result.companies.length === 0) {
      return res.status(404).json({
        message: `No companies found for employeeCount below ${employeeCount}`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 5: Fetch Companies by founded_year

Create an endpoint /**companies/founded_year/:founded_year**to return all the companies.

Create a function fetchCompaniesByfoundedYear to fetch all the companies from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/companies/founded_year/2005
*/

async function fetchCompaniesByfoundedYear(foundedYear) {
  const query = 'SELECT * FROM companies WHERE founded_year = ?';
  const response = await db.all(query, [foundedYear]);
  return { companies: response };
}

app.get('/companies/founded_year/:founded_year', async (req, res) => {
  try {
    const foundedYear = req.params.founded_year;
    const result = await fetchCompaniesByfoundedYear(foundedYear);
    if (result.companies.length === 0) {
      return res.status(404).json({
        message: 'No comapnies found for foundedYear: ' + founded_year,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
