const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Question 1: Return Only the Even Numbers
Define the function filterEvenNumbers to return only the even numbers from an array.
Declare a GET endpoint /even-numbers to use the filterEvenNumbers function.
Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
API Call: http://localhost:3000/even-numbers
Expected Output: [2, 4, 6, 8, 10]
*/
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(num) {
  return num % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  const evenNumbers = numbers1.filter((elem) => filterEvenNumbers(elem));
  console.log(evenNumbers, typeof evenNumbers);
  res.json(evenNumbers);
});

/*
Question 2: Return Only the Ages Greater Than 18
Define the function filterAges to return only the ages greater than 18 from an array.
Declare a GET endpoint /adult-ages to use the filterAges function.
Given Data: [10, 20, 30, 15, 17, 25]
API Call: http://localhost:3000/adult-ages
Expected Output: [ 20, 30, 25 ]
*/

const ages = [10, 20, 30, 15, 17, 25];

function filterAges(elem) {
  return elem > 18;
}

app.get('/adult-ages', (req, res) => {
  const filteredAges = ages.filter(filterAges);
  res.json(filteredAges);
});

/*
Question 3: Return Only the Words Longer Than 5 Characters
Define the function filterLongWords to return only the words longer than 5 characters from an array of words.
Declare a GET endpoint /long-words to use the filterLongWords function.
Given Data: ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
API Call: http://localhost:3000/long-words
Expected Output: ['banana', 'cherry']
*/

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterLongWords(elem) {
  return elem.length > 5;
}

app.get('/long-words', (req, res) => {
  const longWords = words.filter(filterLongWords);
  res.json(longWords);
});

/*
Question 4: Return Only the Files Smaller Than a Certain Size
Define the function filterSmallFiles to return only the files smaller than a certain size from an array of file sizes
Declare a GET endpoint /small-files to use the filterSmallFiles function.
Declare a variable named filterParam to take the input from query parameters.
The size filter parameter should be read from the query string.
Given Data: [50, 200, 75, 120, 30, 90, 150]
API Call: http://localhost:3000/small-files?filterParam=100
Expected Output: [50, 75, 30, 90]
*/
const fileSizes = [50, 200, 75, 120, 30, 90, 150];
function filterSmallFiles(elem, filterParam) {
  return elem < filterParam;
}

app.get('/small-files', (req, res) => {
  const filterParam = parseFloat(req.query.filterParam);
  const result = fileSizes.filter((elem) =>
    filterSmallFiles(elem, filterParam)
  );
  res.json(result);
});

//----------------------------------HW1-------------------------------------


/* 
Question 1:
Write an Express code snippet to filter temperatures above 25 degrees Celsius.
Define an endpoint /high-temperatures using the get method.
Implement a function filterHighTemperatures that returns true if the temperature is above 25 degrees Celsius.
Inside the endpoint, use the filter method to filter temperatures above 25 degrees Celsius.
Send the filtered temperatures as a JSON response.
Given Data: [22, 26, 19, 30, 23, 28, 17, 31]
API Call: <http://localhost:3000/high-temperatures>
Expected Output: [26, 30, 28, 31]
*/

function filterHighTemperatures(elem) {
  return elem > 25;
}

const tempratures = [22, 26, 19, 30, 23, 28, 17, 31];
app.get('/high-temperatures', (req, res) => {
  const highTemperature = tempratures.filter(filterHighTemperatures);
  res.json(highTemperature);
});

/*  
Question 2:
Write an Express code snippet to filter prices less than or equal to 100 rupees.
Instructions:
Define an endpoint /low-prices using the get method.
Implement a function filterLowPrices that returns true if the price is less than or equal to 100.
Inside the endpoint, use the filter method to filter prices less than or equal to 100.
Send the filtered prices as a JSON response.
Given Data: [80, 120, 95, 150, 60, 110]
API Call: <http://localhost:3000/low-prices>
Expected Output: [80, 95, 60]
*/
const prices = [80, 120, 95, 150, 60, 110];

function filterLowPrices(elem) {
  return elem <= 100;
}

app.get('/low-prices', (req, res) => {
  const lowPrice = prices.filter((e) => filterLowPrices(e));
  res.json(lowPrice);
});

/*
Question 3:
Write an Express code snippet to filter product ratings greater than 3.5.
Instructions:
Define an endpoint /high-ratings using the get method.
Implement a function filterHighRatings that returns true if the rating is greater than 3.5.
Inside the endpoint, use the filter method to filter product ratings greater than 3.5.
Send the filtered ratings as a JSON response.
Given Data: [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6]
API Call:<http://localhost:3000/high-ratings>
Expected Output: [4.2, 3.8, 4.7, 4.9, 3.6]
*/
const ratings = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];

function filterHighRatings(elem) {
  return elem > 3.5;
}
app.get('/high-ratings', (req, res) => {
  const highRating = ratings.filter((ele) => filterHighRatings(ele));
  res.json(highRating);
});

/*
Question 4:
Write an Express code snippet to filter Indian names longer than 6 characters.
Instructions:
Define an endpoint /long-indian-names using the get method.
Implement a function filterLongIndianNames that returns true if the name length is greater than 6 characters.
Inside the endpoint, use the filter method to filter Indian names longer than 6 characters.
Send the filtered names as a JSON response.
Given Data: ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita']
API Call: <http://localhost:3000/long-indian-names>
Expected Output: ['Priyanka', “Anushka“]
*/
const names = ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita'];

function filterLongIndianNames(elem) {
  return elem.length > 6;
}

app.get('/long-indian-names', (req, res) => {
  const filteredNames = names.filter((ele) => filterLongIndianNames(ele));
  res.json(filteredNames);
});

/* 
Question 5:
Write an Express code snippet to filter products cheaper than a certain price.
Instructions:
Define an endpoint /cheaper-products using the get method.
Implement a function filterCheaperProducts that takes a query parameter filterParam and returns true if the product price is less than the provided parameter.
Inside the endpoint, extract the query parameter filterParam and use it to filter products cheaper than that price.
Send the filtered products as a JSON response.
Given Data: [10, 25, 50, 75, 100, 150, 200]
API Call: http://localhost:3000/cheaper-products?filterParam=100
Expected Output: [10, 25, 50, 75]
*/
const products = [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts(elem, filterParam) {
  return elem < filterParam;
}

app.get('/cheaper-products', (req, res) => {
  const filterParam = parseFloat(req.query.filterParam);
  const filterProducts = products.filter((e) =>
    filterCheaperProducts(e, filterParam)
  );
  res.json(filterProducts);
});

//--------------------------------HW2------------------------------------------


/* 
Exercise 1: Filter Prime Numbers
Define the function filterPrimeNumbers to return only the prime numbers from an array.
Declare a GET endpoint /prime-numbers to use the filterPrimeNumbers function.
Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
Sample Endpoint: http://localhost:3000/prime-numbers
Expected Output: [2, 3, 5, 7, 11]
*/

const numbers = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterPrimeNumbers(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

app.get('/prime-numbers', (req, res) => {
  const primeNumber = numbers.filter((e) => filterPrimeNumbers(e));
  res.json(primeNumber);
});

/*
Exercise 2: Filter Positive Numbers
Define the function filterPositiveNumbers to return only the positive numbers from an array.
Declare a GET endpoint /positive-numbers to use the filterPositiveNumbers function.
Given Data: [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
Sample Endpoint: http://localhost:3000/positive-numbers
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function filterPositiveNumbers(num) {
  return num > 0;
}

app.get('/positive-numbers', (req, res) => {
  const positiveNumbers = numbers.filter(filterPositiveNumbers);
  res.json(positiveNumbers);
});

/* 
Exercise 3: Filter Negative Numbers
Define the function filterNegativeNumbers to return only the negative numbers from an array.
Declare a GET endpoint /negative-numbers to use the filterNegativeNumbers function.
Given Data: [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
Sample Endpoint: http://localhost:3000/negative-numbers
Expected Output: [-10, -5]
*/

function filterNegativeNumbers(num) {
  return num < 0;
}

app.get('/negative-numbers', (req, res) => {
  const negativeNumbers = numbers.filter((elem) => filterNegativeNumbers(elem));
  res.json(negativeNumbers);
});

/* 
Exercise 4: Filter Odd Numbers
Define the function filterOddNumbers to return only the odd numbers from an array.
Declare a GET endpoint /odd-numbers to use the filterOddNumbers function.
Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
Sample Endpoint: http://localhost:3000/odd-numbers
Expected Output: [1, 3, 5, 7, 9]
*/

function filterOddNumbers(num) {
  return num % 2 !== 0;
}

app.get('/odd-numbers', (req, res) => {
  const oddNumber = numbers.filter((num) => filterOddNumbers(num));
  res.json(oddNumber);
});

/* 
Exercise 5: Filter Numbers Greater Than a Given Value
Define the function filterNumbersGreaterThan to return only the numbers greater than a specified value (read from query).
Declare a GET endpoint /numbers-greater-than to use the filterNumbersGreaterThan function.
Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
Sample Endpoint: http://localhost:3000/numbers-greater-than?value=5
Expected Output: [6, 7, 8, 9, 10]
*/
function filterNumbersGreaterThan(num, value) {
  return num > value;
}
app.get('/numbers-greater-than', (req, res) => {
  const value = parseInt(req.query.value);
  const result = numbers.filter((ele) => filterNumbersGreaterThan(ele, value));
  res.json(result);
});

/*
Exercise 6: Filter Numbers Less Than a Given Value
Define the function filterNumbersLessThan to return only the numbers less than a specified value (read from query).
Declare a GET endpoint /numbers-less-than to use the filterNumbersLessThan function.
Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
Sample Endpoint: http://localhost:3000/numbers-less-than?value=5
Expected Output: [1, 2, 3, 4]
*/

function filterNumbersLessThan(num, value) {
  return num < value;
}

app.get('/numbers-less-than', (req, res) => {
  const value = parseInt(req.query.value);
  const result = numbers.filter((e) => filterNumbersLessThan(e, value));
  res.json(result);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
