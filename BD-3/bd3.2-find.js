const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ['Rahul', 'Sita', 'Amit', 'Vikram', 'Priya'];
const employees = [
  { employeeId: 1, name: 'Rahul' },
  { employeeId: 2, name: 'Sita' },
  { employeeId: 3, name: 'Amit' },
];

const contacts = [
  { phoneNumber: '1234567890', name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: '0987654321', name: 'Sita', address: '456 Avenue, City' },
  { phoneNumber: '1112223334', name: 'Amit', address: '789 Boulevard, City' },
];

/* 
Exercise 1: Find a Number in the Array
Create an endpoint numbers/find that finds a specific number in an array of unique numbers.
API Call:<http://localhost:3000/numbers/find/5>
Expected Output:5
*/

function findNumber(ele, number) {
  return ele === number;
}

app.get('/numbers/find/:number', (req, res) => {
  const number = parseInt(req.params.number);
  const result = numbers.find((ele) => findNumber(ele, number));
  res.json(result);
});

/* 
Exercise 2:Find a Name in the Array
Create an endpoint names/find/:name that finds a specific name in an array of unique names.
API Call:<http://localhost:3000/names/find/Sita>
Expected Output: 'Sita'
*/

function findName(ele, name) {
  return ele === name;
}

app.get('/names/find/:name', (req, res) => {
  const name = req.params.name;
  const result = names.find((ele) => findName(ele, name));
  res.json(result);
});

/* 
Exercise 3: Find an Employee by ID
Create an endpoint employees/find/:id that finds an employee by their unique employee ID.
API Call: <http://localhost:3000/employees/find/2>
Expected Output: { 'employeeId': 2, 'name': 'Sita' }
*/

function findEmployee(ele, employee) {
  return ele.employeeId === employee;
}

app.get('/employees/find/:employeeId', (req, res) => {
  const employeeId = parseInt(req.params.employeeId);
  const result = employees.find((ele) => findEmployee(ele, employeeId));
  res.json(result);
});

/*
Exercise 4: Find a Contact by Phone Number
Create an endpoint /contacts/find/:phoneNumber that finds a contact by their unique phone number.
API Call: <http://localhost:3000/contacts/find/1234567890>
Expected Output: { 'phoneNumber': '1234567890', 'name': 'Rahul', 'address': '123 Street, City' }
*/

function findContact(ele, contactNo) {
  return ele.phoneNumber === contactNo;
}

app.get('/contacts/find/:contactNo', (req, res) => {
  const contactNo = req.params.contactNo;
  const result = contacts.find((ele) => findContact(ele, contactNo));
  res.json(result);
});

//-----------------------------------------HW1----------------------------------------


// Sample Data

const users = [
    {
      id: 1,
      username: 'ankit',
      fullName: 'Ankit Kumar',
      email: 'ankit@gmail.com',
    },
    {
      id: 2,
      username: 'dhananjit',
      fullName: 'Dhananjit Singh',
      email: 'dhananjit.singh@gmail.com',
    },
  ];
  
  const creditCards = [
    { number: '1234567890123456', holder: 'John Doe', expiry: '12/24' },
    { number: '9876543210987654', holder: 'Jane Smith', expiry: '06/23' },
  ];
  
  const books = [
    { isbn: '9783161484100', title: 'Example Book', author: 'John Author' },
    { isbn: '9781234567897', title: 'Another Book', author: 'Jane Writer' },
  ];
  
  const people = [
    { ssn: '123-45-6789', name: 'John Doe', birthDate: '1990-01-01' },
    { ssn: '987-65-4321', name: 'Jane Smith', birthDate: '1985-05-05' },
  ];
  
  /*
  Exercise 1: Check username availability
  Create an endpoint username/find/:username which accepts an username and checks if the username is available for creating a new account.
  Declare a variable username to accept the input.
  Note: This means that if we already have a user in the users array with the same username, we’ll have to return the response as Username is not available to indicate that the username is already taken.
  API Call: http://localhost:3000/username/find/ankit123
  Expected Output:
  {
    result: 'Username is available'
  }
  */
  
  function checkAvailability(ele, username) {
    return ele.username === username;
  }
  
  app.get('/username/find/:username', (req, res) => {
    const username = req.params.username;
    let result = users.find((ele) => checkAvailability(ele, username));
    if (result) {
      result = 'Username is not available';
      res.json({ result });
    } else {
      result = 'Username is available';
      res.json({ result });
    }
  });
  
  /*
  Exercise 2: Find Credit Card Number
  Create an endpoint /credit-cards/find that accepts a cardNumber from the query parameters.
  Define the variable name for the credit card number as cardNumber.
  Write a function findCreditCard to find the credit card number in an array of credit card objects.
  Respond with the found credit card details.
  API Call: http://localhost:3000/credit-cards/find?cardNumber=1234567890123456
  Expected Output:
  {
    creditCard: {
      number: '1234567890123456',
      holder: 'John Doe',
      expiry: '12/24
    }
  }
  */
  
  function findCreditCard(ele, cardNumber) {
    return ele.number === cardNumber;
  }
  
  app.get('/credit-cards/find', (req, res) => {
    const cardNumber = req.query.cardNumber;
    const creditCard = creditCards.find((ele) => findCreditCard(ele, cardNumber));
    res.json({ creditCard });
  });
  
  /* 
  Exercise 3: Find Email Address
  Create an endpoint /emails/find that accepts an email from the query parameters.
  Define the variable name for the email address as email.
  Write a function findUserByEmail to find the email address in an array of user objects.
  Respond with the found user details.
  API Call: http://localhost:3000/emails/find?email=ankit@gmail.com
  Expected Output:
  {
    user: {
      email: 'ankit@gmail.com',
      fullName: 'Ankit Kumar',
      username: 'ankit',
      id: 1
    }
  }
  */
  
  function findUserbyEmail(ele, email) {
    return ele.email === email;
  }
  
  app.get('/emails/find', (req, res) => {
    const email = req.query.email;
    const user = users.find((ele) => findUserbyEmail(ele, email));
    res.json({ user });
  });
  
  /* 
  Exercise 4: Find ISBN Number ( for books )
  Create an endpoint /books/find that accepts an isbn from the query parameters.
  Define the variable name for the ISBN number as isbn.
  Write a function findBookByISBN to find the book by ISBN in an array of book objects.
  Respond with the found book details.
  API Call: http://localhost:3000/books/find?isbn=9783161484100
  Expected Output:
  {
    book: {
      isbn: '9783161484100',
      title: 'Example Book',
      author: 'John Author'
    }
  }
  */
  
  function findBookByISBN(ele, reqIsbn) {
    return ele.isbn === reqIsbn;
  }
  
  app.get('/books/find', (req, res) => {
    const isbn = req.query.isbn;
    const book = books.find((ele) => findBookByISBN(ele, isbn));
    res.json({ book });
  });
  
  /*
  Exercise 5: Find Social Security Number (SSN)
  Create an endpoint /ssn/find that accepts an ssn from the query parameters.
  Define the variable name for the SSN as ssn.
  Write a function to find the SSN in an array of person objects.
  Respond with the found person details.
  API Call: http://localhost:3000/ssn/find?ssn=123-45-6789
  Expected Output:
  {
    person: {
      ssn: '123-45-6789',
      name: 'John Doe',
      birthDate: '1990-01-01'
    }
  }
  */
  
  function findPersonBySSN(ele, ssn) {
    return ele.ssn === ssn;
  }
  
  app.get('/ssn/find', (req, res) => {
    const ssn = req.query.ssn;
    const person = people.find((ele) => findPersonBySSN(ele, ssn));
    res.json({ person });
  });

//-----------------------------------------HW2----------------------------------------


//Sample Data:

const phones = [
    { number: '123-456-7890', owner: 'Alice', type: 'mobile' },
    { number: '987-654-3210', owner: 'Bob', type: 'home' },
  ];
  
  const accounts = [
    { number: '111122223333', holder: 'Charlie', balance: 5000 },
    { number: '444455556666', holder: 'Dave', balance: 3000 },
  ];
  
  const licenses = [
    { number: 'D1234567', name: 'Eve', expiryDate: '2026-04-01' },
    { number: 'D7654321', name: 'Frank', expiryDate: '2024-11-15' },
  ];
  
  const employees1 = [
    { id: 'E1234', name: 'Grace', department: 'Engineering' },
    { id: 'E5678', name: 'Hank', department: 'Marketing' },
  ];
  
  const orders = [
    { id: 'ORD12345', customerName: 'Ivy', totalAmount: 150 },
    { id: 'ORD67890', customerName: 'Jake', totalAmount: 200 },
  ];
  
  /*
  Exercise 1: Find Mobile Phone Number
  Create an endpoint /phones/find that accepts a phoneNumber from the query parameters.
  Define the variable name for the phone number as phoneNumber.
  Write a function findPhoneNumber to find the phone number in an array of phone objects.
  Respond with the found phone details.
  API Call: <http://localhost:3000/phones/find?phoneNumber=123-456-7890>
  Expected Output:
  {
    phone: {
      number: '123-456-7890',
      owner: 'Alice',
      type: 'mobile'
    }
  }
  */
  
  function findPhoneNumber(e, phoneNumber) {
    return e.number === phoneNumber;
  }
  
  app.get('/phones/find', (req, res) => {
    const phoneNumber = req.query.phoneNumber;
    const result = phones.find((e) => findPhoneNumber(e, phoneNumber));
    res.json({ phone: result });
  });
  
  /* 
  Exercise 2: Find Bank Account Number
  Create an endpoint /accounts/find that accepts an accountNumber from the query parameters.
  Define the variable name for the account number as accountNumber.
  Write a function findAccountNumber to find the account number in an array of bank account objects.
  Respond with the found account details.
  API Call: <http://localhost:3000/accounts/find?accountNumber=111122223333>
  Expected Output:
  {
    account: {
      number: '111122223333',
      holder: 'Charlie',
      balance: 5000
    }
  }
  */
  
  function findAccountNumber(ele, accountNumber) {
    return ele.number === accountNumber;
  }
  
  app.get('/accounts/find', (req, res) => {
    const accountNumber = req.query.accountNumber;
    const result = accounts.find((ele) => findAccountNumber(ele, accountNumber));
    res.json({ account: result });
  });
  
  /*
  Exercise 3: Find Driver's License Number
  Create an endpoint /licenses/find that accepts a licenseNumber from the query parameters.
  Define the variable name for the license number as licenseNumber.
  Write a function findLicenseNumber to find the license number in an array of driver's license objects.
  Respond with the found license details.
  API Call: <http://localhost:3000/licenses/find?licenseNumber=D1234567>
  Expected Output:
  {
    license: {
      number: 'D1234567',
      name: 'Eve',
      expiryDate: '2026-04-01'
    }
  }
  */
  
  function findLicenseNumber(ele, licenseNumber) {
    return ele.number === licenseNumber;
  }
  
  app.get('/licenses/find', (req, res) => {
    const licenseNumber = req.query.licenseNumber;
    const result = licenses.find((ele) => findLicenseNumber(ele, licenseNumber));
    res.json({ license: result });
  });
  
  /*
  Exercise 4: Find Employee ID
  Create an endpoint /employees/find that accepts an employeeId from the query parameters.
  Define the variable name for the employee ID as employeeId.
  Write a function findEmployeeById to find the employee ID in an array of employee objects.
  Respond with the found employee details.
  API Call: <http://localhost:3000/employees/find?employeeId=E1234>
  Expected Output:
  {
    employee: {
      id: 'E1234',
      name: 'Grace',
      department: 'Engineering'
    }
  }
  */
  
  function findEmployeeById(ele, employeeId) {
    return ele.id === employeeId;
  }
  
  app.get('/employees/find', (req, res) => {
    const employeeId = req.query.employeeId;
    const result = employees1.find((ele) => findEmployeeById(ele, employeeId));
    res.json({ employee: result });
  });
  
  /*
  Exercise 5: Find Order ID
  Create an endpoint /orders/find that accepts an orderId from the query parameters.
  Define the variable name for the order ID as orderId.
  Write a function findOrderById to find the order ID in an array of order objects.
  Respond with the found order details.
  API Call: <http://localhost:3000/orders/find?orderId=ORD12345>
  Expected Output:
  {
    order: {
      id: 'ORD12345',
      customerName: 'Ivy',
      totalAmount: 150
    }
  }
  */
  
  function findOrderById(ele, orderId) {
    return ele.id === orderId;
  }
  
  app.get('/orders/find', (req, res) => {
    const orderId = req.query.orderId;
    const result = orders.find((ele) => findOrderById(ele, orderId));
    res.json({ order: result });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
