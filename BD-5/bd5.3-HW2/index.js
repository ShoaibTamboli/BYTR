const express = require('express');

const app = express();
const port = 3000;
let { employee } = require('./models/employee.model.js');
let { sequelize } = require('./lib/index.js');

app.use(express.json());

const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Manager',
    department: 'Sales',
    salary: 90000,
  },
  {
    id: 2,
    name: 'Anna Brown',
    designation: 'Developer',
    department: 'Engineering',
    salary: 80000,
  },
  {
    id: 3,
    name: 'James Smith',
    designation: 'Designer',
    department: 'Marketing',
    salary: 70000,
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'HR Specialist',
    department: 'Human Resources',
    salary: 60000,
  },
  {
    id: 5,
    name: 'Michael Wilson',
    designation: 'Developer',
    department: 'Engineering',
    salary: 85000,
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    designation: 'Data Analyst',
    department: 'Data Science',
    salary: 75000,
  },
  {
    id: 7,
    name: 'David Lee',
    designation: 'QA Engineer',
    department: 'Quality Assurance',
    salary: 70000,
  },
  {
    id: 8,
    name: 'Linda Martinez',
    designation: 'Office Manager',
    department: 'Administration',
    salary: 50000,
  },
  {
    id: 9,
    name: 'Robert Hernandez',
    designation: 'Product Manager',
    department: 'Product',
    salary: 95000,
  },
  {
    id: 10,
    name: 'Karen Clark',
    designation: 'Sales Associate',
    department: 'Sales',
    salary: 55000,
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

Expected Output:

{
  employees: [
    // All employee entries in the database
  ],
}
*/

async function fetchAllEmployees() {
  const employees = await employee.findAll();
  return { employees };
}

app.get('/employees', async (req, res) => {
  try {
    const response = await fetchAllEmployees();
    if (response.employees.length === 0) {
      return res.status(404).json({ message: `No Employee found` });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

/* 
Exercise 2: Add a new employee in the database

Create a POST endpoint /employees/new that’ll return the newly inserted employee details.

Declare a variable named newEmployee to store the request body data AKA req.body.newEmployee.

Create a function named addNewEmployee that’ll insert the new employee into the database and return the new employee record from the database.

API Call

http://localhost:3000/employees/new

Request Body:

{
    'newEmployee': {
        'name': 'Jane Smith',
        'designation': 'Software Engineer',
        'department': 'Engineering',
        'salary': 75000
    }
}

Expected Output:

{
    'newEmployee': {
        'id': 11,
        'name': 'Jane Smith',
        'designation': 'Software Engineer',
        'department': 'Engineering',
        'salary': 75000
    }
}
*/

async function addNewEmployee(newEmployee) {
  const newEmployeeData = await employee.create(newEmployee);
  return { newEmployeeData };
}

app.post('/employees/new', async (req, res) => {
  try {
    const newEmployee = req.body.newEmployee;
    const response = await addNewEmployee(newEmployee);
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Update employee information

Create a POST endpoint /employees/update/:id that’ll return the updated employee details.

Declare a variable named id to store the path parameter passed by the user.

Declare a variable named newEmployeeData to store the request body data.

Create a function named updateEmployeeById that’ll update the employee in the database and return the updated employee record from the database.

API Call

http://localhost:3000/employees/update/11

Request Body:

{
  'salary': 80000
}

Expected Output:

{
    'message': 'Employee updated successfully',
    'updatedEmployee': {
        'id': 11,
        'name': 'Jane Smith',
        'designation': 'Software Engineer',
        'department': 'Engineering',
        'salary': 80000
    }
}


*/

async function updateEmployeeById(newEmployeeData, id) {
  const employeeDetails = await employee.findOne({ where: { id } });
  if (!employeeDetails) {
    return {};
  }
  employeeDetails.set(newEmployeeData);
  const updatedEmployeeData = await employeeDetails.save();
  return { message: 'Employee updated successfully', updatedEmployeeData };
}

app.post('/employees/update/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newEmployeeData = req.body;

    const response = await updateEmployeeById(newEmployeeData, id);
    if (!response.message) {
      return res.status(404).json({ message: `Employee not found` });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 4: Delete an employee from the database

Create a POST endpoint /employees/delete that’ll delete the employee record from the database.

Declare a variable named id to store the parameter from request body.

Create a function named deleteEmployeeById that’ll delete the employee record from the database based on the employee id.

API Call

http://localhost:3000/employees/delete

Request Body:

{
  'id': 11
}

Expected Output:

{ 'message': 'Employee record deleted successfully' }

*/

async function deleteEmployeeById(id) {
  const deletedEmployee = await employee.destroy({ where: { id } });
  if (deletedEmployee === 0) {
    return {};
  }
  return { message: `Employee record deleted successfully` };
}

app.post('/employees/delete', async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const response = await deleteEmployeeById(id);
    if (!response.message) {
      res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
