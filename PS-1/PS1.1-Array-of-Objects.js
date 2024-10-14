const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/* 
PS 1.1 - Array of Objects
Read this reference document on console.log which you would need to complete the set: https://bit.ly/bytr-console-log

Create a new StackBlitz project and write the code to solve the following tasks.

Exercise 1
Given an array of objects where each object represents a student with properties for name, age, and grade.

Returns an array of the names of students who are older than 18.

Expected output
['Alice', 'Charlie']

*/

const students = [
  { name: 'Alice', age: 19, grade: 'A' },
  { name: 'Bob', age: 17, grade: 'B' },
  { name: 'Charlie', age: 20, grade: 'C' },
  { name: 'David', age: 18, grade: 'B' },
];

function getOlderStudents(students) {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].age > 18) {
      names.push(students[i].name);
    }
  }
  return names;
}

let result = getOlderStudents(students);
console.log(result);

/* 
Exercise 2

Steps

Given an array of objects where each object represents a product with properties for name, price, and category.

Sort the array of products by price in ascending order.


Expected output

[
  { name: 'Pen', price: 2, category: 'Stationery' },
  { name: 'Book', price: 20, category: 'Books' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Laptop', price: 1000, category: 'Electronics' }
]

*/
const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Books' },
  { name: 'Pen', price: 2, category: 'Stationery' },
];

function lowToHighPrice(producta, productb) {
  return producta.price - productb.price;
}

result = products.sort(lowToHighPrice);
console.log(result);
/* 

Exercise 3

Steps

Given an array of objects where each object represents an employee with properties for name, department, and salary.

Return all the employees who are not from HR department
Expected output

[
  { name: 'John', department: 'IT', salary: 60000 },
  { name: 'Doe', department: 'Finance', salary: 70000 }
]

*/

const employees = [
  { name: 'John', department: 'IT', salary: 60000 },
  { name: 'Jane', department: 'HR', salary: 50000 },
  { name: 'Doe', department: 'Finance', salary: 70000 },
  { name: 'Smith', department: 'HR', salary: 55000 },
];

result = employees.filter((e) => e.department !== 'HR');
console.log(result);

/* 

Exercise 4

Steps

Given an array of objects where each object represents a book with properties for title, author, and year.

Return the first book published before the year 2000.

Hint: Use the .find() method to find the book & add multiple console.log()'s to display the output in the expected format


Expected output

Title: Book Two
Author: Author B
Year: 1995
*/

const books = [
  { title: 'Book One', author: 'Author A', year: 2005 },
  { title: 'Book Two', author: 'Author B', year: 1995 },
  { title: 'Book Three', author: 'Author C', year: 2010 },
  { title: 'Book Four', author: 'Author D', year: 1980 },
];

result = books.find((book) => book.year > 2000);
console.log(`Title: ${result.title}`);
console.log(`Author: ${result.author}`);
console.log(`Year: ${result.year}`);

/* 
Exercise 5

Steps

Provided an array of objects where each object represents a car with properties for make, model, and mileage.

Write a function updateCarMileage that updates the mileage of a car given its make & newMileage.

Expected output

The updated mileage for Honda is 35000

*/

const cars = [
  { make: 'Toyota', model: 'Corolla', mileage: 50000 },
  { make: 'Honda', model: 'Civic', mileage: 30000 },
  { make: 'Ford', model: 'Mustang', mileage: 40000 },
  { make: 'Tesla', model: 'Model 3', mileage: 10000 },
];

function updateCarMileage(car, requestedMake, requestedMileage) {
  car.make.toLowerCase();
  requestedMake.toLowerCase();

  if (car.make === requestedMake) {
    car.mileage = requestedMileage;
    return car;
  }
}

result = cars.filter((e) => updateCarMileage(e, 'Honda', 35000));
console.log(
  `The updated mileage for ${result[0].make} is ${result[0].mileage}`
);

/*
Approach 2/ Solution : 
function updateCarMileage(cars, make, newMileage) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].make === make) {
      cars[i].mileage = newMileage;
      console.log(`The updated mileage for ${make} is ${newMileage}`);
      return; 
    }
  }
  console.log(`Car with make ${make} not found.`);
}

updateCarMileage(cars, 'Honda', 35000); 
*/

/* 
Exercise 6

Steps

Given an array of objects where each object represents a sale with properties for item, quantity, and price.

Calculate the total revenue generated from the sales.

To calculate the total revenue, multiply the price and quantity of each item and add the result to the total revenue using a for loop.

Expected output

Total revenue of sales is 4900

*/

const sales = [
  { item: 'Laptop', quantity: 2, price: 1000 },
  { item: 'Phone', quantity: 5, price: 500 },
  { item: 'Book', quantity: 10, price: 20 },
  { item: 'Pen', quantity: 100, price: 2 },
];

function calculateSales(sales) {
  let totalRevenue = 0;
  for (let i = 0; i < sales.length; i++) {
    totalRevenue += sales[i].price * sales[i].quantity;
  }
  return totalRevenue;
}

result = calculateSales(sales);
console.log(result);
/* 
Exercise 7

Steps

Given an array of objects where each object represents a movie with properties for title, director, and rating.

Return movies containing only the titles of movies directed by Director A in the expected format

Expected output

Title: Movie One
Director: Director A

Title: Movie Three
Director: Director A

*/

const movies = [
  { title: 'Movie One', director: 'Director A', rating: 8 },
  { title: 'Movie Two', director: 'Director B', rating: 7 },
  { title: 'Movie Three', director: 'Director A', rating: 9 },
  { title: 'Movie Four', director: 'Director C', rating: 6 },
];

/* 
Exercise 8

Here's a table with the scores of 4 matches played by each batsman at famous stadiums in India:

Convert the table given into an array of objects named cricketers

Print the scores to the console in the following format using for loops.

Note: Use snake_case naming convention for property names. For example: Eden Gardens will become eden_gardens
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
