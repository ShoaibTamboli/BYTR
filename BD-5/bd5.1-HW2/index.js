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
