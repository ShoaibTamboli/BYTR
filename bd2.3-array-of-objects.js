const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Question 1: Filter Products by Category
Define the function filterByCategory to return only the products in a specific category from an array of products.
Declare a GET endpoint /products/category/:category to use the filterByCategory function.
Declare a variable category to take the input from query parameters
*/

const products1 = [
  { name: 'laptop', price: 50000, category: 'Electronics' },
  { name: 'Mobile', price: 20000, category: 'Electronics' },
  { name: 'shirt', price: 1500, category: 'Apparel' },
  { name: 'Mixer Grinder', price: 4000, category: 'Home Appliances' },
];

function filterByCategory(product, category) {
  if (product.category === category) {
    return product;
  }
}
app.get('/products/category/:category', (req, res) => {
  const category = req.params.category;
  const result = products1.filter((prod) => filterByCategory(prod, category));
  res.json(result);
});

/*
Question 2: Filter Cars by Mileage
Define the function filterByMileage to return only the cars with mileage less than a specified value from an array of cars.
Declare a GET endpoint /cars/mileage/:maxMileage to use the filterByMileage function.
Declare a variable maxMileage to take the input from query parameters
*/
function filterByMileage(carObj, maxMileage) {
  return carObj.mileage < maxMileage;
}
const cars = [
  { make: 'Maruti', model: 'Swift', mileage: 15000 },
  { make: 'Honda', model: 'City', mileage: 9000 },
  { make: 'Mahindra', model: 'Xuv', mileage: 11000 },
];

app.get('/cars/mileage/:maxMileage', (req, res) => {
  const maxMileage = req.params.maxMileage;
  const result = cars.filter((carObj) => filterByMileage(carObj, maxMileage));
  res.json(result);
});

/* 
Question 3: Filter Movies by Rating
Define the function filterByRating to return only the movies with a rating higher than a specified value from an array of movies.
Declare a GET endpoint /movies/rating/:minRating to use the filterByRating function.
Declare a variable minRating to take the input from query parameters
*/

const movies1 = [
  { title: '3 Idiots', genre: 'Comedy', rating: 9 },
  { title: 'Dangal', genre: 'Drama', rating: 10 },
  { title: 'Bahubali', genre: 'action', rating: 8 },
];

function filterByRating(movieObj, minRating) {
  return movieObj.rating > minRating;
}

app.get('/movies/rating/:minRating', (req, res) => {
  const minRating = req.params.minRating;
  const result = movies1.filter((movieObj) =>
    filterByRating(movieObj, minRating)
  );
  res.json(result);
});

/* 
Question 4: Filter Orders by Status
Define the function filterByStatus to return only the orders with a specific status from an array of orders.
Declare a GET endpoint /orders/status/:status to use the filterByStatus function.
Declare a variable status to take the input from query parameters
*/

const orders = [
  { orderId: 1, customerName: 'Shoaib', status: 'shipped' },
  { orderId: 2, customerName: 'Abel', status: 'pending' },
  { orderId: 3, customerName: 'Alvaro', status: 'shipped' },
  { orderId: 4, customerName: 'Rebecca', status: 'pending' },
];

function filterByStatus(elem, status) {
  return elem.status === status;
}

app.get('/orders/status/:status', (req, res) => {
  const status = req.params.status;
  const result = orders.filter((elem) => filterByStatus(elem, status));
  res.json(result);
});

//----------------------------------------HW1------------------------------------------------------


/*
Question 1:
Write an Express code snippet to filter employees by department.
Instructions:
Define an endpoint /employees/department/:department using the get method.
Implement a function filterByDepartment that returns true if the employee belongs to the specified department.
Inside the endpoint, extract the department parameter from the request and use it to filter the employees.
Send the filtered employees as a JSON response.
*/

const empData = [
    { name: 'Rahul Gupta', dept: 'HR', salary: '50000' },
    { name: 'Shoaib Tamboli', dept: 'SE3', salary: '1500000' },
    { name: 'Sohel', dept: 'Finance', salary: '80000' },
  ];
  
  function filterByDepartment(e, department) {
    return e.dept.toLowerCase() === department;
  }
  
  app.get('/employees/department/:department', (req, res) => {
    const department = req.params.department.toLowerCase();
    const result = empData.filter((e) => filterByDepartment(e, department));
    res.json(result);
  });
  
  /*
  Question 2:
  Write an Express code snippet to filter bikes by mileage greater than a specified value.
  Instructions:
  Define an endpoint /bikes/mileage/:minMileage using the get method.
  Implement a function filterByMileage that returns true if the bike's mileage is greater than the specified value.
  Inside the endpoint, parse the minMileage parameter from the request and use it to filter the bikes.
  Send the filtered bikes as a JSON response.
  */
  
  const bikes = [
    { make: 'Hero', model: 'splendor', mileage: '80' },
    { make: 'Bajaj', model: 'Pulsar', mileage: '60' },
    { make: 'TVS', model: 'Apache', mileage: '70' },
  ];
  
  function filterByMileage(bikeObject, minMileage) {
    return bikeObject.mileage > minMileage;
  }
  
  app.get('/bikes/mileage/:department', (req, res) => {
    const minMileage = req.params.department;
    const result = bikes.filter((e) => filterByMileage(e, minMileage));
    res.json(result);
  });
  
  /*
  Question 3:
  Write an Express code snippet to filter bikes by a specific make.
  Instructions:
  Define an endpoint /bikes/make/:make using the get method.
  Implement a function filterByMake that returns true if the bike's make matches the specified value.
  Inside the endpoint, extract the make parameter from the request and use it to filter the bikes.
  Send the filtered bikes as a JSON response.
  */
  
  function filterByMake(bikeObj, make) {
    return bikeObj.make.toLowerCase() === make.toLowerCase();
  }
  
  app.get('/bikes/make/:make', (req, res) => {
    const make = req.params.make;
    const result = bikes.filter((e) => filterByMake(e, make));
    res.json(result);
  });
  
  /*
  Question 4:
  Write an Express code snippet to filter songs by rating higher than a specified value.
  Instructions:
  Define an endpoint /songs/rating/:minRating using the get method.
  Implement a function filterByRating that returns true if the song's rating is higher than the specified value.
  Inside the endpoint, parse the minRating parameter from the request and use it to filter the songs.
  Send the filtered songs as a JSON response.
  */
  
  const songs = [
    { titile: 'Tum se hi', genre: 'romantic', rating: 4 },
    { titile: 'Senorita', genre: 'pop', rating: 3 },
    { titile: 'Dil chahta hai', genre: 'Bollywood', rating: 5 },
  ];
  
  function filterByRating(songObj, minRating) {
    return songObj.rating > minRating;
  }
  
  app.get('/songs/rating/:minRating', (req, res) => {
    const minRating = parseInt(req.params.minRating);
    const result = songs.filter((songObj) => filterByRating(songObj, minRating));
    res.json(result);
  });
  
  /* 
  Question 5:
  Write an Express code snippet to filter songs by a specific genre.
  Instructions:
  Define an endpoint /songs/genre/:genre using the get method.
  Implement a function filterByGenre that returns true if the song's genre matches the specified value.
  Inside the endpoint, extract the genre parameter from the request and use it to filter the songs.
  Send the filtered songs as a JSON response.
  */
  
  function filterByGenre(musicObj, genre) {
    return musicObj.genre.toLowerCase() === genre.toLowerCase();
  }
  
  app.get('/songs/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const result = songs.filter((e) => filterByGenre(e, genre));
    res.json(result);
  });
  
  /*
  Question 6:
  Write an Express code snippet to filter tasks by a specific status.
  Instructions:
  Define an endpoint /tasks/status/:status using the get method.
  Implement a function filterByStatus that returns true if the task's status matches the specified value.
  Inside the endpoint, extract the status parameter from the request and use it to filter the tasks.
  Send the filtered tasks as a JSON response.
  */
  
  const tasks = [
    { taskId: 1, taskName: 'Prepare Presentation', status: 'Pending' },
    { taskId: 2, taskName: 'Submit Report', status: 'In-Progress' },
    { taskId: 3, taskName: 'Attend Meeting', status: 'Completed' },
  ];
  
  function filterByStatus(taskObj, status) {
    return taskObj.status.toLowerCase() === status.toLowerCase();
  }
  
  app.get('/tasks/status/:status', (req, res) => {
    const status = req.params.status;
    const result = tasks.filter((e) => filterByStatus(e, status));
    res.json(result);
  });
  


//----------------------------------------HW2------------------------------------------------------


/*
Exercise 1: Filter In-Stock Products
Define the function filterInStockProducts to return only the in-stock products.
Declare a GET endpoint /in-stock-products to use the filterInStockProducts function.
*/

const products = [
    { name: 'product A', inStock: true },
    { name: 'product B', inStock: false },
    { name: 'product C', inStock: true },
    { name: 'product D', inStock: false },
  ];
  
  function filterInStockProducts(product) {
    return product.inStock;
  }
  
  app.get('/in-stock-products', (req, res) => {
    const result = products.filter((e) => filterInStockProducts(e));
    res.json(result);
  });
  
  /*
  Exercise 2: Filter Adults from User List
  Define the function filterAdults to return only users who are 18 years old or older.
  Declare a GET endpoint /adult-users to use the filterAdults function.
  */
  
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Abel', age: 30 },
    { name: 'Jack', age: 15 },
    { name: 'Abraham', age: 17 },
  ];
  
  function filterAdults(user) {
    return user.age >= 18;
  }
  
  app.get('/adult-users', (req, res) => {
    const result = users.filter((user) => filterAdults(user));
    res.json(result);
  });
  
  /*
  Exercise 3: Filter Expensive Products
  Define the function filterExpensiveProducts to return only the products that cost more than a specified price (read from query).
  Declare a GET endpoint /expensive-products to use the filterExpensiveProducts function.
  Given Data:
  Sample Endpoint: http://localhost:3000/expensive-products?price=100
  */
  
  const productPrices = [
    { name: 'Product A', price: 50 },
    { name: 'Product B', price: 150 },
    { name: 'Product C', price: 200 },
    { name: 'Product D', price: 90 },
  ];
  
  function filterExpensiveProducts(product, reqPrice) {
    console.log(product);
    return product.price > reqPrice;
  }
  
  app.get('/expensive-products', (req, res) => {
    const price = parseFloat(req.query.price);
    const result = productPrices.filter((product) =>
      filterExpensiveProducts(product, price)
    );
    console.log(result, 'safdsgsg');
    res.json(result);
  });
  
  /* 
  Exercise 4: Filter Articles by Word Count
  Define the function filterLongArticles to return only the articles with a word count greater than a specified number (read from query).
  Declare a GET endpoint /long-articles to use the filterLongArticles function.
  Sample Endpoint: http://localhost:3000/long-articles?minWords=500
  */
  
  const articles = [
    { titile: 'Article A', wordCount: 400 },
    { titile: 'Article B', wordCount: 600 },
    { titile: 'Article C', wordCount: 700 },
    { titile: 'Article D', wordCount: 300 },
  ];
  
  function filterLongArticles(article, minWords) {
    return article.wordCount > minWords;
  }
  
  app.get('/long-articles', (req, res) => {
    const minWords = parseFloat(req.query.minWords);
    const result = articles.filter((data) => filterLongArticles(data, minWords));
    res.json(result);
  });
  
  /*
  Exercise 5: Filter Movies by Rating
  Define the function filterHighRatedMovies to return only the movies with a rating higher than a specified rating (read from query).
  Declare a GET endpoint /high-rated-movies to use the filterHighRatedMovies function.
  Sample Endpoint: http://localhost:3000/high-rated-movies?rating=8
  */
  
  const movies = [
    { title: 'Movie A', rating: 8.5 },
    { title: 'Movie B', rating: 6.5 },
    { title: 'Movie C', rating: 7.5 },
    { title: 'Movie D', rating: 8.0 },
  ];
  
  function filterHighRatedMovies(movie, ratings) {
    return movie.rating > ratings;
  }
  
  app.get('/high-rated-movies', (req, res) => {
    const ratings = parseFloat(req.query.rating);
    const result = movies.filter((e) => filterHighRatedMovies(e, ratings));
    res.json(result);
  });
  
  /* 
  Exercise 6: Filter Employees by Experience
  Define the function filterExperiencedEmployees to return only the employees with experience greater than a specified number of years (read from query).
  Declare a GET endpoint /experienced-employees to use the filterExperiencedEmployees function.
  Sample Endpoint: http://localhost:3000/experienced-employees?years=5
  */
  
  const employees = [
    { name: 'Employee A', experience: 5 },
    { name: 'Employee B', experience: 1 },
    { name: 'Employee C', experience: 4 },
    { name: 'Employee D', experience: 9 },
  ];
  
  function filterExperiencedEmployees(emp, experience) {
    return emp.experience > experience;
  }
  
  app.get('/experienced-employees', (req, res) => {
    const years = parseInt(req.query.years);
    const result = employees.filter((e) => filterExperiencedEmployees(e, years));
    res.json(result);
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
