const express = require('express');
let { employee } = require('./models/employee.model.js');
let { sequelize } = require('./lib/index.js');
let app = express();

let employees = [
  {
    name: 'TestUser1',
    department: 'HR',
    salary: 50000,
    designation: 'Senior HR',
  },
  {
    name: 'TestUser2',
    department: 'Tech',
    salary: 80000,
    designation: 'SDE2',
  },
  {
    name: 'TestUser3',
    department: 'Sales',
    salary: 65000,
    designation: 'Senior Sales Executive',
  },
  {
    name: 'TestUser4',
    department: 'Finance',
    salary: 60000,
    designation: 'Senior Analayst',
  },
  {
    name: 'TestUser5',
    department: 'Marketing',
    salary: 65000,
    designation: 'Senior Marketing Executive',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await employee.bulkCreate(employees);
    res.status(200).json({ message: 'Database seeding successful' });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error saving the data, Error: ' + err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/*
Sequelize Installation & Setup

Install the following packages from the Dependencies tab in Replit

express, sequelize , sqlite3

Create a folder named lib and create a file inside this folder named index.js

Create a sequelize instance

Export both sequelize instance and DataTypes which will be used to create models in the next step

Creating Models

Create a folder named models and create a file inside this folder named employee.model.js

Import the sequelize instance & DataTypes from the /lib/index.js file

Define a model named employee with the columns name as TEXT, department as TEXT, salary as INTEGER, designation as TEXT

Export the model from the file

Seeding the database with data

Create an express server with an endpoint /seed_db which will seed the database with dummy data

Declare a variable named employees which will contain an array of objects with dummy employees.

Populate the variable employees with dummy employee data

Use the model employee and bulkCreate method to seed dummy data into the database file whenever the user visits the /seed_db endpoint.
*/