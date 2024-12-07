const express = require('express');
const { resolve } = require('path');

const port = 3000;

let { employee } = require('./models/employee.model.js');
let { sequelize } = require('./lib/index.js');
const app = express();

let employeeData = [
  {
    id: 1,
    name: 'Alice',
    salary: 60000,
    department: 'Engineering',
    designation: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Bob',
    salary: 70000,
    department: 'Marketing',
    designation: 'Marketing Manager',
  },
  {
    id: 3,
    name: 'Charlie',
    salary: 80000,
    department: 'Engineering',
    designation: 'Senior Software Engineer',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await employee.bulkCreate(employeeData);
    res.status(200).json({ message: 'Database seeding successful' });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error saving the data, Error: ' + err.message });
  }
});

/*
Exercise 1: Fetch all employees

Create an endpoint /employees that’ll return all the employees in the database.

Create a function named fetchAllEmployees to query the database using the sequelize instance.

API Call

http://localhost:3000/employees
*/

async function employees() {
  const employeeData = await employee.findAll();
  return { employees: employeeData };
}

app.get('/employees', async (req, res) => {
  try {
    const result = await employees();
    if (result.employees.length === 0) {
      return res.status(404).json({ message: `No employeeData found` });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 2: Fetch employee details by ID

Create an endpoint /employees/details/:id that’ll return employee details based on the ID.

Declare a variable named id to store the path parameter passed by the user.

Create a function named fetchEmployeeById to query the database using the sequelize instance.

API Call

http://localhost:3000/employees/details/2
*/

async function fetchEmployeeById(id) {
  const employeeData = await employee.findOne({ where: { id } });
  return { employees: employeeData };
}

app.get('/employees/details/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await fetchEmployeeById(id);
    if (result.employees === null) {
      return res
        .status(404)
        .json({ message: `No employees found by id: ` + id });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*

Exercise 3: Fetch all employees by department

Create an endpoint /employees/department/:department that’ll return all the employees in a department.

Declare a variable named department to store the path parameter passed by the user.

Create a function named fetchEmployeesByDepartment to query the database using the sequelize instance.

API Call

http://localhost:3000/employees/department/Engineering

*/

async function fetchEmployeeByDepartment(department) {
  const employeeData = await employee.findAll({ where: { department } });
  return { employees: employeeData };
}

app.get('/employees/department/:department', async (req, res) => {
  try {
    const department = req.params.department;
    const result = await fetchEmployeeByDepartment(department);
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: `No employees found by department: ` + department });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*

Exercise 4: Sort all the employees by their salary

Create an endpoint /employees/sort/salary that’ll return all the employees sorted by their salary.

Declare a variable named order to store the query parameter passed by the user.

order can only hold asc OR desc.

Create a function named sortEmployeesBySalary to query the database using the sequelize instance.

API Call

http://localhost:3000/employees/sort/salary?order=desc 

*/

async function orderBySalary(order) {
  const employeeData = await employee.findAll({ order: [['salary', order]] });
  return { employees: employeeData };
}

app.get('/employees/sort/salary', async (req, res) => {
  try {
    const order = req.query.order;
    const result = await orderBySalary(order);
    if (result.employees.length === 0) {
      return res
        .status(404)
        .json({ message: `No employees found by order: ` + order });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
