const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Question 1: Sort Ages in Ascending Order
Define the function sortAgesAscending that sorts an array of ages in ascending order.
Declare a GET endpoint /ages/sort-ascending to use the sortAgesAscending function.
Data: [25, 30, 18, 22, 27]
API Call: http://localhost:3000/ages/sort-ascending
*/

const ages = [25, 30, 18, 22, 27];

function sortAgesAscending(age1, age2) {
  return age1 - age2;
}

app.get('/ages/sort-ascending', (req, res) => {
  const agesCopy = ages.slice();
  const result = agesCopy.sort(sortAgesAscending);
  res.json(result);
});

/*
Question 2: Sort Ages in Descending Order
Define the function sortAgesDescending that sorts an array of ages in ascending order.
Declare a GET endpoint /ages/sort-descending to use the sortAgesDescending function.
Data: [25, 30, 18, 22, 27]
API Call: http://localhost:3000/ages/sort-descending
*/

function sortAgesDescending(num1, num2) {
  return num2 - num1;
}

app.get('/ages/sort-descending', (req, res) => {
  const agesCopy = ages.slice();
  const result = agesCopy.sort(sortAgesDescending);
  res.json(result);
});

/* Question 3: Sort Students by Marks in Descending Order
Define the function sortStudentsByMarksDescending that sorts an array of students by marks in descending order.
Declare a GET endpoint /students/sort-by-marks-descending to use the sortStudentsByMarksDescending function.
API Call: http://localhost:3000/students/sort-by-marks-descending
*/

function sortStudentsByMarksDescending(studentData1, studentData2) {
  return studentData2.marks - studentData1.marks;
}

const studentsData = [
  { name: 'Student 1', rollNumber: 101, marks: 85 },
  { name: 'Student 2', rollNumber: 102, marks: 70 },
  { name: 'Student 3', rollNumber: 103, marks: 95 },
  { name: 'Student 4', rollNumber: 104, marks: 80 },
];

app.get('/students/sort-by-marks-descending', (req, res) => {
  const studentsDataCopy = studentsData.slice();
  const result = studentsDataCopy.sort(sortStudentsByMarksDescending);
  res.json(result);
});

/* 
Question 4: Sort Cars by Mileage in Descending Order
Define the function sortCarsByMileageDescending that sorts an array of cars by mileage in descending order.
Declare a GET endpoint /cars/sort-by-mileage-descending to use the sortCarsByMileageDescending function.
API Call: http://localhost:3000/cars/sort-by-mileage-descending
*/

const cars = [
  { make: 'maruti', model: 'swift', mileage: 15 },
  { make: 'hyundai', model: 'I20', mileage: 18 },
  { make: 'tata', model: 'Nexon', mileage: 20 },
];

function sortCarsByMileageDescending(carData1, carData2) {
  return carData2.mileage - carData1.mileage;
}

app.get('/cars/sort-by-mileage-descending', (req, res) => {
  const carsCopy = cars.slice();
  const result = carsCopy.sort(sortCarsByMileageDescending);
  res.json(result);
});

//-----------------------------------HW1------------------------------------------




/*
Question 1:
Write an Express code snippet to sort an array of heights in ascending order.
Instructions:
Define an endpoint /heights/sort-ascending using the get method.
Implement a function sortHeightsAscending that sorts heights in ascending order.
Inside the endpoint, create a copy of the heights array and sort it using the sortHeightsAscending function.
Send the sorted heights as a JSON response.
Given Data: [160, 175, 180, 165, 170]
API Call: <http://localhost:3000/heights/sort-ascending>
Expected Output: [160, 165, 170, 175, 180]
*/

const heights = [160, 175, 180, 165, 170];

function sortHeightsAscending(height1, height2) {
  return height1 - height2;
}

app.get('/heights/sort-ascending', (req, res) => {
  const heightCopy = heights.slice();
  heightCopy.sort(sortHeightsAscending);
  res.json(heightCopy);
});

/*
Question 2:
Write an Express code snippet to sort an array of heights in descending order.
Instructions:
Define an endpoint /heights/sort-descending using the get method.
Implement a function sortHeightsDescending that sorts heights in descending order.
Inside the endpoint, create a copy of the heights array and sort it using the sortHeightsDescending function.
Send the sorted heights as a JSON response.
Given Data: [160, 175, 180, 165, 170]
API Call: <http://localhost:3000/heights/sort-descending>
Expected Output: [180, 175, 170, 165, 160]
*/

function sortHeightsDescending(height1, height2) {
  return height2 - height1;
}

app.get('/heights/sort-descending', (req, res) => {
  const heightCopy = heights.slice();
  heightCopy.sort(sortHeightsDescending);
  res.json(heightCopy);
});

/*
Question 3:
Write an Express code snippet to sort an array of employees by salary in descending order.
Instructions:
Define an endpoint /employees/sort-by-salary-descending using the get method.
Implement a function sortEmployeesBySalaryDescending that sorts employees by salary in descending order.
Inside the endpoint, create a copy of the employees array and sort it using the sortEmployeesBySalaryDescending function.
Send the sorted employees as a JSON response.
API Call: <http://localhost:3000/employees/sort-by-salary-descending>
*/

const employees1 = [
  { name: 'Shoaib', employeeId: 101, salary: 60000 },
  { name: 'Abel', employeeId: 102, salary: 55000 },
  { name: 'Jack', employeeId: 103, salary: 120000 },
];

function sortEmployeesBySalaryDescending(employee1, employee2) {
  return employee2.salary - employee1.salary;
}

app.get('/employees/sort-by-salary-descending', (req, res) => {
  const employeesCopy = employees1.slice();
  employeesCopy.sort(sortEmployeesBySalaryDescending);
  res.json(employeesCopy);
});

/*
Question 4:
Write an Express code snippet to sort an array of books by pages in ascending order.
Instructions:
Define an endpoint /books/sort-by-pages-ascending using the get method.
Implement a function sortBooksByPagesAscending that sorts books by pages in ascending order.
Inside the endpoint, create a copy of the books array and sort it using the sortBooksByPagesAscending function.
Send the sorted books as a JSON response.
API Call: <http://localhost:3000/books/sort-by-pages-ascending>
*/

const books1 = [
  { title: 'The white Tiger', authoe: 'Aravind Adiga', pages: 200 },
  { title: 'The place of Illusion', authoe: 'Chitra banerjee', pages: 400 },
  { title: 'Intelligent Investor', authoe: 'Robert', pages: 350 },
];

function sortBooksByPagesAscending(book1, book2) {
  return book1.pages - book2.pages;
}

app.get('/books/sort-by-pages-ascending', (req, res) => {
  const bookCopy = books1.slice();
  bookCopy.sort(sortBooksByPagesAscending);
  res.json(bookCopy);
});

//-----------------------------------------HW2--------------------------------------------


/*
Exercise 1: Sort Books by Year in ascending order
Define the function sortBooksByYear to sort books by their year in ascending order.
Declare a GET endpoint /books/sort-by-year to use the sortBooksByYear function.
Sample Endpoint: http://localhost:3000/books/sort-by-year
*/

const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publication_year: 1966,
    },
    {
      title: 'The Great Gatsby',
      author: 'F.ScottFitzgerald',
      publication_year: 1925,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publication_year: 1813,
    },
  ];
  
  function sortBooksByYear(book1, book2) {
    return book1.publication_year - book2.publication_year;
  }
  
  app.get('/books/sort-by-year', (req, res) => {
    const bookCopy = books.slice();
    bookCopy.sort(sortBooksByYear);
    res.json(bookCopy);
  });
  
  /*
  Exercise 2: Sort Employees by Salary in Descending Order
  Define the function sortEmployeesBySalary to sort employees by their salaries in descending order.
  Declare a GET endpoint /employees/sort-by-salary to use the sortEmployeesBySalary function.
  Sample Endpoint: http://localhost:3000/employees/sort-by-salary
  */
  
  const employees = [
    { name: 'Jack', salary: 50000 },
    { name: 'Smith', salary: 60000 },
    { name: 'Andrew', salary: 55000 },
  ];
  
  function sortEmployeesBySalary(emplyoee1, employee2) {
    return employee2.salary - emplyoee1.salary;
  }
  
  app.get('/employees/sort-by-salary', (req, res) => {
    const employeesCopy = employees.slice();
    employeesCopy.sort(sortEmployeesBySalary);
    res.json(employeesCopy);
  });
  
  /*
  Exercise 3: Sort Products by Price in Ascending Order
  Define the function sortProductsByPrice to sort products by their price in ascending order.
  Declare a GET endpoint /products/sort-by-price to use the sortProductsByPrice function.
  Sample Endpoint: http://localhost:3000/products/sort-by-price
  */
  
  const products = [
    { name: 'Product A', price: 20 },
    { name: 'Product A', price: 30 },
    { name: 'Product A', price: 10 },
  ];
  
  function sortProductsByPrice(product1, product2) {
    return product1.price - product2.price;
  }
  
  app.get('/products/sort-by-price', (req, res) => {
    const productCopy = products.slice();
    productCopy.sort(sortProductsByPrice);
    res.json(productCopy);
  });
  
  /* 
  Exercise 4: Sort Movies by Rating in Descending Order
  Define the function sortMoviesByRating to sort movies by their rating in descending order.
  Declare a GET endpoint /movies/sort-by-rating to use the sortMoviesByRating function.
  Sample Endpoint: http://localhost:3000/movies/sort-by-rating
  */
  
  const movies = [
    { title: 'Movie A', rating: 6 },
    { title: 'Movie B', rating: 9 },
    { title: 'Movie C', rating: 7 },
  ];
  
  function sortMoviesByRating(movie1, movie2) {
    return movie2.rating - movie1.rating;
  }
  
  app.get('/movies/sort-by-rating', (req, res) => {
    const moviesCopy = movies.slice();
    moviesCopy.sort(sortMoviesByRating);
    res.json(moviesCopy);
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
