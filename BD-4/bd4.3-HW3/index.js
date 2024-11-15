const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;
let db;
(async () => {
  db = await open({
    filename: './BD4.3-HW3/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/*
Exercise 1: Fetch All Products by category

Create an endpoint /products/category/:category to fetch products by a specific category.

Create a function fetchProductsByCategory to fetch all the products from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/products/category/Electronics
*/

async function fetchProductsByCategory(category) {
  const query = 'SELECT * FROM products WHERE  category = ?';
  const response = await db.all(query, [category]);
  return { products: response };
}

app.get('/products/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const result = await fetchProductsByCategory(category);
    if (result.products.length === 0) {
      return res
        .status(404)
        .json({ message: 'No products found for category: ' + category });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch Products by Brands

Create an endpoint /products/brand/:brand return all the products by specific brand .

Create a function fetchProductsByBrand to fetch all the products from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/products/brand/BrandA

*/

async function fetchProductsByBrand(brand) {
  const query = 'SELECT * FROM products WHERE  brand = ?';
  const response = await db.all(query, [brand]);
  return { products: response };
}

app.get('/products/brand/:brand', async (req, res) => {
  try {
    const brand = req.params.brand;
    const result = await fetchProductsByBrand(brand);
    if (result.products.length === 0) {
      return res
        .status(404)
        .json({ message: 'No products found for brand: ' + brand });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch Products by Rating

Create an endpoint /products/rating/:rating to return all the products more than equal to the rating.

Create a function fetchProductsByRating fetch all the products from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/products/rating/4.5
*/

async function fetchProductsByRating(rating) {
  const query = 'SELECT * FROM products WHERE  rating >= ?';
  const response = await db.all(query, [rating]);
  return { products: response };
}

app.get('/products/rating/:rating', async (req, res) => {
  try {
    const rating = req.params.rating;
    const result = await fetchProductsByRating(rating);
    if (result.products.length === 0) {
      return res
        .status(404)
        .json({ message: 'No products found for rating: ' + rating });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 4 : Fetch products by stock Count

Create an endpoint /products/stocks/:stock to return all the products.

Create a function fetchProductsByStocks to fetch all the products having stock having less than stock from the database .

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return a 404 error if no data is found

API Call:

http://localhost:3000/products/stocks/200
*/

async function fetchProductsByStocks(stock) {
  const query = 'SELECT * FROM products WHERE  stock <= ?';
  const response = await db.all(query, [stock]);
  return { products: response };
}

app.get('/products/stocks/:stock', async (req, res) => {
  try {
    const stock = req.params.stock;
    const result = await fetchProductsByStocks(stock);
    if (result.products.length === 0) {
      return res
        .status(404)
        .json({ message: 'No products found for stock: ' + stock });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
