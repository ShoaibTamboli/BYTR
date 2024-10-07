/* 
Once done, test your implemented code on the frontend here: https://bd2-listing-page.vercel.app/ after deploying it on Vercel.
*/

const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

const products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

/* 
Endpoint 1: Get the products sorted by popularity
Write an Express code snippet to sort products based on their individual ratings.
Instructions:
Define an endpoint /products/sort/popularity using the get method.
Define a variable sortedProducts to create a condition to sort the products on their ratings (high to low)
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/sort/popularity>
Expected Output: JSON of sorted products on popularity
*/

app.get('/products/sort/popularity', (req, res) => {
  const productData = products.slice();
  const sortedProducts = (product1, product2) =>
    product2.rating - product1.rating;
  productData.sort(sortedProducts);
  res.json({ products: productData });
});

/* 
Endpoint 2: Get the products sorted by “high-to-low” price
Write an Express code snippet to sort products based on their individual pricing.
Instructions:
Define an endpoint /products/sort/price-high-to-low using the get method.
Define a variable sortedProducts to create a condition to sort the products on their pricing (high to low)
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/sort/price-high-to-low>
Expected Output:
JSON of sorted products on pricing (High to Low)
*/

app.get('/products/sort/price-high-to-low', (req, res) => {
  const productData = products.slice();
  const sortedProducts = (product1, product2) =>
    product2.price - product1.price;
  productData.sort(sortedProducts);
  res.json({ products: productData });
});

/* 
Endpoint 3: Get the products sorted by “low-to-high” price
Write an Express code snippet to sort products based on their individual pricing.
Instructions:
Define an endpoint /products/sort/price-low-to-high using the get method.
Define a variable sortedProducts to create a condition to sort the products on their pricing ( low to high)
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/sort/price-low-to-high>
Expected Output: JSON of sorted products on pricing (Low to High)
*/

app.get('/products/sort/price-low-to-high', (req, res) => {
  const productData = products.slice();
  const sortedProducts = (product1, product2) =>
    product1.price - product2.price;

  productData.sort(sortedProducts);
  res.json({ products: productData });
});

/*
Endpoint 4: Filter the products based on the “RAM” option.
Write an Express code snippet to filter products based on the selected RAM option.
Instructions:
Define an endpoint /products/filter/ram using the get method.
Implement a function filterByRam that returns the products if it meets the selected RAM configuration.
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/filter/ram?ram=8>
Expected Output: JSON of products with RAM=8 GB
*/

function filterByRam(product, reqRam) {
  return product.ram === reqRam;
}

app.get('/products/filter/ram', (req, res) => {
  const ram = parseInt(req.query.ram);
  const result = products.filter((data) => filterByRam(data, ram));
  res.json({ products: result });
});

/*
Endpoint 5: Filter the products based on the “ROM” option.
Write an Express code snippet to filter products based on the selected ROM option.
Instructions:
Define an endpoint /products/filter/rom using the get method.
Implement a function filterByRom that returns the products if it meets the selected ROM configuration.
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/filter/rom?rom=64>
Expected Output: JSON of products with ROM=64 GB
*/

function filterByRom(product, reqRom) {
  return product.rom === reqRom;
}

app.get('/products/filter/rom', (req, res) => {
  const rom = parseInt(req.query.rom);
  const result = products.filter((e) => filterByRom(e, rom));
  res.json({ products: result });
});

/*
Endpoint 6: Filter the products based on the “Brand” option.
Write an Express code snippet to filter products based on the selected Brand option.
Instructions:
Define an endpoint /products/filter/brand using the get method.
Implement a function filterByBrand that returns the products for the specified brand category
While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive
Use the .toLowerCase() string function
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/filter/brand?brand=apple>
Expected Output: JSON of products with brand = apple
*/

function filterByBrand(product, reqBrand) {
  return product.brand.toLowerCase() === reqBrand.toLowerCase();
}

app.get('/products/filter/brand', (req, res) => {
  const brand = req.query.brand;
  const result = products.filter((data) => filterByBrand(data, brand));
  res.json({ products: result });
});

/* 
Endpoint 7: Filter the products based on the “OS” option.
Write an Express code snippet to filter products based on the selected OS option.
Instructions:
Define an endpoint /products/filter/os using the get method.
Implement a function filterByOs that returns the products for the specified OS configuration.
While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive
Use the .toLowerCase() string function
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/filter/os?os=Android>
Expected Output: JSON of products with OS= Android
*/

function filterByOs(product, reqOs) {
  return product.os.toLowerCase() === reqOs.toLowerCase();
}

app.get('/products/filter/os', (req, res) => {
  const os = req.query.os;
  const result = products.filter((e) => filterByOs(e, os));
  res.json({ products: result });
});

/* 
Endpoint 8: Filter the products based on the “Price” option.
Write an Express code snippet to filter products based on the selected price option.
Instructions:
Define an endpoint /products/filter/price using the get method.
Implement a function filterByPrice that returns the products for the products less than or equal to the specified price filter.
Send the filtered products as a JSON response.
API Call: <http://localhost:3000/products/filter/price?price=30000>
Expected Output: JSON of products with Price <= 30000
*/

function filterByPrice(product, reqPrice) {
  return product.price <= reqPrice;
}

app.get('/products/filter/price', (req, res) => {
  const price = parseInt(req.query.price);
  const result = products.filter((e) => filterByPrice(e, price));
  res.json({ products: result });
});

/* 
Endpoint 9: Send original array of products
Write an Express code snippet to send all available products.
Instructions:
Define an endpoint /products using the get method.
Send the products array as a JSON response.
API Call: <http://localhost:3000/products>
Expected Output: JSON of products
*/

app.get('/products', (req, res) => {
  res.json({ products: products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
