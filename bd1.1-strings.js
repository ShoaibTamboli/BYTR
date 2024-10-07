const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Q1: Create an endpoint that takes a name as a query parameter and returns it in uppercase.

app.get('/shout', (req, res) => {
  const name = req.query.name;
  const upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

// Q2: Create an endpoint that takes firstName and lastName as query parameters and returns the full name.
// API Call: /fullname?firstName=Shoaib&lastName=Tamboli

app.get('/fullName', (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  // const fullName = `${firstName} ${lastName}`; --using template literal
  const fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

//Q3: Create an endpoint that takes month and year as query parameters and returns a formatted date in the format 'Month, Year'.
// API Call: /date?month=Sep&year=2024

app.get('/date', (req, res) => {
  const month = req.query.month;
  const year = req.query.year;
  // const formattedDate = `${month}, ${year}`;
  const formattedDate = month + ', ' + year;
  res.send(formattedDate);
});

// Q4: Create an endpoint that takes a name as a query parameter and returns a greeting in the format 'Namaste, Name!'.
// API Call: /greet?name=Shoaib

app.get('/greet', (req, res) => {
  const name = req.query.name;
  // const greetUser = `Namaste, ${name}!`;
  const greetUser = 'Namaste, ' + name + '!';
  res.send(greetUser);
});

//Q5:Create an endpoint that takes street, city, and state as query parameters and returns a formatted address.
//API Call: /address?street=123%20Main%20St&city=Springfield&state=IL

app.get('/address', (req, res) => {
  const street = req.query.street;
  const city = req.query.city;
  const state = req.query.state;

  // const formattedAddress = `${street}, ${city}, ${state}`;
  const formattedAddress = street + ', ' + city + ', ' + state;
  res.send(formattedAddress);
});

//Q6: Create an endpoint that takes username and domain as query parameters and returns a formatted email address.
//API Call: /email?username=shoaibtamboli03&domain=gmail.com

app.get('/email', (req, res) => {
  const username = req.query.username;
  const domain = req.query.domain;
  // const formattedAddress = `${username}@${domain}`;
  const formattedAddress = username + '@' + domain;
  res.send(formattedAddress);
});

// ------------------------HW1-----------------------------------------

/*
Q1: Create an endpoint that takes a name as a query parameter and returns it in lowercase.
API Call: /whisper?name=John
*/

app.get('/whisper', (req, res) => {
    const name = req.query.name;
    const lowerCaseName = name.toLowerCase();
    res.send(lowerCaseName);
  });
  
  /*
  Q2: Create an endpoint that takes companyName and productName as query parameters and returns the full product name.
  API Call: /full-product-name?companyName=Apple&productName=iPhone
  */
  
  app.get('/full-product-name', (req, res) => {
    const companyName = req.query.companyName;
    const productName = req.query.productName;
    const fullProductName = `${companyName} ${productName}`;
    res.send(fullProductName);
  });
  
  /* 
  Q3: Create an endpoint that takes month and year as query parameters and returns a concatenated date in the format 'Month/Year'.
  API Call: /date?month=05&year=2024
  */
  
  app.get('/date', (req, res) => {
    const month = req.query.month;
    const year = req.query.year;
    const formattedDate = `${month}/${year}`;
    res.send(formattedDate);
  });
  
  /* 
  Q4: Create an endpoint that takes your home city as a query parameter and returns a greeting in the format 'You live in <city name>'.
  API Call: /greet?city=Kolkata
  */
  
  app.get('/greet', (req, res) => {
    const city = req.query.city;
    const greeting = `You live in ${city}`;
    res.send(greeting);
  });
  
  /* Q5: Create an endpoint that takes capital, and country as query parameters and returns a formatted sentence in the format “[capital] is the capital of [country].”
  API Call: /capital?capital=Delhi&country=India
  */
  
  app.get('/capital', (req, res) => {
    const capital = req.query.capital;
    const country = req.query.country;
    const countryCapital = `${capital} is the capital of ${country}.`;
    res.send(countryCapital);
  });
  
  /*
  Q6: Create an endpoint that takes firstName, lastName, and domain as query parameters and returns a formatted office email address.
  API Call:/email?firstName=aman&lastName=ranjan&domain=company.com
  */
  
  app.get('/email', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const domain = req.query.domain;
    const email = `${firstName}.${lastName}@${domain}`;
    res.send(email);
  });



//------------------------------------------HW2------------------------------------------


/*
Question 1: Send a custom commit message.

type: Will represent the kind of commit. For example, feat, setup, docs, fix, etc
message: Will be a brief description summarising all the changes
Concatenate these variables in a format that will be later used as a standard for committing messages.

API Call: /custom-commit?type=feat&message=Added%20new%20API%20endpoint
*/

app.get('/custom-commit', (req, res) => {
    const type = req.query.type;
    const message = req.query.message;
    const customCommitMessage = type + ': ' + message;
    res.send(customCommitMessage);
  });
  
  /*
  Question 2: Generate certificate for students
  Declare 3 variables named firstName , lastName & courseName
  To process requests, create an endpoint /certificate
  Use the values to generate a certificate for the student
  
  API Call: /certificate?firstName=Amit&lastName=Ranjan&courseName=BytR
  */
  
  app.get('/certificate', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const courseName = req.query.courseName;
  
    const certificateDetail =
      'This certification is awarded to ' +
      firstName +
      ' ' +
      lastName +
      ' for completing the course ' +
      courseName;
    res.send(certificateDetail);
  });
  
  /* 
  Question 3: Configure a custom out-of-office message
  
  Declare 2 variables named startMonth & endMonth
  To process requests, create an endpoint /autoreply
  Use the values to send an automated message to anyone trying to get in touch with you
  
  API Call: /autoreply?startMonth=May&endMonth=June
  
  Expected Output: Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from May till June. Your enquiry will be resolved by another colleague.
  */
  
  app.get('/autoreply', (req, res) => {
    const startMonth = req.query.startMonth;
    const endMonth = req.query.endMonth;
    const autoMessage =
      "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " +
      startMonth +
      ' till ' +
      endMonth +
      '.  Your enquiry will be resolved by another colleague.';
    res.send(autoMessage);
  });
  
  /*
  Question 4: Send a secure URL
  
  Declare a variable domain
  To process requests, create an endpoint /secureurl
  
  Use the value to send a secure URL back to the user.
  
  API Call: http://localhost:3000/secureurl?domain=app.invact.com
  Expected Output: https://app.invact.com
  */
  
  app.get('/secureurl', (req, res) => {
    const domain = req.query.domain;
    const secureUrl = 'https://' + domain;
    res.send(secureUrl);
  });
  
  /* 
  
  Question 5: Send a verification OTP
  
  Declare a variable otpCode
  
  To process requests, create an endpoint /sendotp
  
  Use the value to send a verification OTP message
  
  API Call: http://localhost:3000/sendotp?otpCode=1234
  
  Expected Output: Your OTP for account verification is 1234. Do not share this with anyone
  */
  
  app.get('/sendotp', (req, res) => {
    const otpCode = req.query.otpCode;
    const otpMessage =
      'Your OTP for account verification is ' +
      otpCode +
      '. Do not share this with anyone';
    res.send(otpMessage);
  });
  
  /*
  Question 6 : Send a welcome mail to new user
  
  Declare 2 variables firstName & email
  
  Make an endpoint /welcome to process the requests
  
  Use the values to send a welcome text to the user
  
  API Call: http://localhost:3000/welcome?firstName=Amit&email=amit@gmail.com
  
  Expected Output: Hey Amit. We're excited to have you here, we'll send future notifications to your registered mail (amit@gmail.com)
  */
  
  app.get('/welcome', (req, res) => {
    const firstName = req.query.firstName;
    const email = req.query.email;
    const welcomeText =
      'Hey ' +
      firstName +
      ". We're excited to have you here, we'll send future notifications to your registered mail (" +
      email +
      ')';
    res.send(welcomeText);
  });
  
  /*
  Question 7: Generate Github profile URL
  
  Declare a variable username
  
  Make an endpoint /github-profile to process the requests
  
  Generate a Github profile URL by using the provided username
  
  API Call: http://localhost:3000/github-profile?userName=ankitkumar123
  
  Expected Output: https://github.com/ankitkumar123
  */
  
  app.get('/github-profile', (req, res) => {
    const username = req.query.userName;
    const userProfile = 'https://github.com/' + username;
    res.send(userProfile);
  });
  
  /*
  Question 8: Convert text into CSV row format
  
  Declare variables named id, email, rollNumber
  Make an endpoint /text-to-csv to process the requests
  Using the provided values return a valid CSV row
  
  API Call: http://localhost:3000/text-to-csv?id=1254&email=example@gmail.com&rollNumber=24
  
  Expected Output: 1254, example@gmail.com, 24
  */
  
  app.get('/text-to-csv', (req, res) => {
    const id = req.query.id;
    const email = req.query.email;
    const rollNumber = req.query.rollNumber;
    const result = id + ', ' + email + ', ' + rollNumber;
    res.send(result);
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
