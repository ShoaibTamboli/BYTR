const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

console.log('');
console.log('===========Exercise 1===============');
console.log('');

/*

Exercise 1
Given an array of objects where each object represents a students with properties for id, name, and grade.
Update the grade of the student with id: 2 to 'A' and return the updated array.

Expected Output:
[
  { id: 1, name: 'John', grade: 'B' },
  { id: 2, name: 'Emily', grade: 'A' },
  { id: 3, name: 'David', grade: 'A' }
];

*/

let students = [
  { id: 1, name: 'John', grade: 'B' },
  { id: 2, name: 'Emily', grade: 'C' },
  { id: 3, name: 'David', grade: 'A' },
];

function updateGrades(students) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === 2) {
      students[i].grade = 'A';
    }
  }
  console.log(students);
  return students;
}

updateGrades(students);

console.log('');
console.log('===========Exercise 2===============');
console.log('');
/*

Exercise 2

Given an array of objects where each object represents a products with properties for id, name and price.

Delete the product id: 3 from the array and return the updated array.

Expected Output:

[
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Monitor', price: 300 }
];

*/

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Monitor', price: 300 },
  { id: 3, name: 'Keyboard', price: 100 },
];

let result = products.filter((e) => e.id !== 3);
console.log(result);

console.log('');
console.log('===========Exercise 3===============');
console.log('');

/*

Exercise 3

Given an array of objects where each object represents an employees with properties for id, name and department.

Update the department of the employee with id: 1 to 'Human Resources' and return the updated array.

Expected Output:

[
  { id: 1, name: 'John', department: 'Human Resources' },
  { id: 2, name: 'Eve', department: 'Sales' },
  { id: 3, name: 'Mark', department: 'Marketing' }
];

*/

let employees = [
  { id: 1, name: 'John', department: 'Engineering' },
  { id: 2, name: 'Eve', department: 'Sales' },
  { id: 3, name: 'Mark', department: 'Marketing' },
];

result = employees.map((e) => {
  if (e.id === 1) {
    e.department = 'Human Resource';
  }
  return e;
});

console.log(result);

console.log('');
console.log('===========Exercise 4===============');
console.log('');
/*

Exercise 4

Given an array of objects where each object represents a books with properties for id, title, and author.

Delete the book with id: 2 and return the updated array.

Expected Output:

[
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

*/

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

result = books.filter((e) => e.id !== 2);
console.log(result);

console.log('');
console.log('===========Exercise 5===============');
console.log('');
/*


Exercise 5

Given an array of objects where each object represents a cars with properties for id, make, and year

Update the year of the car with id: 3 to 2021 and return the updated array.

Expected Output:

[
  { id: 1, make: 'Toyota', year: 2015 },
  { id: 2, make: 'Honda', year: 2008 },
  { id: 3, make: 'Tesla', year: 2021 }
];

*/

let cars = [
  { id: 1, make: 'Toyota', year: 2015 },
  { id: 2, make: 'Honda', year: 2008 },
  { id: 3, make: 'Tesla', year: 2020 },
];

function updateCarYear(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === 3) {
      cars[i].year = 2021;
    }
    console.log(cars);
  }
}

updateCarYear(cars);

console.log('');
console.log('===========Exercise 6===============');
console.log('');
/*

Exercise 6

Given an array of objects where each object represents a gadgets with properties for id, name, and brand .

Delete the gadget with id: 1 and return the updated array.

Expected Output:

[
  { id: 2, name: 'Pixel', brand: 'Google' },
  { id: 3, name: 'Galaxy', brand: 'Samsung' }
];

*/

let gadgets = [
  { id: 1, name: 'iPhone', brand: 'Apple' },
  { id: 2, name: 'Pixel', brand: 'Google' },
  { id: 3, name: 'Galaxy', brand: 'Samsung' },
];

result = gadgets.filter((e) => e.id !== 1);
console.log(result);

console.log('');
console.log('===========Exercise 7===============');
console.log('');
/*

Exercise 7

Given an array of objects where each object represents a projects with properties for id, name, and duration .

Update the duration of the project with id: 1 to 14 weeks and return the updated array.

Expected Output:

[
  { id: 1, name: 'Project Alpha', duration: 14 },
  { id: 2, name: 'Project Beta', duration: 10 },
  { id: 3, name: 'Project Gamma', duration: 8 }
];

*/

let projects = [
  { id: 1, name: 'Project Alpha', duration: 12 },
  { id: 2, name: 'Project Beta', duration: 10 },
  { id: 3, name: 'Project Gamma', duration: 8 },
];

function updateProjectduration(projects) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === 1) {
      projects[i].duration = 14;
    }
  }
  console.log(projects);
}
updateProjectduration(projects);

console.log('');
console.log('===========Exercise 8===============');
console.log('');
/*


Exercise 8

Given an array of objects where each object represents a restaurants with properties for id, name, and cuisine.

Delete the restaurant with id: 2 and return the updated array.


Expected Output:

[
  { id: 1, name: 'Pasta Palace', cuisine: 'Italian' },
  { id: 3, name: 'Burger Barn', cuisine: 'American' }
];

*/

let restaurants = [
  { id: 1, name: 'Pasta Palace', cuisine: 'Italian' },
  { id: 2, name: 'Dragon Wok', cuisine: 'Chinese' },
  { id: 3, name: 'Burger Barn', cuisine: 'American' },
];

result = restaurants.filter((e) => e.id !== 2);
console.log(result);

// function getRestraunts(restaurants) {
//   for (let rest of restaurants) {
//     if (rest.id === 2) {
//       continue; // Skip the item with `id === 2`
//       break; // Stop the loop completely
//     }
//   }
//   console.log(restaurants);
//   return restaurants;
// }
// console.log('------------------------');
// getRestraunts(restaurants);
console.log('');
console.log('===========Exercise 9===============');
console.log('');
/*

Exercise 9

Given an array of objects where each object represents a athletes with properties for id, name, and score.

Update the score of the athlete with id: 2 to 95 and return the updated array.


Expected Output:

[
  { id: 1, name: 'John', score: 85 },
  { id: 2, name: 'Mike', score: 95 },
  { id: 3, name: 'Sara', score: 88 }
];

*/

let athletes = [
  { id: 1, name: 'John', score: 85 },
  { id: 2, name: 'Mike', score: 92 },
  { id: 3, name: 'Sara', score: 88 },
];

function updateAtheleteScore(athletes) {
  for (let i = 0; i < athletes.length; i++) {
    if (athletes[i].id === 2) {
      athletes[i].score = 95;
    }
  }
  console.log(athletes);
}
updateAtheleteScore(athletes);

console.log('');
console.log('===========Exercise 10===============');
console.log('');
/*

Exercise 10

Given an array of objects where each object represents a movies with properties for id, title, and rating.

Delete the movie with id: 3 and return the updated array.

Expected Output:

[
  { id: 1, title: 'Inception', rating: 8.8 },
  { id: 2, title: 'Titanic', rating: 7.8 }
];
*/

let movies = [
  { id: 1, title: 'Inception', rating: 8.8 },
  { id: 2, title: 'Titanic', rating: 7.8 },
  { id: 3, title: 'The Room', rating: 3.7 },
];

result = movies.filter((e) => e.id !== 3);
console.log(result);

console.log('');
console.log('===========Exercise 11===============');
console.log('');
/*


Exercise 11

Given an array of objects where each object represents a cities with properties for id, name, and population.

Update the population of the city with id: 3 to 8,500,000 and return the updated array.

Expected Output:

[
  { id: 1, name: 'Los Angeles', population: 4000000 },
  { id: 2, name: 'New York', population: 8175133 },
  { id: 3, name: 'Chicago', population: 8500000 }
];

*/

let cities = [
  { id: 1, name: 'Los Angeles', population: 4000000 },
  { id: 2, name: 'New York', population: 8175133 },
  { id: 3, name: 'Chicago', population: 2695598 },
];

result = cities.map((e) => {
  if (e.id === 3) {
    e.population = 8500000;
  }
  return e;
});
console.log(result);

console.log('');
console.log('===========Exercise 12===============');
console.log('');
/*

Exercise 12

Given an array of objects where each object represents a courses with properties for id, title, and duration.

Delete the course with id: 1 and return the updated array.

Expected Output:

[
  { id: 2, title: 'Physics', duration: '4 months' },
  { id: 3, title: 'Chemistry', duration: '5 months' }
];

*/

let courses = [
  { id: 1, title: 'Mathematics', duration: '3 months' },
  { id: 2, title: 'Physics', duration: '4 months' },
  { id: 3, title: 'Chemistry', duration: '5 months' },
];

result = courses.filter((e) => e.id !== 1);
console.log(result);

console.log('');
console.log('===========Exercise 13===============');
console.log('');
/*

Exercise 13

Given an array of objects where each object represents a pets with properties for id, name, and type.

Update the type of the pet with id: 2 to 'Dog' and return the updated array.

Expected Output:

[
  { id: 1, name: 'Whiskers', type: 'Cat' },
  { id: 2, name: 'Rover', type: 'Dog' },
  { id: 3, name: 'Bella', type: 'Dog' }
];

*/

let pets = [
  { id: 1, name: 'Whiskers', type: 'Cat' },
  { id: 2, name: 'Rover', type: 'Fish' },
  { id: 3, name: 'Bella', type: 'Dog' },
];

result = pets.map((e) => {
  if (e.id === 2) {
    e.type = 'Dog';
  }
  return e;
});
console.log(result);

console.log('');
console.log('===========Exercise 14===============');
console.log('');
/*

Exercise 14

Given an array of objects where each object represents computer with properties for id, brand, and model.

Delete the computer with id: 3 and return the updated array.

Expected Output:

[
  { id: 1, brand: 'Apple', model: 'MacBook Pro' },
  { id: 2, brand: 'Dell', model: 'XPS 13' }
];


*/

let computers = [
  { id: 1, brand: 'Apple', model: 'MacBook Pro' },
  { id: 2, brand: 'Dell', model: 'XPS 13' },
  { id: 3, brand: 'HP', model: 'Spectre x360' },
];

result = computers.filter((e) => e.id !== 1);
console.log(result);

console.log('');
console.log('===========Exercise 15===============');
console.log('');
/*

Exercise 15

Given an array of objects where each object represents appliance with properties for id, name, and wattage.

Update the wattage of the appliance with id: 1 to 1200 watts and return the updated array.

Expected Output:

[
  { id: 1, name: 'Microwave', wattage: 1200 },
  { id: 2, name: 'Toaster', wattage: 800 },
  { id: 3, name: 'Blender', wattage: 500 }
];


*/

let appliances = [
  { id: 1, name: 'Microwave', wattage: 1000 },
  { id: 2, name: 'Toaster', wattage: 800 },
  { id: 3, name: 'Blender', wattage: 500 },
];

result = appliances.map((e) => {
  if (e.id === 1) {
    e.wattage = 1200;
  }
  return e;
});
console.log(result);

console.log('');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
