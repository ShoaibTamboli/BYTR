const express = require("express");
const app = express();
const port = 3000;

let { company } = require("./models/company.model.js");
let { sequelize } = require("./lib/index.js");

app.use(express.json());

const companyData = [
  {
    id: 1,
    name: "Tech Innovators",
    industry: "Technology",
    foundedYear: 2010,
    headquarters: "San Francisco",
    revenue: 75000000,
  },
  {
    id: 2,
    name: "Green Earth",
    industry: "Renewable Energy",
    foundedYear: 2015,
    headquarters: "Portland",
    revenue: 50000000,
  },
  {
    id: 3,
    name: "Innovatech",
    industry: "Technology",
    foundedYear: 2012,
    headquarters: "Los Angeles",
    revenue: 65000000,
  },
  {
    id: 4,
    name: "Solar Solutions",
    industry: "Renewable Energy",
    foundedYear: 2015,
    headquarters: "Austin",
    revenue: 60000000,
  },
  {
    id: 5,
    name: "HealthFirst",
    industry: "Healthcare",
    foundedYear: 2008,
    headquarters: "New York",
    revenue: 80000000,
  },
  {
    id: 6,
    name: "EcoPower",
    industry: "Renewable Energy",
    foundedYear: 2018,
    headquarters: "Seattle",
    revenue: 55000000,
  },
  {
    id: 7,
    name: "MediCare",
    industry: "Healthcare",
    foundedYear: 2012,
    headquarters: "Boston",
    revenue: 70000000,
  },
  {
    id: 8,
    name: "NextGen Tech",
    industry: "Technology",
    foundedYear: 2018,
    headquarters: "Chicago",
    revenue: 72000000,
  },
  {
    id: 9,
    name: "LifeWell",
    industry: "Healthcare",
    foundedYear: 2010,
    headquarters: "Houston",
    revenue: 75000000,
  },
  {
    id: 10,
    name: "CleanTech",
    industry: "Renewable Energy",
    foundedYear: 2008,
    headquarters: "Denver",
    revenue: 62000000,
  },
];

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await company.bulkCreate(companyData);
    res.status(200).json({ message: "Database seeding successful" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error saving the data, Error: " + err.message });
  }
});

/*
Exercise 1: Fetch all companies

Create an endpoint /companies that’ll return all the companies in the database.

Create a function named fetchAllCompanies to query the database using the sequelize instance.

API Call

http://localhost:3000/companies

Expected Output:

{
  'companies' : [
    // All the companies  in the database
  ],
}
*/

async function fetchAllCompanies() {
  const companies = await company.findAll();
  return { companies };
}

app.get("/companies", async (req, res) => {
  try {
    const response = await fetchAllCompanies();
    if (response.companies.length === 0) {
      res.status(404).json({ message: `Comapny not found` });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Add a new company in the database

Create a POST endpoint /companies/new that’ll return the newly inserted employee details.

Declare a variable named newCompany to store the request body data AKA req.body.newCompany .

Create a function named addNewCompany that’ll insert the new company into the database and return the new employee record from the database.

API Call

http://localhost:3000/companies/new

Request Body:

{
  'newCompany': {
    'name': 'New Life Care',
    'industry': 'Healthcare',
    'foundedYear': 2012,
    'headquarters': 'India',
    'revenue': 55000000
  }
}

Expected Output:

{
  'newCompany': {
    'id': 11,
    'name': 'New Life Care',
    'industry': 'Healthcare',
    'foundedYear': 2012,
    'headquarters': 'India',
    'revenue': 55000000
  }
}

*/

async function addNewCompany(newData) {
  const newCompany = await company.create(newData);
  return { newCompany };
}

app.post("/companies/new", async (req, res) => {
  try {
    const newData = req.body.newCompany;
    const response = await addNewCompany(newData);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

/*

Exercise 3: Update companies information

Create a POST endpoint /companies/update/:id that’ll return the updated company details.

Declare a variable named id to store the path parameter passed by the user.

Declare a variable named newCompanyData to store the request body data.

Create a function named updateCompanyById that’ll update the company in the database and return the updated company record from the database.

API Call

http://localhost:3000/companies/update/11

Request Body:

{
  'name': 'Life Care'
}

Expected Output:

{
  'message': 'Company updated successfully',
  'updatedCompany': {
    'id': 11,
    'name': 'Life Care',
    'industry': 'Healthcare',
    'foundedYear': 2012,
    'headquarters': 'India',
    'revenue': 55000000
  }
}

*/

async function updateCompanyById(id, newCompanyData) {
  const companyDetails = await company.findOne({ where: { id } });
  if (!companyDetails) {
    return {};
  }
  companyDetails.set(newCompanyData);
  const updatedCompany = await companyDetails.save();
  return { message: "Company updated successfully", updatedCompany };
}

app.post("/companies/update/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const newCompanyData = req.body;
  const response = await updateCompanyById(id, newCompanyData);
  if (!response.message) {
    res.status(404).json({ message: "Company not found" });
  }
  res.status(200).json(response);
});

/*
Exercise 4: Delete an company from the database

Create a POST endpoint /companies/delete that’ll delete the company record from the database.

Declare a variable named id to store the parameter from request body.

Create a function named deleteCompanyById that’ll delete the company record from the database based on the company id.

API Call

http://localhost:3000/companies/delete

Request Body:

{
  'id': 11
}

Expected Output:

{
  'message' :'Company record deleted successfully'
}
*/

async function deleteCompanyById(id) {
  const deletedCompany = await company.destroy({ where: { id } });
  if (deletedCompany === 0) {
    return {};
  }
  return { message: `Company record deleted successfully` };
}

app.post("/companies/delete", async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const response = await deleteCompanyById(id);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
