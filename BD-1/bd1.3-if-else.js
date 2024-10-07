const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Question 1:
Create an endpoint that takes a number as a query parameter and returns if the number is positive or negative.
Write an Express code snippet.
Declare an endpoint check-number using the get keyword.
Declare a variable number to take the input.
Parse the input as a float and check if the number is positive or negative.
Return the result as a string.

API Call: <http://localhost:3000/check-number?number=-5>
Expected Output: Number is negative
*/

app.get('/check-number', (req, res) => {
  const number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'Number is positive';
  } else {
    result = 'Number is negative';
  }
  res.send(result);
});

/*
Question 2:
Create an endpoint that takes a number as a query parameter and returns if the number is even or odd.
Write an Express code snippet.
Declare an endpoint check-even-odd using the get keyword.
Declare a variable number to take the input.
Parse the input as an integer and check if the number is even or odd.
Return the result as a string.

API Call: <http://localhost:3000/check-even-odd?number=4>
Expected Output: Number is even
*/
app.get('/check-even-odd', (req, res) => {
  const number = parseInt(req.query.number);
  let result;
  if (number % 2 === 0) {
    result = 'even';
  } else {
    result = 'odd';
  }
  res.send('Number is ' + result);
});

/*
Question 3:
Create an endpoint that takes a boolean query parameter isLoggedIn and returns if the user is logged in.
Write an Express code snippet.
Declare an endpoint check-login using the get keyword.
Declare a variable isLoggedIn to take the input.
Parse the input as a boolean and check if the user is logged in.
Return the result as a string.

API Call: <http://localhost:3000/check-login?isLoggedIn=true>
Expected Output: User is logged in

*/

app.get('/check-login', (req, res) => {
  const isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'logged in';
  } else {
    result = 'not logged in';
  }
  res.send('User is ' + result);
});

/*
Question 4:
Create an endpoint that takes an age as a query parameter and returns if the user is eligible for a discount (age over 65).
Write an Express code snippet.
Declare an endpoint check-discount using the get keyword.
Declare a variable age to take the input.
Parse the input as an integer and check if the user is eligible for a discount.
Return the result as a string.

API Call: <http://localhost:3000/check-discount?age=70>
Expected Output: User is eligible for a discount
*/

app.get('/check-discount', (req, res) => {
  const age = parseInt(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for a discount';
  } else {
    result = 'User is not eligible for a discount ';
  }
  res.send(result);
});

/*
Question 5:
Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero.
Write an Express code snippet.
Declare an endpoint check-number-type using the get keyword.
Declare a variable number to take the input.
Parse the input as a float and check if the number is positive, negative, or zero.
Return the result as a string.

API Call: <http://localhost:3000/check-number-type?number=0>
Expected Output: Number is zero
*/
app.get('/check-number-type', (req, res) => {
  const number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'Number is positive';
  } else if (number < 0) {
    result = 'Number is negative';
  } else {
    result = 'Number is zero';
  }
  res.send(result);
});

/*
Question 6:
Create an endpoint that takes a temperature as a query parameter and returns if the temperature is cold (below 15°C), warm (15°C to 25°C), or hot (above 25°C).
Write an Express code snippet.
Declare an endpoint check-temperature using the get keyword.
Declare a variable temperature to take the input.
Parse the input as a float and check if the temperature is cold, warm, or hot.
Return the result as a string.

API Call: <http://localhost:3000/check-temperature?temperature=20>
Expected Output: Temperature is warm
*/

app.get('/check-temperature', (req, res) => {
  const temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = 'cold';
  } else if (temperature <= 25) {
    result = 'warm';
  } else {
    result = 'hot';
  }
  res.send('Temprature is ' + result);
});

/*
Question 7:
Create an endpoint that takes a steps as a query parameter and returns if the user's activity level is low (below 5000), moderate (5000 to 10000), or high (above 10000).
Write an Express code snippet.
Declare an endpoint check-activity-level using the get keyword.
Declare a variable steps to take the input.
Parse the input as an integer and check if the activity level is low, moderate, or high.
Return the result as a string.

API Call: <http://localhost:3000/check-activity-level?steps=7500>
Expected Output: Activity level is moderate
*/

app.get('/check-activity-level', (req, res) => {
  const steps = parseInt(req.query.steps);
  let result;
  if (steps < 5000) {
    result = 'low';
  } else if (steps <= 10000) {
    result = 'moderate';
  } else {
    result = 'high';
  }
  res.send('Activity level is ' + result);
});

/*
Question 8:
Create an endpoint that takes likes as a query parameter and returns if a social media post has low (below 100), medium (100 to 500), or high engagement (above 500).
Write an Express code snippet.
Declare an endpoint check-engagement using the get keyword.
Declare a variable likes to take the input.
Parse the input as an integer and check if the engagement level is low, medium, or high.
Return the result as a string.

API Call: <http://localhost:3000/check-engagement?likes=250>
Expected Output: Engagement level is medium
*/

app.get('/check-engagement', (req, res) => {
  const likes = parseInt(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes <= 500) {
    result = 'medium';
  } else {
    result = 'high';
  }
  res.send('Engagement level is ' + result);
});

// ------------------------------------ HW1---------------------------------------------------


/*
Question 1:
Create an endpoint that takes a number as a query parameter and returns whether the number is a whole number or not.
Write an Express code snippet.
Declare an endpoint check-whole-number using the get keyword.
Declare a variable number to take the input.
Declare a variable result. If the number is whole (≥0), assign “whole” to the result. Else, assign “not whole”.

API Call: <http://localhost:3000/check-whole-number?number=10>
Expected Output: Number is whole number
*/

app.get('/check-whole-number', (req, res) => {
    const number = parseFloat(req.query.number);
    let result;
    if (number >= 0) {
      result = 'whole';
    } else {
      result = 'not whole';
    }
    res.send('Number is ' + result + ' number');
  });
  
  /* 
  Question 2:
  Create an endpoint that takes two numbers as a query parameter and returns whether the numbers are equal or not.
  Write an Express code snippet.
  Declare an endpoint check-equal using the get keyword.
  Declare two variables num1 and num2 to take the input.
  Declare a variable result. If the two numbers are equal, assign “equal” to the result. Else, assign “not equal”.
  Return the result. Eg., Number is equal
  
  API Call: <http://localhost:3000/check-equal?num1=40&num2=45>
  Expected Output: Numbers are not equal
  */
  
  app.get('/check-equal', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    let result;
    if (num1 === num2) {
      result = 'equal';
    } else {
      result = 'not equal';
    }
    res.send('Numbers are ' + result);
  });
  
  /*
  Question 3:
  Create an endpoint that takes a boolean query parameter indicating if a user is active and returns 'User is Active' or 'User is not Active'.
  Write an Express code snippet.
  Declare an endpoint check-active using the get keyword.
  Declare a variable isActive to take the input.
  Declare a variable result. If the user is active, assign “User is Active” to the result. Else, assign “User is not Active”.
  Return the result. Eg., User is Active
  
  API Call: <http://localhost:3000/check-active?isActive=true>
  Expected Output: User is Active
  */
  
  app.get('/check-active', (req, res) => {
    const isActive = req.query.isActive === 'true';
    let result;
    if (isActive) {
      result = 'User is Active';
    } else {
      result = 'User is not Active';
    }
    res.send(result);
  });
  
  /* 
  Question 4:
  Create an endpoint that takes a user's cost of goods bought as a query parameter and returns 'User is eligible for a discount' if the cost is over 1000, otherwise 'User is not eligible for a discount'.
  Write an Express code snippet.
  Declare an endpoint check-discount using the get keyword.
  Declare a variable cost to take the input.
  Declare a variable result. If the cost is more than 1000, assign “User is eligible for a discount” to the result. Else, assign “User is not eligible for a discount”.
  Return the result.
  
  API Call: <http://localhost:3000/check-discount?cost=1700>
  Expected Output: User is eligible for a discount
  */
  
  app.get('/check-discount', (req, res) => {
    const cost = parseInt(req.query.cost);
    let result;
    if (cost > 1000) {
      result = 'User is eligible for a discount';
    } else {
      result = 'User is not eligible for a discount';
    }
    res.send(result);
  });
  
  /*
  Question 5:
  Create an endpoint that takes work experience (in years) as a query parameter and returns whether the person is experienced, fresher, or non-working.
  Write an Express code snippet.
  Declare an endpoint check-experience using the get keyword.
  Declare a variable workExperience to take the input.
  Declare a variable result. If the workExperience are more than 0, assign “experienced” to the result. Else if the workExperience are less than 0, assign “non-working” to the result. Else, assign “fresher”.
  Return the result. Eg., Person is experienced
  
  API Call: <http://localhost:3000/check-experience?workExperience=5>
  Expected Output: Person is experienced
  */
  
  app.get('/check-experience', (req, res) => {
    const workExperience = parseFloat(req.query.workExperience);
    let result;
    if (workExperience > 0) {
      result = 'experienced';
    } else if (workExperience < 0) {
      result = 'non-working';
    } else {
      result = 'fresher';
    }
    res.send('Person is ' + result);
  });
  
  /* 
  Question 6:
  Create an endpoint that takes the result as a query parameter and returns whether the grade is Grade A (above 80), B (between 50 to 80), or Fail (below 50).
  Write an Express code snippet.
  Declare an endpoint check-result using the get keyword.
  Declare a variable result to take the input.
  Declare a variable grade. If the result is more than 80, assign “A” to the grade. Else if the result is more than 50 but less than 80, assign “B” to the result. Else, assign “Fail”.
  Return the result. Eg., The grade is A
  
  API Call: <http://localhost:3000/check-result?result=70>
  Expected Output: The grade is B
  */
  
  app.get('/check-result', (req, res) => {
    const result = parseFloat(req.query.result);
    let grade;
    if (result > 80) {
      grade = 'A';
    } else if (result >= 50) {
      grade = 'B';
    } else {
      grade = 'Fail';
    }
    res.send('The grade is ' + grade);
  });
  
  /*
  Question 7:
  Create an endpoint that takes the number of steps as a query parameter and returns whether the student’s attendance is low (less than 50 classes), moderate (50 to 90 classes), or high (more than 90 classes).
  Write an Express code snippet.
  Declare an endpoint check-attendance using the get keyword.
  Declare a variable attendance to take the input.
  Declare a variable result. If the attendance is less than 50 classes, assign “low” to the result. Else if the attendance is less than 90, assign “moderate” to the result. Else, assign “high”.
  Return the result. Eg., Attendance is high
  
  API Call: <http://localhost:3000/check-attendance?attendance=95>
  Expected Output: Attendance is high
  */
  
  app.get('/check-attendance', (req, res) => {
    const attendance = parseInt(req.query.attendance);
    let result;
    if (attendance < 50) {
      result = 'low';
    } else if (attendance < 90) {
      result = 'moderate';
    } else {
      result = 'high';
    }
    res.send('Attendance is ' + result);
  });
  
  /*
  Question 8:
  Create an endpoint that takes the number of stars a restaurant has as a query parameter and returns whether the restaurant rating is low (less than 3 stars), medium (3 or 4 stars), or high (5 stars).
  Write an Express code snippet.
  Declare an endpoint check-rating using the get keyword.
  Declare a variable stars to take the input.
  Declare a variable result. If the rating is less than 3 stars, assign “low” to the result. Else if the rating is less than or equal to 4 stars, assign “moderate” to the result. Else, assign “high”.
  Return the result. Eg., Restaurant rating is high
  
  API Call: <http://localhost:3000/check-rating?stars=4>
  Expected Output: Restaurant rating is medium
  */
  
  app.get('/check-rating', (req, res) => {
    const stars = parseInt(req.query.stars);
    let result;
    if (stars < 3) {
      result = 'low';
    } else if (stars <= 4) {
      result = 'moderate';
    } else {
      result = 'high';
    }
    res.send('Restaurant rating is ' + result);
  });
  

  //--------------------------HW2------------------------------------------------------------

  
/*
Question 1:
Calculate a person’s BMI category given weight (kilograms) and height(meters)
Write an Express code snippet.
Declare an endpoint /check-bmi using the get keyword.
Declare 2 variables height & weight to take the inputs.
Use the formula to calculate the BMI and return the result in the expected format

API Call: http://localhost:3000/check-bmi?weight=70&height=1.75
Expected Output: BMI category is normal weight

*/

app.get('/check-bmi', (req, res) => {
    const height = parseFloat(req.query.height);
    const weight = parseFloat(req.query.weight);
    const bmi = weight / (height * height);
    let result;
    if (bmi < 18.5) {
      result = 'under weight';
    } else if (bmi < 24.9) {
      result = 'normal weight';
    } else if (bmi < 29.9) {
      result = 'over weight';
    } else {
      result = 'obese';
    }
    res.send(`BMI category is ${result}`);
  });
  
  /*
  Question 2:
  Calculate a student’s academic performance based on their grade
  Write an Express code snippet.
  Declare an endpoint /check-performance using the get keyword.
  Declare a variable grade to take the input.
  Check their performance based on 3 categories
  grade >= 90 = 'excellent'
  grade >= 75 = 'good'
  grade ≥ 50 = 'average'
  other wise 'poor'
  
  API Call: http://localhost:3000/check-performance?grade=91
  Expected Output: Academic performance is excellent
  */
  
  app.get('/check-performance', (req, res) => {
    const grade = parseFloat(req.query.grade);
    let result;
    if (grade >= 90) {
      result = 'excellent';
    } else if (grade >= 75) {
      result = 'good';
    } else if (grade >= 50) {
      result = 'average';
    } else {
      result = 'poor';
    }
    res.send(`Academic performance is ${result}`);
  });
  
  /*
  Question 3:
  Calculate a person’s age group given their age
  Write an Express code snippet.
  Declare an endpoint /check-age-group using the get keyword.
  Declare a variable age to take the input.
  Based on their age calculate the age group they belong in
  age <= 12 = 'child'
  age <=17 = 'teenager'
  age <= 64 = 'adult'
  otherwise 'senior'
  
  API Call: <http://localhost:3000/check-age-group?age=25>
  Expected Output: Age group is adult
  */
  
  app.get('/check-age-group', (req, res) => {
    const age = parseInt(req.query.age);
    let result;
    if (age <= 12) {
      result = 'child';
    } else if (age <= 17) {
      result = 'teenager';
    } else if (age <= 64) {
      result = 'adult';
    } else {
      result = 'senior';
    }
    res.send(`Age group is ${result}`);
  });
  
  /*
  Question 4:
  Calculate a person’s loan eligibility given creditScore
  Write an Express code snippet.
  Declare an endpoint /check-loan-eligibility using the get keyword.
  Declare a variable creditScore to take the input.
  Use the creditScore to determine loan eligibility
  creditScore >= 750 = 'high'
  creditScore >= 650 = 'medium'
  Otherwise 'low'
  
  API Call: http://localhost:3000/check-loan-eligibility?creditScore=670
  Expected Output: Loan eligibility is medium
  */
  
  app.get('/check-loan-eligibility', (req, res) => {
    const creditScore = parseInt(req.query.creditScore);
    let result;
    if (creditScore >= 750) {
      result = 'high';
    } else if (creditScore >= 650) {
      result = 'medium';
    } else {
      result = 'low';
    }
    res.send(`Loan eligibility is ${result}`);
  });
  
  /*
  Question 5:
  Given a person’s income calculate the tax bracket they fall in
  Write an Express code snippet.
  Declare an endpoint /check-tax-bracket using the get keyword.
  Declare a variable income to take the input
  Use the income to calculate the tax bracket
  income <= 500000 = '10% tax bracket'
  income <= 1000000 = '15% tax bracket'
  income <= 1500000 = '20% tax bracket'
  otherwise '30% tax bracket'
  
  API Call: <http://localhost:3000/check-tax-bracket?income=720000>
  Expected Output: You fall under the 15% tax bracket
  */
  
  app.get('/check-tax-bracket', (req, res) => {
    const income = parseFloat(req.query.income);
    let result;
    if (income <= 50000) {
      result = '10% tax bracket';
    } else if (income <= 1000000) {
      result = '15% tax bracket';
    } else if (income <= 1500000) {
      result = '20% tax bracket';
    } else {
      result = '30% tax bracket';
    }
    res.send(`You fall under the ${result}`);
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
