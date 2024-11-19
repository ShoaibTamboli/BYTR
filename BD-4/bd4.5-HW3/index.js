const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.5-HW3/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Fetch Kitchen Items by Minimum Rating

Create an endpoint /kitchen-items/rating to return kitchen-items with a rating greater than a specified value.

Declare a variable minRating to store the query parameter

Create a function filterKitchenItemsByRating to fetch the kitchen-items from the database which are greater than equal to minRating

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/kitchen-items/rating?minRating=4
*/

async function filterKitchenItemsByRating(minRating) {
  const query = 'SELECT * FROM kitchen_items WHERE rating > ?';
  const response = await db.all(query, [minRating]);
  return { kitchenItems: response };
}

app.get('/kitchen-items/rating', async (req, res) => {
  try {
    const minRating = req.query.minRating;
    const result = await filterKitchenItemsByRating(minRating);
    if (result.kitchenItems.length === 0) {
      return res.status(404).json({
        message: 'No kitchen_items found in DB for minRating' + minRating,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch Kitchen Items by Material and Rating

Create an endpoint /kitchen-items/material-rating to return kitchen items of a specified material with a rating above a specified value.

Declare variables material and minRating to store the query parameters.

Create a function filterKitchenItemsByMaterialRatingto fetch the kitchen-items from the database based on the material and rating.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/kitchen-items/material-rating?material=plastic&minRating=3
*/

async function filterKitchenItemsByMaterialRatingto(material, minRating) {
  const query = 'SELECT * FROM kitchen_items WHERE material = ? AND rating > ?';
  const response = await db.all(query, [material, minRating]);
  return { kitchenItems: response };
}

app.get('/kitchen-items/material-rating', async (req, res) => {
  try {
    const material = req.query.material;
    const minRating = req.query.minRating;
    const result = await filterKitchenItemsByMaterialRatingto(
      material,
      minRating
    );
    if (result.kitchenItems.length === 0) {
      return res.status(404).json({
        message:
          'No kitchen_items found in DB for material ' +
          material +
          ' and minRating: ' +
          minRating,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch Kitchen Items Ordered by Price

Create an endpoint /kitchen-items/ordered-by-price to return kitchen-items ordered by price in descending order.

Create a function filterKitchenItemsOrderedByPrice to fetch the kitchen-items from the database and order them by price. ( highest to lowest price )

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found.

API Call:

http://localhost:3000/kitchen-items/ordered-by-price
*/

async function filterKitchenItemsOrderedByPrice() {
  const query = 'SELECT * FROM kitchen_items ORDER BY price DESC';
  const response = await db.all(query, []);
  return { kitchenItems: response };
}

app.get('/kitchen-items/ordered-by-price', async (req, res) => {
  try {
    const material = req.query.material;
    const minRating = req.query.minRating;
    const result = await filterKitchenItemsOrderedByPrice(material, minRating);
    if (result.kitchenItems.length === 0) {
      return res.status(404).json({
        message: 'No kitchen_items found in DB for ordered-by-price',
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
