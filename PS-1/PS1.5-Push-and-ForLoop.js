const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

console.log('');
console.log('=====================Exercise 1=====================');
console.log('');
/*

/* 

Exercise 1
Given an array of numbers representing numbers.
Use a for loop , Return the numbers in doubled value.

Expected Output:
[4, 8, 12, 20, 10]

*/

let numbers = [2, 4, 6, 10, 5];

function doubleNumber(numbers) {
  let data = [];
  for (let i = 0; i < numbers.length; i++) {
    data.push((numbers[i] += numbers[i]));
  }
  console.log(data);
}

doubleNumber(numbers);

console.log('');
console.log('=====================Exercise 2=====================');
console.log('');
/*

Exercise 2
Given an array of objects where each object represents a car with properties for name, and grade.
Use a for loop to create a new array, push only the names of students who have a grade of 'A'.

Expected Output:
['Alice', 'Charlie']

*/

const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' },
];

function studentsNameasperGrade(students, grade) {
  let data = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade === grade) {
      data.push(students[i].name);
    }
  }
  console.log(data);
}

studentsNameasperGrade(students, 'A');

console.log('');
console.log('=====================Exercise 3=====================');
console.log('');
/*

Exercise 3
Given an array of numbers representing the prices of items in a store.
Use a for loop, Create new array push the prices having greater than 100 .

Expected Output:
[200, 150, 120]

*/

const prices = [99, 150, 75, 120, 200];

function priceSort(prices) {
  let data = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
      data.push(prices[i]);
    }
  }
  data.sort((a, b) => b - a);
  console.log(data);
  return data;
}

priceSort(prices);

console.log('');
console.log('=====================Exercise 4=====================');
console.log('');
/*

Exercise 4
Given an array of numbers representing ages
Use a for loop return a new array, push all even ages.

Expected Output:
[12, 22, 34]

*/

const ages = [12, 15, 22, 29, 34];

function getEvenAges(ages) {
  let data = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0) {
      data.push(ages[i]);
    }
  }
  console.log(data);
}

getEvenAges(ages);

console.log('');
console.log('=====================Exercise 5=====================');
console.log('');
/*

Exercise 5
Given an array of strings representing sports.
Use a for loop , Return a single string that combines all sports, each sport followed by a question mark.

Expected Output:
['Soccer?', 'Basketball?', 'Tennis?']

*/

const sports = ['Soccer', 'Basketball', 'Tennis'];

function getSports(sports) {
  let data = '';
  for (let i = 0; i < sports.length; i++) {
    data += sports[i] + '?';
  }
  console.log(data);
  return data;
}

getSports(sports);

console.log('');
console.log('=====================Exercise 6=====================');
console.log('');
/*

Exercise 6
Given an array of numbers .
Use a for loop , return a new array, push all even numbers.

Expected Output:
[2, 4, 6, 8, 10]

*/

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(numbers) {
  let data = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      data.push(numbers[i]);
    }
  }
  console.log(data);
}
getEvenNumbers(numbers);

console.log('');
console.log('=====================Exercise 7=====================');
console.log('');
/*

Exercise 7
Given an array of numbers
Use a for loop, return a new array, push all odd numbers.

Expected Output:
[1, 3, 5, 7, 9]

*/

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOddNumbers(numbers) {
  let data = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      data.push(numbers[i]);
    }
  }
  console.log(data);
}

getOddNumbers(numbers);

console.log('');
console.log('=====================Exercise 8=====================');
console.log('');
/*
Exercise 8
Given an array of strings representing names.
Use a for loop, Return a single string that concatenates all the names, separated by a -

Expected Output:
'John-Doe-Jane-Smith'

*/

const names = ['John', 'Doe', 'Jane', 'Smith'];

function getNamesHiphenated(names) {
  let data = '';
  for (let i = 0; i < names.length; i++) {
    data += names[i];
    if (i < names.length - 1) {
      data += '-';
    }
  }
  console.log(data);
  // return data;
}

getNamesHiphenated(names);

console.log('');
console.log('=====================Exercise 9=====================');
console.log('');
/*

Exercise 9
Given an array of strings.
Use a for loop , join all the strings into a single string, separated by a space.

Expected Output:
'Hello world from practice set'

*/

const strings = ['Hello', 'world', 'from', 'practice', 'set'];

function joinStringWithSpace(strings) {
  let data = '';
  for (let i = 0; i < strings.length; i++) {
    data += strings[i];
    if (i < strings.length - 1) {
      data += ' ';
    }
  }
  console.log(data);
}

joinStringWithSpace(strings);

console.log('');
console.log('=====================Exercise 10=====================');
console.log('');
/*

Exercise 10
Given an array of strings.
Use a for loop , join all the strings into a single string, separated by a comma.

Expected Output:
'apple,banana,cherry'

*/
const strings1 = ['apple', 'banana', 'cherry'];

function joinString(strings1) {
  let data = '';
  for (let i = 0; i < strings1.length; i++) {
    data += strings1[i];
    if (i < strings1.length - 1) {
      data += ',';
    }
  }
  console.log(data);
}

joinString(strings1);

console.log('');
console.log('=====================Exercise 11=====================');
console.log('');
/*

Exercise 11
Given an array of objects where each object represents a car with properties for make, model, and year.
Use a for loop, return a new array containing the models of cars manufactured after 2010 (push all the array having years Greater than 2010).
Expected Output:

[
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

function filterCarbyModel(cars, year) {
  let data = [];
  for (let car of cars) {
    if (car.year > year) {
      data.push(car);
    }
  }
  console.log(data);
}

filterCarbyModel(cars, 2010);
console.log('');
console.log('=====================Exercise 12=====================');
console.log('');
/*
Exercise 12
Given an array of numbers representing temperatures.
Use a for loop create a new array containing the temperatures in Fahrenheit.
Note : (temperatures[i] * 9/5) + 32

Expected Output:
[32, 68, 98.6, 212]

*/

const temperatures = [0, 20, 37, 100];

function tempToFarhenite(temperatures) {
  let data = [];
  for (let i = 0; i < temperatures.length; i++) {
    data.push((temperatures[i] * 9) / 5 + 32);
  }
  console.log(data);
}

tempToFarhenite(temperatures);

console.log('');
console.log('=====================Exercise 13=====================');
console.log('');
/*

Exercise 13
Given an array of numbers representing scores
Use a for loop create a new array and push the scores that are multiples of 5.

Expected Output:
[10, 25, 40, 55]

*/

const scores = [10, 22, 25, 33, 40, 55];

function multipleOfFive(scores) {
  let data = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 5 === 0) {
      data.push(scores[i]);
    }
  }
  console.log(data);
}

multipleOfFive(scores);

console.log('');
console.log('=====================Exercise 14=====================');
console.log('');
/*

Exercise 14
Given an array of objects where each object represents an event with properties for title, date, and location.
Use a for loop to create a new array containing the titles of events taking place in 'New York'.

Expected Output:
['Concert', 'Tech Conference']

*/

const events = [
  { title: 'Concert', date: '2022-08-10', location: 'New York' },
  { title: 'Art Exhibition', date: '2022-09-12', location: 'Los Angeles' },
  { title: 'Tech Conference', date: '2022-10-05', location: 'New York' },
];
let data = [];
for (let i = 0; i < events.length; i++) {
  if (events[i].location === 'New York') {
    data.push(events[i].title);
  }
}
console.log(data);

console.log('');
console.log('=====================Exercise 15=====================');
console.log('');
/*

Exercise 15
Given an array of numbers representing ages.
Use a for loop to create a new array that adds 10 to each age.

Expected Output:
[30, 35, 40, 45]

*/

const ages1 = [20, 25, 30, 35];

data = [];
for (let age of ages1) {
  data.push(age + 10);
}
console.log(data);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
