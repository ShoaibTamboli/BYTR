const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/*
Question 1:
Create an endpoint that takes distance1 and distance2 as query parameters and returns the total distance covered by adding two trips.
Write an Express code snippet.
Declare an endpoint total-distance using the get keyword.
Declare two variables distance1 and distance2 to take the inputs.
Parse the inputs as floats and add them to calculate the totalDistance.
Return the result as a string.

API Call: <http://localhost:3000/total-distance?distance1=5.5&distance2=10.2>
Expected Output: 15.7
*/

app.get('/total-distance', (req, res) => {
  const distance1 = parseFloat(req.query.distance1);
  const distance2 = parseFloat(req.query.distance2);
  const totalDistance = (distance1 + distance2).toString();
  res.send(totalDistance);
});

/*
Question 2:

Create an endpoint that takes time1, time2, and time3 as query parameters and returns the total time spent on multiple activities.
Write an Express code snippet.
Declare an endpoint total-time using the get keyword.
Declare three variables time1, time2, and time3 to take the inputs.
Parse the inputs as floats and add them to calculate the totalTime.
Return the result as a string.

API Call: <http://localhost:3000/total-time?time1=1.5&time2=2.0&time3=0.5>
Expected Output: 4.0
*/

app.get('/total-time', (req, res) => {
  const time1 = parseFloat(req.query.time1);
  const time2 = parseFloat(req.query.time2);
  const time3 = parseFloat(req.query.time3);

  const totalTime = (time1 + time2 + time3).toFixed(1);
  res.send(totalTime);
});

/* 
Question 3:

Create an endpoint that takes totalDistance and totalTime as query parameters and returns the average speed.

Write an Express code snippet.
Declare an endpoint average-speed using the get keyword.
Declare two variables totalDistance and totalTime to take the inputs.
Parse the inputs as floats and calculate the averageSpeed by dividing the total distance by the total time.

Return the result as a string.

API Call: <http://localhost:3000/average-speed?totalDistance=150&totalTime=3>
Expected Output: 50
*/

app.get('/average-speed', (req, res) => {
  const totalDistance = parseFloat(req.query.totalDistance);
  const totalTime = parseFloat(req.query.totalTime);
  const averageSpeed = (totalDistance / totalTime).toString();

  res.send(averageSpeed);
});

/*
Question 4:
Create an endpoint that takes distance and speed as query parameters and returns the estimated time of arrival (ETA).

Write an Express code snippet.
Declare an endpoint eta using the get keyword.
Declare two variables distance and speed to take the inputs.
Parse the inputs as floats and calculate the eta by dividing the distance by the speed.
Return the result as a string.

API Call: <http://localhost:3000/eta?distance=120&speed=60>

Expected Output: 2
*/

app.get('/eta', (req, res) => {
  const distance = parseFloat(req.query.distance);
  const speed = parseFloat(req.query.speed);
  const eta = (distance / speed).toString();

  res.send(eta);
});

/* 
Question 5:

Create an endpoint that takes duration1, duration2, and caloriesPerMinute as query parameters and returns the total calories burned based on activity duration and calories burned per minute.
Write an Express code snippet.
Declare an endpoint total-calories using the get keyword.
Declare three variables duration1, duration2, and caloriesPerMinute to take the inputs.
Parse the inputs as floats and calculate the totalCalories by multiplying the sum of durations with calories burned per minute.
Return the result as a string.
API Call: <http://localhost:3000/total-calories?duration1=30&duration2=45&caloriesPerMinute=10>
Expected Output: 750
*/

app.get('/total-calories', (req, res) => {
  const duration1 = parseFloat(req.query.duration1);
  const duration2 = parseFloat(req.query.duration2);
  const caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  const totalCalories = (
    (duration1 + duration2) *
    caloriesPerMinute
  ).toString();
  res.send(totalCalories);
});

/* 
Question 6:
Create an endpoint that takes principal, rate, and time as query parameters and returns the interest earned on a savings account.
Write an Express code snippet.
Declare an endpoint interest-earned using the get keyword.
Declare three variables principal, rate, and time to take the inputs.
Parse the inputs as floats and calculate the interestEarned by using the formula (principal rate time) / 100.
Return the result as a string.
API Call: <http://localhost:3000/interest-earned?principal=1000&rate=5&time=2>
Expected Output: 100
*/

app.get('/interest-earned', (req, res) => {
  const principal = parseFloat(req.query.principal);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);
  const interestEarned = ((principal * rate * time) / 100).toString();
  res.send(interestEarned);
});

//--------------------------------------HW1--------------------------------------------------------


/*
Question 1:

Create an endpoint that takes the marks in two subjects and returns the total marks.

Write an Express code snippet.
Declare an endpoint total-marks using the get keyword.
Declare two variables marks1 and marks2 to take the inputs.
Declare a variable totalMarks. Assign the sum of the two marks to this variable.
Return the result.

API Call: <http://localhost:3000/total-marks?marks1=70&marks2=80>
Expected Output: 150
*/

app.get('/total-marks', (req, res) => {
    const marks1 = parseFloat(req.query.marks1);
    const marks2 = parseFloat(req.query.marks2);
    const totalMarks = (marks1 + marks2).toString();
  
    res.send(totalMarks);
  });
  
  /* 
  Question 2:
  
  Create an endpoint that takes the weight of 3 items in a shipment and returns the total weight of the shipment.
  
  Write an Express code snippet.
  Declare an endpoint total-weight using the get keyword.
  Declare three variables weight1, weight2, and weight3 to take the inputs.
  Declare a variable totalWeight. Assign the sum of the weights of the 3 shipments to this variable.
  Return the result.
  
  API Call: <http://localhost:3000/total-weight?weight1=3&weight2=3&weight3=5>
  Expected Output: 11
  */
  
  app.get('/total-weight', (req, res) => {
    const weight1 = parseFloat(req.query.weight1);
    const weight2 = parseFloat(req.query.weight2);
    const weight3 = parseFloat(req.query.weight3);
    const totalWeight = (weight1 + weight2 + weight3).toString();
  
    res.send(totalWeight);
  });
  
  /* 
  Question 3:
  
  Create an endpoint that takes the annual salary and returns the monthly salary.
  Write an Express code snippet.
  Declare an endpoint monthly-salary using the get keyword.
  Declare a variable annualSalary to take the inputs.
  Declare a variable monthlySalary. Calculate the value by dividing the annual salary by 12 and assign it to this variable.
  Return the result.
  
  API Call: <http://localhost:3000/monthly-salary?annualSalary=1200000>
  Expected Output: 100000
  */
  
  app.get('/monthly-salary', (req, res) => {
    const annualSalary = parseFloat(req.query.annualSalary);
    const monthlySalary = (annualSalary / 12).toString();
    res.send(monthlySalary);
  });
  
  /* 
  Question 4:
  
  Create an endpoint to calculate the total number of pages read given pages per day and number of days.
  Write an Express code snippet.
  Declare an endpoint total-pages using the get keyword.
  Declare two variables pagesPerDay and days to take the inputs.
  Declare a variable totalPages. Calculate the value by multiplying the pages read per day by the number of pages and assign it to this variable.
  Return the result.
  
  API Call: <http://localhost:3000/total-pages?pagesPerDay=20&days=6>
  Expected Output: 120
  */
  
  app.get('/total-pages', (req, res) => {
    const pagesPerDay = parseFloat(req.query.pagesPerDay);
    const days = parseFloat(req.query.days);
    const totalPages = (pagesPerDay * days).toString();
    res.send(totalPages);
  });
  
  /* 
  Question 5:
  
  Create an endpoint to calculate the conversion from one currency to another given the exchange rate.
  Write an Express code snippet.
  Declare an endpoint currency-conversion using the get keyword.
  Declare two variables amount and exchangeRate to take the inputs.
  Declare a variable convertedAmount. Calculate the value by multiplying the input amount with the exchange rate and assign it to this variable.
  Return the result.
  
  API Call: <http://localhost:3000/currency-conversion?amount=2000&exchangeRate=0.0125>
  Expected Output: 25
  
  */
  
  app.get('/currency-conversion', (req, res) => {
    const amount = parseFloat(req.query.amount);
    const exchangeRate = parseFloat(req.query.exchangeRate);
    const convertedAmount = (amount * exchangeRate).toString();
    res.send(convertedAmount);
  });
  
  /* 
  Question 6:
  
  Create an endpoint to calculate the average sales of a product, given the sales on 3 days.
  Write an Express code snippet.
  Declare an endpoint average-sales using the get keyword.
  Declare three variables sales1, sales2, and sales3 to take the inputs.
  Declare a variable avgSales. Assign the average of the sales on the 3 days to this variable.
  Return the result.
  
  API Call: <http://localhost:3000/average-sales?sales1=30&sales2=35&sales3=50>
  Expected Output: 38.33
  */
  
  app.get('/average-sales', (req, res) => {
    const sales1 = parseFloat(req.query.sales1);
    const sales2 = parseFloat(req.query.sales2);
    const sales3 = parseFloat(req.query.sales3);
    const avgSales = ((sales1 + sales2 + sales3) / 3).toFixed(2);
  
    res.send(avgSales);
  });

  //--------------------------------HW2-------------------------------------------------------------

  
/*
Question 1: Body Mass Index (BMI) Calculator

Calculate the BMI given weight (kilograms) and height(meters)
Write an Express code snippet.
Declare an endpoint /bmi using the get keyword.
Declare 2 variables height & weight to take the inputs.
Use the formula to calculate the BMI and return the result in the expected format

API Call: http://localhost:3000/bmi?weight=70&height=1.75
Expected Output: Your BMI is 22.85
*/

app.get('/bmi', (req, res) => {
    const height = parseFloat(req.query.height);
    const weight = parseFloat(req.query.weight);
    const calculateBmi = weight / (height * height);
    const truncateBmi = (Math.floor(calculateBmi * 100) / 100).toString();
    const bmiResult = 'Your BMI is ' + truncateBmi;
    res.send(bmiResult);
  });
  
  /*
  Question 2: Calculate grocery checkout price
  Create an endpoint that takes product, units & price as query parameters and returns total price to be paid.
  Write an Express code snippet.
  Declare an endpoint /checkout using the get keyword.
  Declare 3 variables product, units & price to take the inputs.
  Calculate the total price by multiplying units with price
  For example: total_price = price * units
  In the end, concatenate the values to return the result in the expected format.
  
  API Call: http://localhost:3000/checkout?product=Fuse&units=2&price=40
  Expected Output: Your total for 2 Fuse is 80
  */
  
  app.get('/checkout', (req, res) => {
    const product = req.query.product;
    const units = parseFloat(req.query.units);
    const price = parseFloat(req.query.price);
    const totalPrice = (units * price).toString();
    const result =
      'Your total for ' + units + ' ' + product + ' is ' + totalPrice;
    res.send(result);
  });
  
  /*
  Question 3: Calculate grade percentage
  Create an endpoint that takes math, science & english as query parameters and returns grade in percentage
  Write an Express code snippet.
  Declare an endpoint /grade using the get keyword.
  Declare 3 variables math, science & english to take the inputs.
  Calculate the students grade in percentage ( Considering the maximum marks a student can get in a subject is 100 )
  Add the 3 values & divide the result by 300
  Now multiply the result with 100
  For example: gradeInPercentage = ((subject1 + subject2 + subject3) / 300 ) * 100
  Make sure you return the percentage as Integer.
  In the end, concatenate the values to return the result in the expected format.
  
  API Call: http://localhost:3000/grade?maths=70&science=82&english=75
  Expected Output: Your grade in percentage is 76%
  */
  
  app.get('/grade', (req, res) => {
    const maths = parseFloat(req.query.maths);
    const science = parseFloat(req.query.science);
    const english = parseFloat(req.query.english);
    const gradeInPercentage = Math.round(
      ((maths + science + english) / 300) * 100
    );
    const result = 'Your grade in percentage is ' + gradeInPercentage + '%';
    res.send(result);
  });
  
  /*
  Question 4: Return bill amount after applying discount
  Create an endpoint that takes cartTotal & discount ( percentage ) as query parameters and returns the result
  Write an Express code snippet.
  Declare an endpoint /discounted-price using the get keyword.
  Declare 2 variables cartTotal & discount to take the input.
  Calculate the total price after applying discount
  cartTotal - ( cartTotal * ( discount / 100 ) )
  In the end, concatenate the values to return the result in the expected format.
  
  API Call: http://localhost:3000/discounted-price?cartTotal=150&discount=5
  Expected Output: Result: Your bill amount is 142.5
  */
  
  app.get('/discounted-price', (req, res) => {
    const cartTotal = parseFloat(req.query.cartTotal);
    const discount = parseFloat(req.query.discount);
    const discountedPrice = cartTotal - cartTotal * (discount / 100);
    const result = 'Result: Your bill amount is ' + discountedPrice;
    res.send(result);
  });
  
  /*
  Question 5: Split bill among friends
  Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result
  Write an Express code snippet.
  Declare an endpoint /split-bill using the get keyword.
  Declare 2 variables billAmount & numberOfFriends to take the input.
  Calculate the split amount among all the friends
  let splitAmount = billAmount / numberOfFriends
  In the end, concatenate the values to return the result in the expected format.
  Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.
  
  API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3
  Expected Output: Result: Each friend owes Rs. 50 against the bill
  */
  app.get('/split-bill', (req, res) => {
    const billAmount = parseFloat(req.query.billAmount);
    const numberOfFriends = parseFloat(req.query.numberOfFriends);
    const splitAmount = billAmount / numberOfFriends;
    const result =
      'Result: Each friend owes ₹ ' + splitAmount + ' against the bill';
    res.send(result);
  });
  
  /*
  Question 6: Convert Celsius to Fahrenheit
  Create an endpoint that takes a temperature in Celsius and returns the temperature in Fahrenheit.
  Write an Express code snippet.
  Declare an endpoint /celsius-to-fahrenheit using the get keyword.
  Declare 2 variables temperature to take the input.
  Convert the temperature from celsius to fahrenheit
  let fahrenheit = celsius * 9/5 + 32
  In the end, concatenate the values to return the result in the expected format.
  
  API Call: http://localhost:3000/celsius-to-fahrenheit?temperature=20
  Expected Output: Result: 68 Fahrenheit
  */
  
  app.get('/celsius-to-fahrenheit', (req, res) => {
    const celsius = parseFloat(req.query.temperature);
    const fahrenheit = (celsius * 9) / 5 + 32;
    const result = 'Result: ' + fahrenheit + ' Fahrenheit';
    res.send(result);
  });
  
  /*
  Question 7: Calculate monthly salary
  Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.
  Write an Express code snippet.
  Declare an endpoint /monthly-salary using the get keyword.
  Declare 2 variables totalHours & hourlyWage to take the input.
  Calculate the employee’s monthly salary
  
  monthlySalary = hourlyWage * totalHours
  In the end, concatenate the values to return the result in the expected format.
  Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.
  
  API Call: http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160
  Expected Output: Result: Your monthly salary is ₹320000
  */
  
  app.get('/monthly-salary', (req, res) => {
    const totalHours = parseFloat(req.query.totalHours);
    const hourlyWage = parseFloat(req.query.hourlyWage);
    const monthlySalary = hourlyWage * totalHours;
    const result = 'Result: Your monthly salary is ₹' + monthlySalary;
    res.send(result);
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
