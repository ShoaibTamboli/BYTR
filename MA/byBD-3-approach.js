const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/* Chef DB */
let chefs = [
  { id: 1, name: 'Vikas Khanna', specialty: 'Indian' },
  { id: 2, name: 'Sanjeev Kapoor', specialty: 'Indian' },
  { id: 3, name: 'Gaggan Anand', specialty: 'Progressive Indian' },
];

let dishes = [
  { id: 1, name: 'Dal Makhani', price: 15.0, chef_id: 1, restaurant_id: 1 },
  {
    id: 2,
    name: 'Paneer Butter Masala',
    price: 20.0,
    chef_id: 2,
    restaurant_id: 2,
  },
  {
    id: 3,
    name: 'Molecular Chaat',
    price: 35.0,
    chef_id: 3,
    restaurant_id: 3,
  },
];

let restaurantDetails = [
  {
    id: 1,
    name: 'Junoon',
    location: 'New York',
    cuisine: 'Indian',
  },
  {
    id: 2,
    name: 'The Yellow Chilli',
    location: 'Mumbai',
    cuisine: 'Indian',
  },
  { id: 3, name: 'Gaggan', location: 'Bangkok', cuisine: 'Progressive Indian' },
];

/* 
Exercise 1: Fetch All Chefs
APICall: http://localhost:3000/v1/chefs

*/

app.get('/v1/chefs', (req, res) => {
  res.json({ chefs });
});

/* 
Exercise 2: Fetch All Dishes by Chef**
APICall: http://localhost:3000/v1/dishes/chef/1

*/

function filterDishesByChef(dishes, id) {
  let filteredArray = [];
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].chef_id === id) {
      filteredArray.push(dishes[i]);
    }
  }
  return filteredArray;
}

app.get('/v1/dishes/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = filterDishesByChef(dishes, id);
  res.json({ dishes: result });
});

/* 
Exercise 3: Fetch Restaurant Details by Name**
APICall: http://localhost:3000/v1/restaurants/search?name=Junoon

*/

function restaurantDeatilsByName(restaurantDetails, name) {
  const result = restaurantDetails.filter((e) => e.name === name);
  return result;
}

app.get('/v1/restaurants/search', (req, res) => {
  const name = req.query.name;
  const restaurant = restaurantDeatilsByName(restaurantDetails, name);
  res.json({ restaurant });
});

/* 
Exercise 4: Fetch Dishes by Restaurant
API Call: http://localhost:3000/v1/dishes/restaurant/1
*/

function filterDishesByRestaurant(dishes, id) {
  const result = dishes.filter((e) => e.restaurant_id === id);
  return result;
}

app.get('/v1/dishes/restaurant/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = filterDishesByRestaurant(dishes, id);
  res.json({ dishes: result });
});

/* 
Exercise 5: Fetch Chefs by Specialty
API Call:
http://localhost:3000/v1/chefs/search?specialty=Indian
*/

function filterChefBySpecialty(chefs, specialty) {
  const result = chefs.filter((el) => el.specialty === specialty);
  return result;
}

app.get('/v1/chefs/search', (req, res) => {
  const specialty = req.query.specialty;
  const result = filterChefBySpecialty(chefs, specialty);
  res.json({ chefs: result });
});

/*
Exercise 6: Fetch All Restaurants 
API Call: http://localhost:3000/v2/restaurants
*/

app.get('/v2/restaurants', (req, res) => {
  res.json({ restaurants: restaurantDetails });
});

/* 
Exercise 7: Fetch Chef Details by ID (Sequelize)
API Call: http://localhost:3000/v2/chefs/1
*/

function filterchefDetailsById(chefs, id) {
  const result = chefs.filter((e) => e.id === id);
  return result;
}

app.get('/v2/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = filterchefDetailsById(chefs, id);
  res.json({ chef: result });
});

/*
Exercise 8: Fetch All Dishes by Name
Endpoint: /v2/dishes/filter
Description: Fetch all dishes by their name . Extract name from query parameters
API Call: http://localhost:3000/v2/dishes/filter?name=Dal%20Makhani
*/

function filterDishesByName(dishes, name) {
  const result = dishes.filter((el) => el.name === name);
  return result;
}

app.get('/v2/dishes/filter', (req, res) => {
  const name = req.query.name;
  const result = filterDishesByName(dishes, name);
  res.json({ dishes: result });
});

/* 
Exercise 9: Fetch Restaurants by Location
Endpoint: /v2/restaurants/location/:location
Description: Fetch all restaurants by location.
API Call: http://localhost:3000/v2/restaurants/location/New%20York
*/

function restaurantDetailsByLocation(restaurantDetails, location) {
  const result = restaurantDetails.filter((e) => e.location === location);
  return result;
}

app.get('/v2/restaurants/location/:location', (req, res) => {
  const location = req.params.location;
  const result = restaurantDetailsByLocation(restaurantDetails, location);
  res.json({ restaurants: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
