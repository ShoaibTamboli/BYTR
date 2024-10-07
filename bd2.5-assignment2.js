const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

const stocks = [
  {
    id: 1,
    name: 'reliance industries',
    price: 2500,
    growth: 3.5,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 2,
    name: 'hdfc bank',
    price: 1800,
    growth: 4.2,
    industry: 'finance',
    exchange: 'bse',
  },
  {
    id: 3,
    name: 'icici bank',
    price: 1600,
    growth: 5.1,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 4,
    name: 'tata consultancy services',
    price: 3200,
    growth: 2.9,
    industry: 'finance',
    exchange: 'bse',
    price: 1900,
  },
  {
    id: 5,
    name: 'infosys',
    price: 2900,
    growth: 3.8,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 7,
    name: 'sun pharmaceutical',
    price: 2300,
    growth: 3.2,
    industry: 'pharma',
    exchange: 'nse',
  },
  {
    id: 8,
    name: 'cipla',
    growth: 2.6,
    price: 2100,
    exchange: 'bse',
    industry: 'pharma',
  },
  {
    id: 9,
    name: 'ntpc',
    price: 1200,
    growth: 4.1,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 10,
    name: 'power grid corporation',
    price: 1500,
    growth: 3.4,
    industry: 'power',
    exchange: 'bse',
  },
  {
    id: 11,
    name: 'adani power',
    price: 2200,
    growth: 5.3,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 12,
    name: 'lupin',
    price: 2000,
    growth: 4.5,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 13,
    name: 'axis bank',
    price: 1750,
    growth: 2.8,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 14,
    name: 'state bank of india',
    price: 1450,
    growth: 3.6,
    industry: 'finance',
    exchange: 'bse',
  },
  {
    id: 15,
    name: 'bajaj finance',
    price: 2650,
    growth: -2.9,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 17,
    name: 'biocon',
    price: 1850,
    growth: 3.9,
    industry: 'pharma',
    exchange: 'nse',
  },
  {
    id: 18,
    name: 'torrent power',
    price: 1600,
    growth: 2.4,
    industry: 'power',
    exchange: 'bse',
  },
  {
    id: 19,
    name: 'tata power',
    price: 1750,
    growth: 4.0,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 20,
    name: 'jsw energy',
    price: 1450,
    growth: 3.1,
    industry: 'power',
    exchange: 'bse',
  },
];

/*
Step 1: Display all the stocks so that when you click “Load Stocks”, all the stocks are displayed first.
Now, follow the various endpoints that you need to create to get the desired results.
*/

app.get('/', (req, res) => {
  res.json({ stocks: stocks });
});

/* 
Endpoint 1: Get the stocks sorted by pricing
Write an Express code snippet to sort the stocks based on the pricing low-to-high or high-to-low.
Instructions:
Define an endpoint /stocks/sort/pricing using the get method.
Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.
Send the sorted stocks as a JSON response.
API Call: <http://localhost:3000/stocks/sort/pricing>
/stocks/sort/pricing/low-to-high
/stocks/sort/pricing/high-to-low
Expected Output: JSON of sorted stocks low-to-high or high-to-low.
*/

function sortLowToHigh(stockdata1, stockdata2) {
  return stockdata1.price - stockdata2.price;
}

function sortHighToLow(stockdata1, stockdata2) {
  return stockdata2.price - stockdata1.price;
}

app.get('/stocks/sort/pricing', (req, res) => {
  const pricing = req.query.pricing.toLowerCase();
  const stocksData = stocks.slice();
  if (pricing === 'low-to-high') {
    stocksData.sort(sortLowToHigh);
    return res.json({ stocks: stocksData });
  }
  if (pricing === 'high-to-low') {
    stocksData.sort(sortHighToLow);
    return res.json({ stocks: stocksData });
  }
});

/* 
Endpoint 2: Get the stocks sorted based on their Growth.
Write an Express code snippet to sort stocks based on their individual growth rate.
Instructions:
Define an endpoint /stocks/sort/growth using the get method.
Define a variable growth to create a condition to sort the stocks based on their growth rate (high-to-low or low-to-high)
Send the filtered stocks as a JSON response.
API Call: <http://localhost:3000/stocks/sort/growth>
Expected Output: JSON of sorted stocks on growth rate (High to Low or Low to High)
*/

function highToLow(stock1, stock2) {
  return stock2.growth - stock1.growth;
}

function lowToHigh(stock1, stock2) {
  return stock1.growth - stock2.growth;
}

app.get('/stocks/sort/growth', (req, res) => {
  const growth = req.query.growth.toLowerCase();
  const stocksData = stocks.slice();
  if (growth === 'high-to-low') {
    stocksData.sort(highToLow);
    return res.json({ stocks: stocksData });
  }
  if (growth === 'low-to-high') {
    stocksData.sort(lowToHigh);
    return res.json({ stocks: stocksData });
  }
});

/* 
Endpoint 3: Filter the stocks based on the 2 Stock Exchange (NSE. and BSE)
Write an Express code snippet to filter stocks based on the two available stock exchanges:
NSE
BSE
Instructions:
Define an endpoint /stocks/filter/exchange using the get method.
Implement a function filterByExchange that returns the stocks of the selected exchange.
While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive
Use the .toLowerCase() string functionSend the filtered stocks as a JSON response.API Call: <http://localhost:3000/stocks/filter/exchange>
Expected Output: JSON of stocks from NSE or BSE.
*/

function filterByExchange(stockData, exchange) {
  return stockData.exchange.toLowerCase() === exchange;
}

app.get('/stocks/filter/exchange', (req, res) => {
  const exchange = req.query.exchange.toLowerCase();
  const stockByExchange = stocks.filter((e) => filterByExchange(e, exchange));
  res.json({ stocks: stockByExchange });
});

/*
Endpoint 4: Filter the stocks based on the Industrial Sector.
Write an Express code snippet to filter stocks based on the selected sector:
Finance
Pharma
Power
Instructions:
Define an endpoint /stocks/filter/industry using the get method.
Implement a function filterByIndustry that returns the stocks if it meets the selected industry criteria.
While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive
Use the .toLowerCase() string function
Send the filtered stocks as a JSON response.
API Call: <http://localhost:3000/stocks/filter/industry>
Expected Output: JSON of stocks for the selected industry.
*/

function filterByIndustry(e, industry) {
  return e.industry.toLowerCase() === industry;
}

app.get('/stocks/filter/industry', (req, res) => {
  const industry = req.query.industry.toLowerCase();
  const stockbyIndustry = stocks.filter((e) => filterByIndustry(e, industry));
  res.json({ stocks: stockbyIndustry });
});

/* 
Endpoint 5: Send all available stocks
Write an Express code snippet to send all the stocks
Instructions:
Define an endpoint /stocks using the get method.
Send all the stocks as a JSON response.
API Call: <http://localhost:3000/stocks>
Expected Output: JSON of all the stocks
*/

app.get('/stocks', (req, res) => {
  res.json({ stocks });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/* 
How to integrate the Backend APIs with Advani Exchange’s Frontend UI?

Deploy your StackBlitz project to Vercel by following the steps in this https://tremendous-talon-40e.notion.site/Vercel-Deployment-w-StackBlitz-55006e80eaf141e7bcff0f5a25f790f7

Copy the Vercel URL.

Once done, go to this link: https://bd2-stock-listing.vercel.app/
*/