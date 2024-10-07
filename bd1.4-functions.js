const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Question 1:
Create an endpoint that returns a welcome message.
Write an Express code snippet.
Declare an endpoint welcome using the get keyword.
Use a function getWelcomeMessage to return the welcome message.
Return the welcome message as a response.

API Call: <http://localhost:3000/welcome>
Expected Output: Welcome to our service!
*/
function getWelcomeMessage() {
  return `Welcome to our service!`;
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

/*
Question 2:
Create an endpoint that takes a username as a query parameter and returns a greeting message.
Write an Express code snippet.
Declare an endpoint greet using the get keyword.
Declare a variable username to take the input.
Use a function getGreetingMessage to return the greeting message.
Concatenate the user name to return the greeting as “Hello, <name>!”.
Return the greeting message as a response.

API Call: <http://localhost:3000/greet?username=John>
Expected Output: Hello, John!
*/
function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}
app.get('/greet', (req, res) => {
  const username = req.query.username;
  res.send(getGreetingMessage(username));
});

/* 
Question 3:
Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.
Write an Express code snippet.
Declare an endpoint check-password using the get keyword.
Declare a variable password to take the input.
Use the function checkPasswordStrength to check the password strength.
A password is considered strong if its length is greater than 15.
Return the result as a response.

API Call: <http://localhost:3000/check-password?password=myverystrongpassword>
Expected Output: Password is strong
*/

function checkPasswordStrength(password) {
  let result;
  if (password.length > 15) {
    result = `strong`;
  } else {
    result = `weak`;
  }
  return 'Password is ' + result;
}

app.get('/check-password', (req, res) => {
  const password = req.query.password;
  res.send(checkPasswordStrength(password));
});

/*
Question 4:
Create an endpoint that takes two numbers as query parameters and returns their sum.
Write an Express code snippet.
Declare an endpoint sum using the get keyword.
Declare variables num1 and num2 to take the inputs.
Use a function getSum to calculate the sum.
Return the sum as a response.

API Call: <http://localhost:3000/sum?num1=5&num2=10>
Expected Output: 15
*/
function getSum(num1, num2) {
  return (num1 + num2).toString();
}
app.get('/sum', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2));
});
/*
Question 5:
Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
Write an Express code snippet.
Declare an endpoint subscription-status using the get keyword.
Declare variables username and isSubscribed to take the inputs.
Use a function getSubscriptionStatus to check the subscription status.
Return the result as a response.

API Call: <http://localhost:3000/subscription-status?username=John&isSubscribed=true>
Expected Output: John is subscribed
*/
function getSubscriptionStatus(user, isSubscribed) {
  if (isSubscribed) {
    return `${user} is subscribed `;
  } else {
    return `${user} is not subscribed `;
  }
}
app.get('/subscription-status', (req, res) => {
  const username = req.query.username;
  const isSubscribed = req.query.isSubscribed === 'true';

  res.send(getSubscriptionStatus(username, isSubscribed));
});

/* 
Question 6:
Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.
Write an Express code snippet.
Declare an endpoint discounted-price using the get keyword.
Declare variables price and discount to take the inputs.
Use a function getDiscountedPrice to calculate the final price after the discount.
Return the final price as a response.

API Call: <http://localhost:3000/discounted-price?price=100&discount=10>
Expected Output: 90
*/
function getDiscountedPrice(price, discount) {
  const finalPrice = price - price * (discount / 100);
  return finalPrice.toString();
}
app.get('/discounted-price', (req, res) => {
  const price = parseFloat(req.query.price);
  const discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount));
});

/* 
Question 7:
Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.
Write an Express code snippet.
Declare an endpoint personalized-greeting using the get keyword.
Declare variables age, gender, and name to take the inputs.
Use a function getPersonalizedGreeting to return the personalized greeting message.
Return the personalized greeting message as a response.

API Call: <http://localhost:3000/personalized-greeting?age=25&gender=male&name=John>
Expected Output: Hello, John! You are a 25 year old male
*/

function getPersonalizedGreeting(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}`;
}
app.get('/personalized-greeting', (req, res) => {
  const age = parseInt(req.query.age);
  const gender = req.query.gender;
  const name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});
/*
Question 8:
Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.
Write an Express code snippet.
Declare an endpoint final-price using the get keyword.
Declare variables price, discount, and tax to take the inputs.
Use a function getFinalPrice to calculate the final price after discount and tax.
First, calculate the discounted price.
Then apply tax on the discounted price to calculate the final price.
Return the final price as a response.

API Call: <http://localhost:3000/final-price?price=100&discount=10&tax=5>
Expected Output: 94.5
*/

function getFinalPrice(price, discount, tax) {
  const disocuntedPrice = price - price * (discount / 100);
  const finalPrice = disocuntedPrice + disocuntedPrice * (tax / 100);
  return finalPrice.toString();
}
app.get('/final-price', (req, res) => {
  const price = parseFloat(req.query.price);
  const discount = parseFloat(req.query.discount);
  const tax = parseFloat(req.query.tax);

  res.send(getFinalPrice(price, discount, tax));
});
/*
Question 9:
Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.
Write an Express code snippet.
Declare an endpoint total-exercise-time using the get keyword.
Declare variables running, cycling, and swimming to take the inputs.
Use a function getTotalExerciseTime to calculate the total exercise time.
Return the total exercise time as a response.

API Call: <http://localhost:3000/total-exercise-time?running=30&cycling=40&swimming=50>
Expected Output: 120
*/

function getTotalExerciseTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}

app.get('/total-exercise-time', (req, res) => {
  const running = parseFloat(req.query.running);
  const cycling = parseFloat(req.query.cycling);
  const swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming));
});

//-----------------------------Hw1------------------------------------------------------------------


/*
Question 1:
Create an endpoint that returns a welcome message to a student who wants to learn functions.
Eg., We will learn functions!
Write an Express code snippet.
Declare an endpoint welcome using the get keyword.
Use a function getWelcomeMessage to return the welcome message.
Return the welcome message as a response.

API Call: <http://localhost:3000/welcome>
Expected Output: We will now learn functions!
*/

function getWelcomeMessage() {
    return `We will now learn functions!`;
  }
  
  app.get('/welcome', (req, res) => {
    res.send(getWelcomeMessage());
  });
  
  /*
  Question 2:
  Create an endpoint that takes a username as a query parameter and returns a greeting message.
  Write an Express code snippet.
  Declare an endpoint greet using the get keyword.
  Declare a variable username to take the input.
  Use a function getGreetingMessage to return the greeting message.
  Return the greeting message as a response.
  
  API Call: <http://localhost:3000/greet?username=John>
  Expected Output: Hey, John! Are you ready to learn functions with us?
  */
  
  function getGreetingMessage(username) {
    return `Hey, ${username}! Are you ready to learn functions with us?`;
  }
  
  app.get('/greet', (req, res) => {
    const username = req.query.username;
    res.send(getGreetingMessage(username));
  });
  
  /*
  Question 3:
  Create an endpoint that takes the number of yearsOfExp in functions as a query parameter and returns a message indicating the person's experience.
  Write an Express code snippet.
  Declare an endpoint message using the get keyword.
  Declare a variable yearsOfExp to take the input.
  Use a function checkYearsOfExp to determine the person's experience.
  If the years of experience are more than 0, the output will be “You have some experience with functions. Great!” Otherwise, the output will be 'No worries. You will start writing functions in no time!'
  Return the experience message as a response.
  
  API Call: <http://localhost:3000/message?yearsOfExp=3>
  Expected Output: You have some experience with functions. Great!
  */
  
  function checkYearsOfExp(yearsOfExp) {
    let result;
    if (yearsOfExp > 0) {
      return `You have some experience with functions. Great!`;
    } else {
      return 'No worries. You will start writing functions in no time!';
    }
  }
  
  app.get('/message', (req, res) => {
    const yearsOfExp = parseFloat(req.query.yearsOfExp);
    res.send(checkYearsOfExp(yearsOfExp));
  });
  
  /*
  Question 4:
  Create an endpoint that takes the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.
  Write an Express code snippet.
  Declare an endpoint hours using the get keyword.
  Declare variables days and hours to take the inputs.
  Use a function getTime to calculate the total hours available per week.
  Return the total hours as a response.
  
  API Call: <http://localhost:3000/hours?days=5&hours=2>
  Expected Output: 10
  */
  
  function getTime(days, hours) {
    return (days * hours).toString();
  }
  
  app.get('/hours', (req, res) => {
    const days = parseFloat(req.query.days);
    const hours = parseFloat(req.query.hours);
  
    res.send(getTime(days, hours));
  });
  
  /*
  Question 5:
  Create an endpoint that takes a username and a boolean hasCompleted indicating module completion status, and returns a message indicating if the student has completed the modules or not.
  Write an Express code snippet.
  Declare an endpoint module-completion-status using the get keyword.
  Declare variables username and hasCompleted to take the inputs.
  Use a function getModuleCompletion to determine if the student has completed the modules.
  Return the completion status message as a response.
  
  API Call: <http://localhost:3000/module-completion-status?username=John&hasCompleted=true>
  Expected Output: John has completed the modules
  */
  
  function getModuleCompletion(username, hasCompleted) {
    if (hasCompleted) {
      return `${username} has completed the modules`;
    } else {
      return `${username} has not completed the modules`;
    }
  }
  
  app.get('/module-completion-status', (req, res) => {
    const username = req.query.username;
    const hasCompleted = req.query.hasCompleted === 'true';
    res.send(getModuleCompletion(username, hasCompleted));
  });
  
  /*
  Question 6:
  Create an endpoint that takes a student's city and name, and returns a personalized greeting message.
  Write an Express code snippet.
  Declare an endpoint personalized-greeting using the get keyword.
  Declare variables city and name to take the inputs.
  Use a function getPersonalizedGreeting to return the personalized greeting message.
  Return the personalized greeting message as a response.
  
  API Call: <http://localhost:3000/personalized-greeting?city=New%20York&name=John>
  Expected Output: Hey, John! What's famous about New York?
  */
  
  function getPersonalizedGreeting(city, name) {
    return `Hey, ${name}! What's famous about ${city}`;
  }
  
  app.get('/personalized-greeting', (req, res) => {
    const city = req.query.city;
    const name = req.query.name;
    res.send(getPersonalizedGreeting(city, name));
  });
  
  /*
  Question 7:
  Create an endpoint that takes a student's birthyear and returns the age.
  Write an Express code snippet.
  Declare an endpoint find-age using the get keyword.
  Declare a variable birthyear to take the input.
  Use a function findAge to calculate the age from the birth year.
  You need to subtract the birth year from the current year (2024).
  Return the age as a response.
  
  API Call: <http://localhost:3000/find-age?birthyear=1990>
  Expected Output: 34
  */
  
  function findAge(birthyear) {
    return (2024 - birthyear).toString();
  }
  
  app.get('/find-age', (req, res) => {
    const birthyear = parseInt(req.query.birthyear);
    res.send(findAge(birthyear));
  });
  
  /*
  Question 8:
  Create an endpoint that takes the number of days per week and hours per day a student can dedicate to learning functions and returns whether it is sufficient (>= 30 hours per week) or not.
  Write an Express code snippet.
  Declare an endpoint is-time-sufficient using the get keyword.
  Declare variables days and hours to take the inputs.
  Use a function findRequiredTime to calculate the total time available for learning functions.
  Return a message indicating whether the time is sufficient or not.
  
  Sample API Call: <http://localhost:3000/is-time-sufficient?days=5&hours=6>
  Expected Output: The time being dedicated is sufficient for learning functions
  */
  
  function findRequiredTime(hours, days) {
    const totalHours = hours * days;
    if (totalHours >= 30) {
      return `The time being dedicated is sufficient for learning functions`;
    } else {
      return `The time being dedicated is not sufficient for learning functions`;
    }
  }
  
  app.get('/is-time-sufficient', (req, res) => {
    const hours = parseFloat(req.query.hours);
    const days = parseFloat(req.query.days);
    res.send(findRequiredTime(hours, days));
  });

  // -----------------------------HW2---------------------------------------------


  /*
Question 1:
Given username generate a GitHub profile URL for the user
Declare a variable username
Make an endpoint /github-profile to process the requests
Generate a Github profile URL by using the provided username
For Example: https://github.com/ankitkumar123
Write a function generateProfileUrl() which takes the above variable and returns the profile url as expected

API Call: http://localhost:3000/github-profile?username=ankitkumar123
Expected Output: https://github.com/ankitkumar123
*/

function generateProfileUrl(username) {
    return `https://github.com/${username}`;
  }
  
  app.get('/github-profile', (req, res) => {
    const username = req.query.username;
    res.send(generateProfileUrl(username));
  });
  
  /*
  Question 2:
  Declare 3 variables named firstName , lastName & courseName
  To process requests, create an endpoint /certificate
  Use the values to generate a certificate for the student
  Write a function generateCertificate() which takes the above variables and returns the certificate as expected
  
  API Call: http://localhost:3000/certificate?firstName=Shoaib&lastName=Tamboli&courseName=BytR
  Expected Output: This certification is awarded to Shoaib Tamboli for completing the course BYTR
  */
  
  function generateCertificate(firstName, lastName, courseName) {
    return `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName.toUpperCase()}`;
  }
  
  app.get('/certificate', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const courseName = req.query.courseName;
    res.send(generateCertificate(firstName, lastName, courseName));
  });
  
  /*
  Question 3:
  Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage
  Write an Express code snippet.
  Declare an endpoint /grade using the get keyword.
  Declare 3 variables math, science & english to take the inputs.
  Create a function calculateGrade() which takes the above variables & returns the result.
  Calculate the students grade in percentage ( Considering the maximum marks a student can get in a subject is 100 )
  Add the 3 values & divide the result by 300
  Now multiply the result with 100
  For example: gradeInPercentage = ((subject1 + subject2 + subject3) / 300 ) * 100
  Make sure you return the percentage as Integer.
  In the end, concatenate the values to return the result in the expected format.
  
  API Call: <http://localhost:3000/grade?maths=70&science=82&english=75>
  Expected Output: Your grade in percentage is 76%
  */
  
  function calculateGrade(maths, science, english) {
    console.log(maths, science, english);
    const gradeInPercentage = Math.round(
      ((maths + science + english) / 300) * 100
    );
    return `Your grade in percentage is ${gradeInPercentage}%`;
  }
  
  app.get('/grade', (req, res) => {
    const maths = parseInt(req.query.maths);
    const science = parseInt(req.query.science);
    const english = parseInt(req.query.english);
    res.send(calculateGrade(maths, science, english));
  });
  
  /*
  Question 4:
  Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result
  Write an Express code snippet.
  Declare an endpoint /split-bill using the get keyword.
  Declare 2 variables billAmount & numberOfFriends to take the input.
  Create a function splitBill() which takes the above variables & splits the bill accordingly
  Calculate the split amount among all the friends
  let splitAmount = billAmount / numberOfFriends
  In the end, concatenate the values to return the result in the expected format.
  Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.
  
  API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3
  Expected Output: Result: Each friend owes Rs. 50 against the bill
  */
  
  function splitBill(billAmount, numberOfFriends) {
    const splitAmount = billAmount / numberOfFriends;
    return `Result: Each friend owes ₹${splitAmount} against the bill`;
  }
  
  app.get('/split-bill', (req, res) => {
    const billAmount = parseFloat(req.query.billAmount);
    const numberOfFriends = parseInt(req.query.numberOfFriends);
    res.send(splitBill(billAmount, numberOfFriends));
  });
  
  /*
  Question 5:
  Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.
  Write an Express code snippet.
  Declare an endpoint /monthly-salary using the get keyword.
  Declare 2 variables totalHours & hourlyWage to take the input.
  Create a function calculateSalary which takes the above variables & returns the result in expected format
  Calculate the employee’s monthly salary
  monthlySalary = hourlyWage * totalHours
  In the end, concatenate the values to return the result in the expected format.
  Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.
  
  API Call:http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160
  Expected Output: Result: Your monthly salary is ₹320000
  */
  
  function calculateSalary(totalHours, hourlyWage) {
    const monthlySalary = hourlyWage * totalHours;
    return `Result: Your monthly salary is ₹${monthlySalary}`;
  }
  
  app.get('/monthly-salary', (req, res) => {
    const totalHours = parseFloat(req.query.totalHours);
    const hourlyWage = parseFloat(req.query.hourlyWage);
    res.send(calculateSalary(totalHours, hourlyWage));
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
