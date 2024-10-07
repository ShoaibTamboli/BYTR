const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/* 
Exercise 1: Return the Person Object
Steps:
Create an endpoint /person that returns the person object with properties firstName, lastName, gender, age, and isMember.
Define the variables in the person object.
API Call: <http://localhost:3000/person>
*/

const person = {
  firstName: 'Shoaib',
  lastName: 'Tamboli',
  gender: 'male',
  age: '26',
  isMember: true,
};

app.get('/person', (req, res) => {
  res.json(person);
});

/*
Exercise 2: Access the Full Name of the Person
Steps:
Create an endpoint /person/fullname that returns the full name of the person.
Define the full name by combining firstName and lastName.
API Call: <http://localhost:3000/person/fullname>
*/
function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}
app.get('/person/fullname', (req, res) => {
  const fullName = getFullName(person);
  res.json({ fullName });
});

/* 
Exercise 3: Access Just the First Name and Gender of the Person
Steps:
Create an endpoint /person/firstname-gender that returns the first name and gender of the person.
Select the properties firstName and gender.
API Call: <http://localhost:3000/person/firstname-gender>
*/
function getFirstNameandGender(person) {
  return {
    firstName: person.firstName,
    gender: person.gender,
  };
}
app.get('/person/firstname-gender', (req, res) => {
  const firstNameandGender = getFirstNameandGender(person);
  res.json(firstNameandGender);
});

/*
Exercise 4: Increment the Age of the Person and Return the Updated Object
Steps:
Create an endpoint /person/increment-age that increments the age of the person.
Increment the age by 1 and return it.
API Call: <http://localhost:3000/person/increment-age>

  //person.age +=1;// another approach
*/

function incrementAge(person) {
  return {
    ...person,
    age: parseInt(person.age) + 1,
  };
}

app.get('/person/increment-age', (req, res) => {
  const updatedPerson = incrementAge(person);
  res.json(updatedPerson);
});

/*
Exercise 5: Return the Full Name and Membership Status of the Person
Steps:
Create an endpoint /person/fullname-membership that returns the full name and membership status of the person.
Return the properties fullName and isMember.
API Call: <http://localhost:3000/person/fullname-membership>
*/

function getfullNameandMemberShip(person) {
  return {
    fullName: getFullName(person),
    ismember: person.isMember,
  };
}

app.get('/person/fullname-membership', (req, res) => {
  const fullNameandMemberShip = getfullNameandMemberShip(person);
  res.json(fullNameandMemberShip);
});

/*
Exercise 6: Get Final Price After Discount for Members
Steps:
Create an endpoint /person/final-price that takes the cart total and returns the final price after applying a 10% discount if the person is a member.
Define the variable cartTotal to take the input.
API Call: <http://localhost:3000/person/final-price?cartTotal=1000>
*/

function processCartTotal(cartTotal, person) {
  if (person.isMember) {
    return cartTotal - cartTotal / 10;
  } else {
    return cartTotal;
  }
}

app.get('/person/final-price', (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);
  const finalPrice = processCartTotal(cartTotal, person).toFixed(2);
  res.json({ finalPrice });
});

/* 
Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status
Steps:
Create an endpoint /person/shipping-cost that takes the cart total and returns the shipping cost.
Define the variable cartTotal to take the input.
API Call: <http://localhost:3000/person/shipping-cost?cartTotal=600>
*/

function getShippingCost(person, cartTotal) {
  let shippingCost;
  if (person.isMember && cartTotal > 500) {
    shippingCost = 0;
  } else {
    shippingCost = 99;
  }
  return shippingCost.toFixed(2);
}

app.get('/person/shipping-cost', (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);
  const shippingCost = getShippingCost(person, cartTotal);
  res.send({ shippingCost });
});

// ---------------------------------HW1--------------------------------------------


/* 
Question 1:
Create an endpoint that returns the details of a book stored on the server.
Write an Express code snippet to return the book object.
Define an endpoint /book using the get method.
Inside the endpoint, send the book object as a JSON response.
API Call: <http://localhost:3000/book>
*/

const book = {
    title: 'Atomic habits',
    author: 'James clear',
    publicationYear: 2018,
    genre: 'Self-help book',
    isAvailable: true,
    stock: 5,
  };
  
  app.get('/book', (req, res) => {
    res.json(book);
  });
  
  /*
  Question 2:
  Design an endpoint that provides the full title and author of the book.
  Write an Express code snippet to access the full title and author of the book.
  Define an endpoint /book/fulltitle-author using the get method.
  Implement a function getFullTitleAndAuthor(book) that returns the full title and author of the book.
  Inside the endpoint, call the getFullTitleAndAuthor function and send the result as a JSON response.
  API Call: <http://localhost:3000/book/fulltitle-author>
  */
  
  function getFullTitleAndAuthor(book) {
    return `${book.title} by ${book.author}`;
  }
  
  app.get('/book/fulltitle-author', (req, res) => {
    const titleAndAuthor = getFullTitleAndAuthor(book);
    res.json({ titleAndAuthor });
  });
  
  /*
  Question 3:
  Develop an endpoint to access the genre and availability status of the book.
  Write an Express code snippet to access the genre and availability of the book.
  Define an endpoint /book/genre-availability using the get method.
  Implement a function getGenreAndAvailability(book) that returns the genre and availability of the book.
  Inside the endpoint, call the getGenreAndAvailability function and send the result as a JSON response.
  API Call: <http://localhost:3000/book/genre-availability>
  */
  
  function getGenreAndAvailability(book) {
    return {
      genre: book.genre,
      isAvailable: book.isAvailable,
    };
  }
  
  app.get('/book/genre-availability', (req, res) => {
    const genreAndAvailability = getGenreAndAvailability(book);
    res.json(genreAndAvailability);
  });
  
  /*
  Question 4:
  Create an endpoint to calculate and return the age of the book.
  Write an Express code snippet to calculate and return the age of the book.
  Define an endpoint /book/age using the get method.
  Implement a function calculateBookAge(book) that calculates the age of the book.
  Inside the endpoint, call the calculateBookAge function and send the result as a JSON response.
  API Call: <http://localhost:3000/book/age>
  */
  
  function calculateBookAge(book) {
    const bookAge = 2024 - book.publicationYear;
    return { age: bookAge };
  }
  
  app.get('/book/age', (req, res) => {
    const bookAge = calculateBookAge(book);
    res.json(bookAge);
  });
  
  /* 
  Question 5:
  Implement an endpoint to provide a summary of the book including its title, author, genre, and publication year.
  Write an Express code snippet to return a summary of the book.
  Define an endpoint /book/summary using the get method.
  Implement a function getBookSummary(book) that returns a summary of the book.
  Inside the endpoint, call the getBookSummary function and send the result as a JSON response.
  API Call: <http://localhost:3000/book/summary>
  */
  
  function getBookSummary(book) {
    const bookSummary = `Title: ${book.title}, Author: ${book.author}, Genere: ${book.genre}, Published: ${book.publicationYear}`;
    return { summary: bookSummary };
  }
  
  app.get('/book/summary', (req, res) => {
    const bookSummary = getBookSummary(book);
    res.json(bookSummary);
  });
  
  /*
  Question 6:
  Develop an endpoint to check the stock status of the book and determine if an order is required.
  Write an Express code snippet to check the stock and order status of the book.
  Define an endpoint /book/stock-status using the get method.
  Implement a function checkStockAndOrder(book) that checks the stock and determines if an order is required.
  Inside the endpoint, call the checkStockAndOrder function and send the result as a JSON response.
  API Call: <http://localhost:3000/book/stock-status>
  */
  
  function checkStockAndOrder(book) {
    if (book.stock !== 0) {
      return { status: 'In Stock', stock: book.stock };
    } else {
      return { status: 'Out of Stock', stock: book.stock };
    }
  }
  
  app.get('/book/stock-status', (req, res) => {
    const stockStatus = checkStockAndOrder(book);
    res.json(stockStatus);
  });

  //--------------------------------------HW2-------------------------------------------

  //Server Data:
const gitHubPublicData = {
    username: 'Shoaib1234',
    fullName: 'Shoaib Tamboli',
    email: 'shoaibtamboli@gmail.com',
    repositories: 25,
    gists: 12,
    joinedOn: 'July 2021',
  };
  
  /*
  Exercise 1: Profile URL
  Define the function getProfileUrl to return the GitHub profile URL of the user.
  Declare a GET endpoint /github-profile to use the getProfileUrl function.
  Sample Endpoint: /github-profile
  */
  
  function getProfileUrl(gitHubData) {
    return {
      profileUrl: `https://github.com/${gitHubData.username}`,
    };
  }
  
  app.get('/github-profile', (req, res) => {
    const profileData = getProfileUrl(gitHubPublicData);
    res.json(profileData);
  });
  
  /*
  Exercise 2: Public Email
  Define the function getPublicEmail to return the GitHub email of the user.
  Declare a GET endpoint /github-public-email to use the getPublicEmail function.
  Sample Endpoint: http://localhost:3000/github-public-email
  */
  function getPublicEmail(gitHubData) {
    return `${gitHubData.email}`;
  }
  
  app.get('/github-public-email', (req, res) => {
    const publicEmail = getPublicEmail(gitHubPublicData);
    res.json({ publicEmail });
  });
  
  /*
  Exercise 3: Get Repos Count
  Define the function getReposCount to return the number of repositories the user has.
  Declare a GET endpoint /github-repos-count to use the getReposCount function.
  Sample Endpoint: http://localhost:3000/github-repos-count
  */
  
  function getReposCount(gitHubData) {
    return gitHubData.repositories;
  }
  
  app.get('/github-repos-count', (req, res) => {
    const reposCount = getReposCount(gitHubPublicData);
    res.json({ reposCount });
  });
  
  /*
  Exercise 4: Get Gists Count
  Define the function getGistsCount to return the number of gists the user has.
  Declare a GET endpoint /github-gists-count to use the getGistsCount function.
  Sample Endpoint: http://localhost:3000/github-gists-count
  */
  
  function getGistsCount(gitHubData) {
    return gitHubData.gists;
  }
  
  app.get('/github-gists-count', (req, res) => {
    const gistsCount = getGistsCount(gitHubPublicData);
    res.json({ gistsCount });
  });
  
  /*
  Exercise 5: Get User Bio
  Define the function getUserBio to return the user's bio.
  Declare a GET endpoint /github-user-bio to use the getUserBio function.
  Sample Endpoint: http://localhost:3000/github-user-bio
  */
  
  function getUserBio(gitHubData) {
    return {
      fullName: gitHubData.fullName,
      joinedOn: gitHubData.joinedOn,
      email: gitHubData.email,
    };
  }
  
  app.get('/github-user-bio', (req, res) => {
    const userBio = getUserBio(gitHubPublicData);
    res.json(userBio);
  });
  
  /*
  Exercise 6: Repository URL
  Define the function getRepoUrl to return the URL of a specific repository.
  Declare a GET endpoint /github-repo-url to use the getRepoUrl function.
  Sample Endpoint: http://localhost:3000/github-repo-url?repoName=backend_course
  */
  function getRepoUrl(gitHubData, repoName) {
    return `https://github.com/${gitHubData.username}/${repoName}`;
  }
  
  app.get('/github-repo-url', (req, res) => {
    const repoName = req.query.repoName;
    const repoUrl = getRepoUrl(gitHubPublicData, repoName);
    res.json({ repoUrl });
  });
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
