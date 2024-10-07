const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

const numbersArray = [1, 2, 3, 4, 5];
const strings = ['hello', 'world', 'javascript', 'node'];

/* 
Question 1: Add a Number to an Array of Numbers
Create an endpoint /numbers/add that adds a number to an array of numbers using array.push() and returns the updated array.
Define a function addNumber to push new number into the existing array.
API Call:

<http://localhost:3000/numbers/add

Expected Output:
[1, 2, 3, 4, 5, 6]
*/

function addNumber(numbersArray, num) {
  numbersArray.push(num);
  return numbersArray;
}

app.get('/numbers/add', (req, res) => {
  const result = addNumber(numbersArray, 10);
  res.json(result);
});

/* 
Question 2: Add a String to an Array of Strings
Create an endpoint /strings/add that adds a string to an array of strings using array.push() and returns the updated array.
Define a function addString to push a new string into the existing array
API Call: <http://localhost:3000/strings/add
Expected Output: ['hello', 'world', 'javascript', 'node', 'expressJS']
*/

function addString(strings, str) {
  strings.push(str);
  return strings;
}

app.get('/strings/add', (req, res) => {
  const result = addString(strings, 'expressJS');
  res.json(result);
});

/* 
Question 3 : Sum an Array of Numbers Using for Loop
Create an endpoint /numbers/sum that sums an array of numbers using a for loop and returns the sum.
Define a function sumNumbers to calculate the sum of all the numbers in the array
API Call:<http://localhost:3000/numbers/sum>
Expected Output: { 'sum': 15 }
*/

function sumNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  const result = sumNumbers(numbersArray);
  res.json({ sum: result });
});

/*
Question 4 : Find the Maximum Number in an Array
Question Text:
Create an endpoint /numbers/max that finds the maximum number in an array using a for loop and returns the maximum number.
Define a function findMax to find the greatest number in the given array
API Call: <http://localhost:3000/numbers/max>
Expected Output: {  'max': 5 }
*/

let numbersArr = [1, 3, 5, 9, 11, 9, 0, 4];

function findMax(numbersArr) {
  let max = numbersArr[0];

  for (let i = 1; i < numbersArr.length; i++) {
    if (numbersArr[i] > max) {
      max = numbersArr[i];
    }
  }
  return max;
}

app.get('/numbers/max', (req, res) => {
  const result = findMax(numbersArr);
  res.json({ max: result });
});

//--------------------------------------HW1---------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
// const strings = ['hello', 'world', 'javascript', 'node'];

/* 
Exercise 1: Multiply All Numbers in an Array
Create an endpoint /numbers/multiply that accepts a number from the request parameters.
Define the variable name for the number as multiplier.
Write a function multiplyNumber to multiply all elements in an array by the given number.
Respond with the updated array
API Call: <http://localhost:3000/numbers/multiply?multiplier=2>
Expected Output: {   'result': [2, 4, 6, 8, 10] }
*/

function multiplyNumber(numbers, multiplier) {
  let multiplierNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    multiplierNumbers.push(numbers[i] * multiplier);
  }
  return multiplierNumbers;
}

app.get('/numbers/multiply', (req, res) => {
  const multiplier = Number(req.query.multiplier);
  const result = multiplyNumber(numbers, multiplier);
  res.json({ result });
});

/* 
Exercise 2: Concatenate Strings
Create an endpoint /strings/concat that accepts a string from the request parameters.
Define the variable name for the string as suffix.
Write a function concatStrings to concatenate the given string to all elements in an array.
Respond with the updated array.
API Call: <http://localhost:3000/strings/concat?suffix=!
Expected Output: {  'result': ['hello!', 'world!', 'javascript!', 'node!'] }
*/

function concatStrings(strings, suffix) {
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(strings[i] + suffix);
  }
  return result;
}

app.get('/strings/concat', (req, res) => {
  const suffix = req.query.suffix;
  const result = concatStrings(strings, suffix);
  res.json({ result });
});

/*
Exercise 3: Remove All Odd Numbers from an Array
Create an endpoint /numbers/remove-odds that removes all odd numbers from the array.
Define the function removeOddNumbers to filter out odd numbers.
Respond with the updated array.
API Call: <http://localhost:3000/numbers/remove-odds>
Expected Output: {  'result': [2, 4] }
*/

function removeOddNumbers(numbers) {
  // return numbers.filter((e) => e % 2 === 0); -- ByFilter
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

app.get('/numbers/remove-odds', (req, res) => {
  const result = removeOddNumbers(numbers);
  res.json({ result });
});

/* 
Exercise 4: Join All Strings in an Array
Create an endpoint /strings/join that join all strings in the array.
Define the function joinStrings to join each string in the array.
Respond with the updated array.
API Call: <http://localhost:3000/strings/join>
Expected Output: {   'result': 'hello world javascript node' }
*/

function joinStrings(strings) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result = result + ' ' + strings[i];
  }
  return result;
}

app.get('/strings/join', (req, res) => {
  const result = joinStrings(strings);
  res.json({ result });
});

/* 
Exercise 5: Double All Numbers in an Array
Create an endpoint /numbers/double that doubles all numbers in the array.
Define the function doubleNumbers to double each number in the array.
Respond with the updated array.
API Call: <http://localhost:3000/numbers/double>
Expected Output: {	result: [2, 4, 6, 8, 10] }
*/

function doubleNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}

app.get('/numbers/double', (req, res) => {
  const result = doubleNumbers(numbers);
  res.json({ result });
});


//--------------------------------------HW2---------------------------------------------------


const cartItems = [
    { item: 'Book', price: 30 },
    { item: 'Pen', price: 5 },
    { item: 'Notebook', price: 50 },
    { item: 'Bag', price: 125 },
  ];
  
  const students = [
    { name: 'John', grade: 'A' },
    { name: 'Jane', grade: 'A' },
    { name: 'Jack', grade: 'B' },
    { name: 'Jill', grade: 'C' },
  ];
  
  const temperatures = [0, 20, 30, 100];
  
  const student_scores = [
    { name: 'John', score: 85 },
    { name: 'Jane', score: 90 },
    { name: 'Jack', score: 70 },
    { name: 'Jill', score: 60 },
  ];
  
  const sentence = 'The quick brown fox jumps over the lazy dog';
  
  /* 
  Exercise 1: Calculate Total Price of Items in a Cart
  Create an endpoint /cart/total that calculates the total price of items in the cart.
  Define the function calculateTotalPrice to sum up the prices of all items.
  Respond with the total price.
  API Call: <http://localhost:3000/cart/total>
  Expected Output: {  'totalPrice': 210 }
  */
  
  function calculateTotalPrice(cartItems) {
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalAmount = totalAmount + cartItems[i].price;
    }
    return totalAmount;
  }
  
  app.get('/cart/total', (req, res) => {
    const result = calculateTotalPrice(cartItems);
    res.json({ totalPrice: result });
  });
  
  /*  
  Exercise 2: Filter Students by Grade
  Create an endpoint /students/filter that accepts a grade from request query.
  Define the variable name for the grade as grade.
  Write a function filterStudentsByGrade to filter students by the given grade.
  Respond with the filtered list of students.
  API Call: <http://localhost:3000/students/filter?grade=A>
  Expected Output: 
  {
    'students': [
      { 'name': 'John', 'grade': 'A' },
      { 'name': 'Jane', 'grade': 'A' }
    ]
  }
  */
  
  function filterStudentsByGrade(students, grade) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].grade.toLowerCase() === grade.toLowerCase()) {
        result.push(students[i]);
      }
    }
    return result;
  }
  
  app.get('/students/filter', (req, res) => {
    const grade = req.query.grade;
    const result = filterStudentsByGrade(students, grade);
    res.json({ students: result });
  });
  
  /* 
  Exercise 3: Convert Temperatures from Celsius to Fahrenheit
  Create an endpoint /temperatures/convert that accepts an array of temperatures from the request parameters.
  Define the variable name for the temperatures as temperatures.
  Write a function convertCelsiusToFahrenheit to convert each temperature from Celsius to Fahrenheit.
  Respond with the converted temperatures.
  API Call: <http://localhost:3000/temperatures/convert>
  Expected Output:
  {
    convertedTemperatures: [32, 68, 86, 212]
  }
  */
  
  function convertCelsiusToFahrenheit(temperatures) {
    let result = [];
    for (let i = 0; i < temperatures.length; i++) {
      result.push(temperatures[i] * (9 / 5) + 32);
    }
    return result;
  }
  
  app.get('/temperatures/convert', (req, res) => {
    const result = convertCelsiusToFahrenheit(temperatures);
    res.json({ convertedTemperatures: result });
  });
  
  /*
  Exercise 4: Calculate Average Score of Students
  Create an endpoint /students/average-score that accepts an array of student_scores & calculates the average score of students.
  Define the function calculateAverageScore to calculate the average score.
  Respond with the average score.
  API Call: <http://localhost:3000/students/average-score>
  Expected Output:
  {
    averageScore: 76.25
  }
  */
  
  function calculateAverageScore(studentScore) {
    let avgScore = 0;
    for (let i = 0; i < studentScore.length; i++) {
      avgScore = studentScore[i].score + avgScore;
    }
    console.log(avgScore);
    return avgScore / studentScore.length;
  }
  
  app.get('/students/average-score', (req, res) => {
    const averageScore = calculateAverageScore(student_scores);
    res.json({ averageScore });
  });
  
  /* 
  Exercise 5: Count Words in a Sentence
  Create an endpoint /sentence/count-words that accepts a sentence from the request parameters.
  Define the variable name for the sentence as sentence.
  Write a function countWords to count the words in the given sentence.
  Respond with the word count
  API Call: <http://localhost:3000/sentence/count-words>
  Expected Output:
  {
    wordCount: 9
  }
  */
  
  function countWords(sentence) {
    let result = 1;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        result++;
      }
    }
    return result;
  }
  
  app.get('/sentence/count-words', (req, res) => {
    const wordCount = countWords(sentence);
    res.json({ wordCount });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
