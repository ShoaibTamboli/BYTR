const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');
const app = express();
const port = 3000;

let db;
(async () => {
  db = await open({
    filename: './BD4.1_HW_3/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch All Products

Create an endpoint /products to return all the products.

Create a function fetchAllProducts to fetch all the products from the database.

API Call:

http://localhost:3000/products
*/

async function fetchAllProducts() {
  const query = 'SELECT * FROM products';
  const response = await db.all(query, []);
  return { products: response };
}

app.get('/products', async (req, res) => {
  const result = await fetchAllProducts();
  res.status(200).json(result);
});

/*
Exercise 2: Retrieve Products by Brand

Define the endpoint /products/brand/:brand to retrieve products by a specific brand.

Define the function name fetchProductsByBrand which returns products for a given brand from the database.

API call

http://localhost:3000/products/brand/Sony
*/

async function fetchProductsByBrand(brand) {
  const query = 'SELECT * FROM products WHERE brand = ?';
  const response = await db.all(query, [brand]);
  return { products: response };
}

app.get('/products/brand/:brand', async (req, res) => {
  const brand = req.params.brand;
  const result = await fetchProductsByBrand(brand);
  res.status(200).json(result);
});

/* 
Exercise 3: Retrieve Products by Category

Define the endpoint /products/category/:category to retrieve products by a specific category.

Define the function name fetchProductsByCategory which returns products for a given category from the database.

API call

http://localhost:3000/products/category/Electronics
*/

async function fetchProductsByCategory(category) {
  const query = 'SELECT * FROM products WHERE category = ?';
  const response = await db.all(query, [category]);
  return { products: response };
}

app.get('/products/category/:category', async (req, res) => {
  const category = req.params.category;
  const result = await fetchProductsByCategory(category);
  res.status(200).json(result);
});

/*
Exercise 4: Retrieve Products by stocks

Define the endpoint /products/stock/:stocks to retrieve products by release year.

Define the function name fetchProductsByStock which returns products for a given stock details

API call

http://localhost:3000/products/stock/in-stock
*/

async function fetchProductsByStock(stocks) {
  const query = 'SELECT * FROM products WHERE stock = ?';
  const response = await db.all(query, [stocks]);
  return { products: response };
}

app.get('/products/stock/:stocks', async (req, res) => {
  const stocks = req.params.stocks;
  const result = await fetchProductsByStock(stocks);
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
