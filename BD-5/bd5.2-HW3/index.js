const express = require('express');
const { resolve } = require('path');

const port = 3000;

let { company } = require('./models/company.model.js');
let { sequelize } = require('./lib/index.js');
const app = express();

let companyData = [
  {
    id: 1,
    name: 'Tech Innovators',
    industry: 'Technology',
    foundedYear: 2010,
    headquarters: 'San Francisco',
    revenue: 75000000,
  },
  {
    id: 2,
    name: 'Green Earth',
    industry: 'Renewable Energy',
    foundedYear: 2015,
    headquarters: 'Portland',
    revenue: 50000000,
  },
  {
    id: 3,
    name: 'Innovatech',
    industry: 'Technology',
    foundedYear: 2012,
    headquarters: 'Los Angeles',
    revenue: 65000000,
  },
  {
    id: 4,
    name: 'Solar Solutions',
    industry: 'Renewable Energy',
    foundedYear: 2015,
    headquarters: 'Austin',
    revenue: 60000000,
  },
  {
    id: 5,
    name: 'HealthFirst',
    industry: 'Healthcare',
    foundedYear: 2008,
    headquarters: 'New York',
    revenue: 80000000,
  },
  {
    id: 6,
    name: 'EcoPower',
    industry: 'Renewable Energy',
    foundedYear: 2018,
    headquarters: 'Seattle',
    revenue: 55000000,
  },
  {
    id: 7,
    name: 'MediCare',
    industry: 'Healthcare',
    foundedYear: 2012,
    headquarters: 'Boston',
    revenue: 70000000,
  },
  {
    id: 8,
    name: 'NextGen Tech',
    industry: 'Technology',
    foundedYear: 2018,
    headquarters: 'Chicago',
    revenue: 72000000,
  },
  {
    id: 9,
    name: 'LifeWell',
    industry: 'Healthcare',
    foundedYear: 2010,
    headquarters: 'Houston',
    revenue: 75000000,
  },
  {
    id: 10,
    name: 'CleanTech',
    industry: 'Renewable Energy',
    foundedYear: 2008,
    headquarters: 'Denver',
    revenue: 62000000,
  },
];
app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await company.bulkCreate(companyData);
    res.status(200).json({ message: 'Database seeding successful' });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error saving the data, Error: ' + err.message });
  }
});
/*
Exercise 1: Fetch all companies

Create an endpoint /companies that’ll return all the employees in the database.

Create a function named fetchAllCompanies to query the database using the sequelize instance.

API Call

http://localhost:3000/companies
*/

async function fetchAllcompanies() {
  const companyData = await company.findAll();
  return { companies: companyData };
}

app.get('/companies', async (req, res) => {
  try {
    const result = await fetchAllcompanies();
    if (result.companies.length === 0) {
      return res.status(404).json({ message: `No companies found: ` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch companies details by ID

Create an endpoint /companies/details/:id that’ll return companies details based on the ID.

Declare a variable named id to store the path parameter passed by the user.

Create a function named fetchCompaniesById to query the database using the sequelize instance.

API Call

http://localhost:3000/companies/details/2

*/

async function fetchCompaniesById(id) {
  const companyData = await company.findOne({ where: { id } });
  return { company: companyData };
}

app.get('/companies/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchCompaniesById(id);
    if (result.company === null) {
      return res
        .status(404)
        .json({ message: `No companies found by id: ` + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch all companies by industry

Create an endpoint /companies/industry/:industry that’ll return all the companies in a industry.

Declare a variable named industryto store the path parameter passed by the user.

Create a function named fetchEmployeesByIndustryto to query the database using the sequelize instance.

API Call

http://localhost:3000/companies/industry/Technology
*/

async function fetchCompaniesByIndustries(industry) {
  const companyData = await company.findAll({ where: { industry } });
  return { company: companyData };
}

app.get('/companies/industry/:industry', async (req, res) => {
  try {
    const industry = req.params.industry;
    const result = await fetchCompaniesByIndustries(industry);
    if (result.company.length === 0) {
      return res
        .status(404)
        .json({ message: `No company found by industry: ` + industry });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 4: Sort all the companies by their revenue

Create an endpoint /companies/revenue that’ll return all the companies sorted by their revenue.

Declare a variable named order to store the query parameter passed by the user.

order can only hold asc OR desc.

Create a function named sortCompaniesByRevenue to query the database using the sequelize instance.

API Call

http://localhost:3000/companies/revenue?order=asc
*/

async function sortByRevenue(orderType) {
  const companyData = await company.findAll({
    order: [['revenue', orderType]],
  });
  return { company: companyData };
}

app.get('/companies/revenue', async (req, res) => {
  try {
    const order = req.query.order;
    const result = await sortByRevenue(order);
    if (result.company.length === 0) {
      return res
        .status(404)
        .json({ message: `No company found by order: ` + order });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
