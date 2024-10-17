const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

console.log('');
console.log('=====================Exercise 1=======================');
console.log('');

/*
Exercise 1
Given an array of numbers representing numbers .
Return the numbers sorted in ascending order.

Expected Output:
[2,4,5,6,10]

*/

let numbers = [2, 5, 10, 6, 4];

numbers.sort((num1, num2) => num1 - num2);
console.log(numbers);

console.log('');
console.log('=====================Exercise 2=======================');
console.log('');

/*

Exercise 2
Given an array of numbers representing ages.
Return the heights sorted in ascending order.

Expected Output:
[45, 39, 32, 29, 21]

*/

const ages = [32, 21, 45, 29, 39];
ages.sort((age1, age2) => {
  return age1 - age2;
});

console.log(ages);

console.log('');
console.log('=====================Exercise 3=======================');
console.log('');

/*

Exercise 3
Given an array of numbers representing the prices of items in a store.
Return the prices sorted from most expensive to least expensive.

Expected Output:
[200, 150, 120, 99, 75]

*/

const prices = [99, 150, 75, 120, 200];

prices.sort((a, b) => b - a);
console.log(prices);

console.log('');
console.log('=====================Exercise 4=======================');
console.log('');

/*



Exercise 4
Given an array of objects where each object represents a project with properties for name, duration, and status.
Return all ongoing projects sorted by duration in ascending order.

Expected Output:

 [
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' }
]

*/

const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];

function sortbyDuration(el) {
  return el.status === 'ongoing';
}

const filterProjectStatus = projects.filter((el) => sortbyDuration(el));
filterProjectStatus.sort((a, b) => a.duration - b.duration);
console.log(filterProjectStatus);

console.log('');
console.log('=====================Exercise 5=======================');
console.log('');

/*

Exercise 5
Given an array of objects where each object represents a project with properties for name, duration, and status.
Return all completed projects sorted by duration in ascending order.

Expected Output:

[
  { name: 'Project D', duration: 6, status: 'completed' },
  { name: 'Project A', duration: 12, status: 'completed' }
]

*/

const projects1 = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];

let result = projects1
  .filter((e) => e.status === 'completed')
  .sort((a, b) => a.duration - b.duration);
console.log(result);

console.log('');
console.log('=====================Exercise 6=======================');
console.log('');

/*

Exercise 6
Given the array of projects, each with properties for name, duration, and status.
Return the projects sorted by duration in ascending order.

Sample data:
const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' }
];


Expected Output:

[
	{ name: 'Project D', duration: 6, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project A', duration: 12, status: 'completed' }
]

*/

const projects2 = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];

projects2.sort((a, b) => a.duration - b.duration);
console.log(projects2);

console.log('');
console.log('=====================Exercise 7=======================');
console.log('');

/*

Exercise 7
Given an array of objects where each object represents a gadget with properties for name and brand.
Return the all gadgets made by 'Apple' with quantity ascending order.

Expected Output:

[
   { name: 'iPhone', brand: 'Apple', quantity: 2 },
   { name: 'iPad', brand: 'Apple', quantity: 3 },
]

*/

const gadgets = [
  { name: 'iPhone', brand: 'Apple', quantity: 2 },
  { name: 'Galaxy S21', brand: 'Samsung', quantity: 5 },
  { name: 'iPad', brand: 'Apple', quantity: 3 },
  { name: 'Pixel 5', brand: 'Google', quantity: 1 },
];

result = gadgets
  .filter((el) => el.brand === 'Apple')
  .sort((a, b) => a.quantity - b.quantity);

console.log(result);

console.log('');
console.log('=====================Exercise 8=======================');
console.log('');

/*

Exercise 8
Given an array of objects where each object represents a product with properties for name and price.
Return the all projects sorted by price in ascending order.

Expected Output:

[
  { name: 'Keyboard', price: 100 },
  { name: 'Monitor', price: 300 },
  { name: 'Tablet', price: 600 },
  { name: 'Smartphone', price: 800 },
  { name: 'Laptop', price: 1000 }
]

*/

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 600 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 100 },
];

products.sort((a, b) => a.price - b.price);
console.log(products);

console.log('');
console.log('=====================Exercise 9=======================');
console.log('');

/*

Exercise 9
Given an array of objects where each object represents a car with properties for make, model, and year.
Return the all the cars on manufacturing years in ascending order.

Expected Output:

[
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Tesla', model: 'Model 3', year: 2020 }
]

*/

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);

console.log('');
console.log('=====================Exercise 10=======================');
console.log('');

/*

Exercise 10
Given an array of objects where each object represents an athlete with properties for name and score.
Return the all the athletes who scored above 90 in ascending.

Expected Output:

[
  { name: 'Mike', score: 92 },
  { name: 'Linda', score: 95 }
];

*/

const athletes = [
  { name: 'John', score: 85 },
  { name: 'Mike', score: 92 },
  { name: 'Sara', score: 88 },
  { name: 'Linda', score: 95 },
];

result = athletes
  .filter((el) => el.score > 90)
  .sort((a, b) => a.score - b.score);

console.log(result);
console.log('');
console.log('=====================Exercise 11=======================');
console.log('');

/*

Exercise 11
Given an array of objects where each object represents a student with properties for name and grade.
Return the all the athletes whose Grade is A with descending order of marks.

Expected Output:

[
   { name: 'Bella', grade: 'A',marks : 90 },
   { name: 'Diana', grade: 'A', marks : 80 }
]

*/

const students = [
  { name: 'Alex', grade: 'B', marks: 75 },
  { name: 'Bella', grade: 'A', marks: 90 },
  { name: 'Chris', grade: 'C', marks: 58 },
  { name: 'Diana', grade: 'A', marks: 80 },
];

result = students
  .filter((e) => e.grade === 'A')
  .sort((a, b) => b.marks - a.marks);

console.log(result);

console.log('');
console.log('=====================Exercise 12=======================');
console.log('');

/*

Exercise 12
Given an array of objects where each object represents an employee with properties for name, department, and salary.
Return the all employees in the 'Engineering' department in salary descending order.

Expected Output:

[
  { name: 'Ronak', department: 'Engineering', salary: 80000 },
  { name: 'Raman', department: 'Engineering', salary: 70000 }
]

*/

const employees = [
  { name: 'Raman', department: 'Engineering', salary: 70000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 },
  { name: 'Ronak', department: 'Engineering', salary: 80000 },
  { name: 'Siddharth', department: 'Sales', salary: 60000 },
];

function sortbyEngSalaryDesc(employees) {
  let data = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === 'Engineering') {
      data.push(employees[i]);
    }
  }
  data.sort((a, b) => b.salary - a.salary);
  console.log(data);
  return data;
}

sortbyEngSalaryDesc(employees);

console.log('');
console.log('=====================Exercise 13=======================');
console.log('');

/*

Exercise 13
Given an array of objects where each object represents an employee with properties for name, department, and salary.
Return the all employees in the 'Marketing' department in salary ascending order.

Expected Output:

[
	{ name: 'Kevin', department: 'Marketing', salary: 50000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 }
]

*/
const employees1 = [
  { name: 'Raman', department: 'Engineering', salary: 70000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 },
  { name: 'Ronak', department: 'Engineering', salary: 50000 },
  { name: 'Kevin', department: 'Marketing', salary: 50000 },
  { name: 'Siddharth', department: 'Sales', salary: 60000 },
];

function getEmployeeSalaryInAscending(employees1, department) {
  let data = [];
  for (let emp of employees1) {
    if (emp.department === department) {
      data.push(emp);
    }
  }
  data.sort((a, b) => a.salary - b.salary);
  console.log(data);
}

getEmployeeSalaryInAscending(employees1, 'Marketing');

console.log('');
console.log('=====================Exercise 14=======================');
console.log('');

/*

Exercise 14
Given an array of objects where each object represents an employee with properties for name, department, and salary.
Return the all employees in the salary greater than 60000 in descending order.

Expected Output:

[
  { name: 'John', department: 'Engineering', salary: 80000 },
  { name: 'Eve', department: 'Engineering', salary: 70000 },
  { name: 'Sam', department: 'Marketing', salary: 55000 },
];

*/

const employees2 = [
  { name: 'Eve', department: 'Engineering', salary: 70000 },
  { name: 'Sam', department: 'Marketing', salary: 55000 },
  { name: 'John', department: 'Engineering', salary: 80000 },
  { name: 'Lucy', department: 'Sales', salary: 60000 },
];

function employeesSalaryDesc(employees2) {
  let data = [];
  for (let emp of employees2) {
    if (emp.salary > 60000) {
      data.push(emp);
    }
  }
  data.sort((a, b) => b.salary - a.salary);
  console.log(data);
}

employeesSalaryDesc(employees2);

console.log('');
console.log('=====================Exercise 15=======================');
console.log('');

/*


Exercise 15
Given an array of objects where each object represents an employee with properties for name, department, and salary.
Return the all employees in the salary less than 70000 in ascending order.

Expected Output:

 [
	  { name: 'Sam', department: 'Marketing', salary: 55000 },
	  { name: 'Lucy', department: 'Sales', salary: 60000 }
]

*/

const employees4 = [
  { name: 'Eve', department: 'Engineering', salary: 70000 },
  { name: 'Sam', department: 'Marketing', salary: 55000 },
  { name: 'John', department: 'Engineering', salary: 80000 },
  { name: 'Lucy', department: 'Sales', salary: 60000 },
];

function employeesBySalaryAscending(employees4) {
  let data = [];
  employees4.forEach((emp) => {
    if (emp.salary < 70000) {
      data.push(emp);
    }
  });
  data.sort((a, b) => a.salary - b.salary);
  console.log(data);
}

employeesBySalaryAscending(employees4);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
