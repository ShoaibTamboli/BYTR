const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Exercise 1

Given an array of objects where each object represents a project with properties for name, duration, and status.

Return the names of all ongoing projects.

Expected output

['Project B', 'Project C']

*/

const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];

function getOnGoingProjects(projects) {
  let data = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].status === 'ongoing') {
      data.push(projects[i].name);
    }
  }
  return data;
}

let result = getOnGoingProjects(projects);
console.log(result);

console.log(`=======================Exercise 2==============================`);
/*
Exercise 2

Given an array of objects where each object represents a city with properties for name, population, and country.

Return all the cities in the country 'USA'.

Expected output

[
  { name: 'New York', population: 8000000, country: 'USA' },
  { name: 'Los Angeles', population: 4000000, country: 'USA' }
]
*/

const cities = [
  { name: 'New York', population: 8000000, country: 'USA' },
  { name: 'Toronto', population: 2800000, country: 'Canada' },
  { name: 'Los Angeles', population: 4000000, country: 'USA' },
  { name: 'London', population: 9000000, country: 'UK' },
];

function getCities(cities, country) {
  let data = [];
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].country === country) {
      data.push(cities[i]);
    }
  }
  return data;
}

result = getCities(cities, 'USA');
console.log(result);

console.log(`=======================Exercise 3==============================`);

/* 
Exercise 3

Given an array of objects where each object represents a song with properties for title, artist, and duration.

Return the first song that has a duration of more than 5 minutes.

Expected output

Title: Song B
Artist: Artist 2
Duration: 5.2

*/

const songs = [
  { title: 'Song A', artist: 'Artist 1', duration: 4.5 },
  { title: 'Song B', artist: 'Artist 2', duration: 5.2 },
  { title: 'Song C', artist: 'Artist 3', duration: 3.8 },
  { title: 'Song D', artist: 'Artist 4', duration: 6.0 },
];

function getSong(el, duration) {
  if (el.duration > duration) {
    return el;
  }
}

result = songs.find((el) => getSong(el, 5));
console.log(result);

console.log(`=======================Exercise 4==============================`);

/*
Exercise 4

Provided an array of objects where each object represents an animal with properties for species, habitat, and population.

Write a function updateAnimalPopulation that updates the population of an animal given its species & newPopulation.

Expected output

The updated population for Elephant is 5500

*/

const animals = [
  { species: 'Tiger', habitat: 'Forest', population: 3000 },
  { species: 'Elephant', habitat: 'Savannah', population: 5000 },
  { species: 'Panda', habitat: 'Bamboo Forest', population: 2000 },
  { species: 'Kangaroo', habitat: 'Grassland', population: 10000 },
];

console.log(`=======================Exercise 5==============================`);

/* 
Exercise 5

Given an array of objects where each object represents a player with properties for name, team, and goals_scored.

Return the names of all players who have scored more than 20 goals.


Expected output

['Player A', 'Player C']
*/

const players = [
  { name: 'Player A', team: 'Team 1', goals_scored: 22 },
  { name: 'Player B', team: 'Team 2', goals_scored: 18 },
  { name: 'Player C', team: 'Team 1', goals_scored: 25 },
  { name: 'Player D', team: 'Team 3', goals_scored: 15 },
];

console.log(`=======================Exercise 6==============================`);

/*
Exercise 6

Given an array of objects where each object represents a company with properties for name, industry, and employees.

Return all the companies in the 'Tech' industry.

Expected output

[
  { name: 'Company A', industry: 'Tech', employees: 500 },
  { name: 'Company C', industry: 'Tech', employees: 700 }
]
*/

const companies = [
  { name: 'Company A', industry: 'Tech', employees: 500 },
  { name: 'Company B', industry: 'Finance', employees: 300 },
  { name: 'Company C', industry: 'Tech', employees: 700 },
  { name: 'Company D', industry: 'Healthcare', employees: 400 },
];

console.log(`=======================Exercise 7==============================`);

/*
Exercise 7

Given an array of objects where each object represents a book with properties for title, author, and pages.

Sort the array of books by pages in descending order.

Expected output

[
  { title: 'Book D', author: 'Author 4', pages: 400 },
  { title: 'Book B', author: 'Author 2', pages: 320 },
  { title: 'Book C', author: 'Author 3', pages: 290 },
  { title: 'Book A', author: 'Author 1', pages: 150 }
]

*/

const books = [
  { title: 'Book A', author: 'Author 1', pages: 150 },
  { title: 'Book B', author: 'Author 2', pages: 320 },
  { title: 'Book C', author: 'Author 3', pages: 290 },
  { title: 'Book D', author: 'Author 4', pages: 400 },
];

console.log(`=======================Exercise 8==============================`);

/*
Exercise 8

Given an array of objects where each object represents a person with properties for name, country, and age.

Return the names of all people who are older than 30 and live in 'India'.

Expected output

['Person A', 'Person C']
*/

const people = [
  { name: 'Person A', country: 'India', age: 35 },
  { name: 'Person B', country: 'USA', age: 28 },
  { name: 'Person C', country: 'India', age: 32 },
  { name: 'Person D', country: 'India', age: 24 },
];

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
