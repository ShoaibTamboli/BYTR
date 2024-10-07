const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

const hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

app.get('/', (req, res) => {
  res.json({ hotels });
});

/*
Endpoint 1: Get the hotels sorted by pricing
Write an Express code snippet to sort the hotels based on the pricing low-to-high or high-to-low.
Instructions:
Define an endpoint /hotels/sort/pricing using the get method.
Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.
Send the sorted hotels as a JSON response.
API Call: <http://localhost:3000/hotels/sort/pricing?pricing=low-to-high>
Expected Output: JSON of sorted hotels low-to-high or high-to-low.
*/

app.get('/hotels/sort/pricing', (req, res) => {
  const pricing = req.query.pricing.toLowerCase();
  const hotel = hotels.slice();

  const sortLowToHigh = (hotel1, hotel2) => {
    return hotel1.price - hotel2.price;
  };

  const sortHighToLow = (hotel1, hotel2) => {
    return hotel2.price - hotel1.price;
  };

  if (pricing === 'low-to-high') {
    hotel.sort(sortLowToHigh);
    return res.json({ hotels: hotel });
  }

  if (pricing === 'high-to-low') {
    hotel.sort(sortHighToLow);
    return res.json({ hotels: hotel });
  }
});

/* 
Endpoint 2: Get the hotels sorted based on their Ratings
Write an Express code snippet to sort hotels based on their individual ratings.
Instructions:
Define an endpoint /hotels/sort/rating using the get method.
Define a variable rating to create a condition to sort the hotels based on their rating (high-to-low or low-to-high)
Send the sorted hotels as a JSON response.
API Call: <http://localhost:3000/hotels/sort/rating?rating=low-to-high>
Expected Output: JSON of sorted hotels on ratings (High to Low or Low to High)
*/

app.get('/hotels/sort/rating', (req, res) => {
  const rating = req.query.rating.toLowerCase();
  const hotel = hotels.slice();
  const sortRatingLowtoHigh = (hotel1, hotel2) => {
    return hotel1.rating - hotel2.rating;
  };
  const sortRatingHighToLow = (hotel1, hotel2) => {
    return hotel2.rating - hotel1.rating;
  };

  if (rating === 'low-to-high') {
    hotel.sort(sortRatingLowtoHigh);
    return res.json({ hotels: hotel });
  }

  if (rating === 'high-to-low') {
    hotel.sort(sortRatingHighToLow);
    return res.json({ hotels: hotel });
  }
});

/* 
Endpoint 3: Get the Hotels sorted based on their Reviews
Write an Express code snippet to hotels based on their reviews.
Instructions:
Define an endpoint /hotels/sort/reviews using the get method.
Define a variable reviews to create a condition to sort the hotels “least-to-most” or “most-to-least”.
Send the sorted hotels as a JSON response.
API Call: <http://localhost:3000/hotels/sort/reviews?reviews=least-to-most>
Expected Output: JSON of sorted hotels from 'least-to-most' or 'most-to-least'.
*/

function reviewLeastToMost(hotel1, hotel2) {
  return hotel1.reviews - hotel2.reviews;
}

function reviewMostToLeast(hotel1, hotel2) {
  return hotel2.reviews - hotel1.reviews;
}

app.get('/hotels/sort/reviews', (req, res) => {
  const reviews = req.query.reviews.toLowerCase();
  const hotel = hotels.slice();
  if (reviews === 'least-to-most') {
    hotel.sort(reviewLeastToMost);
    return res.json({ hotels: hotel });
  }
  if (reviews === 'most-to-least') {
    hotel.sort(reviewMostToLeast);
    return res.json({ hotels: hotel });
  }
});

/*
Endpoint 4: Filter the hotels based on the Hotel Amenity
Write an Express code snippet to filter hotels based on the following hotel amenities:
Spa
Bar
Pool
Restaurant
Gym
Pet Friendly
Parking
Free WiFi
Instructions:
Define an endpoint /hotels/filter/amenity using the get method.
Implement a function filterByAmenity that returns the hotels of the selected amenity.
Send the filtered hotels as a JSON response.
Note: Try converting the amenity name into LowerCase.
API Call: <http://localhost:3000/hotels/filter/amenity?amenity=spa>
Expected Output: JSON of hotels with the selected amenity.
*/

function filterByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity;
}

app.get('/hotels/filter/amenity', (req, res) => {
  const amenity = req.query.amenity.toLowerCase();
  const result = hotels.filter((hotelData) =>
    filterByAmenity(hotelData, amenity)
  );
  res.json({ hotels: result });
});

/* 
Endpoint 5: Filter the hotels based on the selected Country
Write an Express code snippet to filter hotels based on the selected country:
France
USA
India
Germany
United Kingdom
Australia
South Africa
Note: Try converting the amenity name into LowerCase.
Instructions:
Define an endpoint /hotels/filter/country using the get method.
Implement a function filterByCountry that returns the hotels if it meets the selected country criteria.
Send the filtered hotels as a JSON response.
API Call: <http://localhost:3000/hotels/filter/country?country=india>
Expected Output: JSON of hotels for the selected country.
*/

function filterByCountry(e, country) {
  return e.country.toLowerCase() === country;
}

app.get('/hotels/filter/country', (req, res) => {
  const country = req.query.country.toLowerCase();
  const result = hotels.filter((e) => filterByCountry(e, country));
  res.json({ hotels: result });
});

/* 
Endpoint 6: Filter the hotels based on the selected Category
Write an Express code snippet to filter hotels based on the selected category:
Mid-Range
Family
Luxury
Boutique
Resort
Budget
Instructions:
Define an endpoint /hotels/filter/category using the get method.
Implement a function filterByCategory that returns the hotels if it meets the selected category criteria.
Send the filtered hotels as a JSON response.
Note: Try converting the amenity name into LowerCase.
API Call:<http://localhost:3000/hotels/filter/category?category=luxury>
Expected Output: JSON of hotels for the selected category.
*/

function filterByCategory(data, category) {
  return data.category.toLowerCase() === category;
}

app.get('/hotels/filter/category', (req, res) => {
  const category = req.query.category.toLowerCase();
  const result = hotels.filter((data) => filterByCategory(data, category));
  res.json({ hotels: result });
});

/* 
Endpoint 7: Send all hotels
Write an Express code snippet to send all hotels
Instructions:
Define an endpoint /hotels using the get method.
Send all the hotels as a JSON response.
API Call: <http://localhost:3000/hotels>
Expected Output: JSON of all hotels.

Once done, test your implemented code on the frontend here: https://bd2-hotel-listing.vercel.app
https://bd-2-a3-trip-with-us.vercel.app/ -- deployed link
*/

app.get('/hotels', (req, res) => {
  res.json({ hotels });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
