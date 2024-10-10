const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Sample Data:

const watchList = [
  {
    videoId: 1,
    title: 'JavaScript Tutorial',
    watched: false,
    url: 'https://youtu.be/shorturl1',
  },
  {
    videoId: 2,
    title: 'Node.js Basics',
    watched: true,
    url: 'https://youtu.be/shorturl2',
  },
  {
    videoId: 3,
    title: 'React.js Guide',
    watched: false,
    url: 'https://youtu.be/shorturl3',
  },
];

/*
Exercise 1: Update the Watched Status of a Video by ID
Create an endpoint /watchlist/update to update the status of a video
Declare variables videoId & watched to accept input from query parameters.
Create a function updateWatchedStatusById which updates the status of a video by ID.
API Call: http://localhost:3000/watchlist/update?videoId=1&watched=true
Expected Output:
[
  { 'videoId': 1, 'title': 'JavaScript Tutorial', 'watched': true, 'url': '<https://youtu.be/shorturl1>' },
  { 'videoId': 2, 'title': 'Node.js Basics', 'watched': true, 'url': '<https://youtu.be/shorturl2>' },
  { 'videoId': 3, 'title': 'React.js Guide', 'watched': false, 'url': '<https://youtu.be/shorturl3>' }
]
*/

function updateWatchedStatusById(watchList, watched, videoId) {
  for (let i = 0; i < watchList.length; i++) {
    if (watchList[i].videoId === videoId) {
      watchList[i].watched = watched;
      break;
    }
  }
  return watchList;
}

app.get('/watchlist/update', (req, res) => {
  const videoId = parseInt(req.query.videoId);
  let watched = req.query.watched;
  if (watched === 'true') {
    watched = true;
  } else if (watched === 'false') {
    watched = false;
  }
  const result = updateWatchedStatusById(watchList, watched, videoId);
  res.json(result);
});

/* 
Exercise 2: Update the Watched Status of All Videos
Create an endpoint /watchlist/update-all to update the status of all videos
Declare a variable watched to accept input from query parameters.
Create a function updateAllVideosWatchedStatus which updates the status of all videos
API Call: http://localhost:3000/watchlist/update-all?watched=true
Expected Output:
[
  { 'videoId': 1, 'title': 'JavaScript Tutorial', 'watched': true, 'url': 'https://youtu.be/shorturl1' },
  { 'videoId': 2, 'title': 'Node.js Basics', 'watched': true, 'url': 'https://youtu.be/shorturl2' },
  { 'videoId': 3, 'title': 'React.js Guide', 'watched': true, 'url': 'https://youtu.be/shorturl3' }
]
*/

function updateAllVideosWatchedStatus(watchList, watched) {
  for (let i = 0; i < watchList.length; i++) {
    watchList[i].watched = watched;
  }
  return watchList;
}

app.get('/watchlist/update-all', (req, res) => {
  let watched = req.query.watched;
  if (watched === 'true') {
    watched = true;
  } else if (watched === 'false') {
    watched = false;
  }
  const result = updateAllVideosWatchedStatus(watchList, watched);
  res.json(result);
});

/* 
Exercise 3: Delete a Video by ID
Create an endpoint /watchlist/delete to return all videos except the video specified by videoId
Declare a variable videoId to accept input from query parameters.
Create a function shouldDeleteById which deletes the specified video & returns the rest of them
API Call: http://localhost:3000/watchlist/delete?videoId=2
Expected Output:
[
  { 'videoId': 1, 'title': 'JavaScript Tutorial', 'watched': false, 'url': 'https://youtu.be/shorturl1' },
  { 'videoId': 3, 'title': 'React.js Guide', 'watched': false, 'url': 'https://youtu.be/shorturl3' }
]
*/

function shouldDeleteById(watchList, videoId) {
  return watchList.filter((e) => e.videoId !== videoId);
}

app.get('/watchlist/delete', (req, res) => {
  const videoId = parseInt(req.query.videoId);
  const result = shouldDeleteById(watchList, videoId);
  res.json(result);
});

/*
Exercise 4: Delete Watched Videos
Create an endpoint /watchlist/delete-watched to only return videos that haven’t been watched
API Call http://localhost:3000/watchlist/delete-watched
Expected Output:
[
  { 'videoId': 1, 'title': 'JavaScript Tutorial', 'watched': false, 'url': '<https://youtu.be/shorturl1>' },
  { 'videoId': 3, 'title': 'React.js Guide', 'watched': false, 'url': '<https://youtu.be/shorturl3>' }
]
*/

app.get('/watchlist/delete-watched', (req, res) => {
  const result = watchList.filter((el) => el.watched !== true);
  res.json(result);
});

// ------------------------------------HW1----------------------------------


// Sample Data:

/*
Exercise 1: Remove All Unwatched Videos
Create an endpoint /watchlist/delete-unwatched which will return all the watched videos
Create a function deleteUnwatchedVideos to filter and return all unwatched videos.
API Call: http://localhost:3000/watchlist/delete-unwatched

Expected Data:
[
  { videoId: 2, title: 'Node.js Basics', watched: true, url: 'https://youtu.be/shorturl2' },
]
*/

let watchList1 = [
  {
    videoId: 1,
    title: 'JavaScript Tutorial',
    watched: false,
    url: 'https://youtu.be/shorturl1',
  },
  {
    videoId: 2,
    title: 'Node.js Basics',
    watched: true,
    url: 'https://youtu.be/shorturl2',
  },
  {
    videoId: 3,
    title: 'React.js Guide',
    watched: false,
    url: 'https://youtu.be/shorturl3',
  },
];

function deleteUnwatchedVideos(watchList) {
  return watchList.filter((el) => el.watched);
}

app.get('/watchlist/delete-unwatched', (req, res) => {
  const result = deleteUnwatchedVideos(watchList1);
  res.json(result);
});

/*
Exercise 2: Mark Video as Favorite by ID
Create an endpoint /watchlist/favorite to favorite a video by ID.
Declare variables for videoId and isFavorite to accept input from query parameters.
Create a function markVideoAsFavorite to update the favorite status of a video by ID.
API Call: http://localhost:3000/watchlist/favorite?videoId=1&isFavorite=true

Expected output:
[
  { 'videoId': 1, 'title': 'JavaScript Tutorial', 'watched': false, 'url': 'https://youtu.be/shorturl1', 'isFavorite': true },
  { 'videoId': 2, 'title': 'Node.js Basics', 'watched': true, 'url': 'https://youtu.be/shorturl2', 'isFavorite': false },
  { 'videoId': 3, 'title': 'React.js Guide', 'watched': false, 'url': 'https://youtu.be/shorturl3', 'isFavorite': false }
]
*/

let watchList11 = [
  {
    videoId: 1,
    title: 'JavaScript Tutorial',
    watched: false,
    url: 'https://youtu.be/shorturl1',
    isFavorite: false,
  },
  {
    videoId: 2,
    title: 'Node.js Basics',
    watched: true,
    url: 'https://youtu.be/shorturl2',
    isFavorite: false,
  },
  {
    videoId: 3,
    title: 'React.js Guide',
    watched: false,
    url: 'https://youtu.be/shorturl3',
    isFavorite: false,
  },
];

function markVideoAsFavorite(watchList11, videoId, isFavourite) {
  for (let i = 0; i < watchList11.length; i++) {
    if (watchList11[i].videoId === videoId) {
      watchList11[i].isFavorite = isFavourite;
      break;
    }
  }
  return watchList11;
}

app.get('/watchlist/favorite', (req, res) => {
  const videoId = parseInt(req.query.videoId);
  let isFavorite = req.query.isFavorite;

  if (isFavorite === 'true') {
    isFavorite = true;
  } else if (isFavorite === 'false') {
    isFavorite = false;
  }

  const result = markVideoAsFavorite(watchList11, videoId, isFavorite);
  res.json(result);
});
/*
Example 3: Update Task Status by ID
Create an endpoint /tasks/update to update the status of a task
Declare taskId and completed variables to accept input from query parameters.
Create a function updateTaskStatusById to update the status of a task by ID.
API Call: http://localhost:3000/tasks/update?taskId=1&completed=true

Expected output:
[
  { 'taskId': 1, 'title': 'Buy groceries', 'completed': true },
  { 'taskId': 2, 'title': 'Walk the dog', 'completed': false },
  { 'taskId': 3, 'title': 'Do laundry', 'completed': true }
]
*/

let tasks = [
  { taskId: 1, title: 'Buy groceries', completed: false },
  { taskId: 2, title: 'Walk the dog', completed: false },
  { taskId: 3, title: 'Do laundry', completed: true },
];

function updateTaskStatusById(tasks, taskId, completed) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].completed = completed;
      break;
    }
  }
  return tasks;
}

app.get('/tasks/update', (req, res) => {
  const taskId = parseInt(req.query.taskId);
  let completed = req.query.completed;
  if (completed === 'true') {
    completed = true;
  } else if (completed === 'false') {
    completed = false;
  }
  const result = updateTaskStatusById(tasks, taskId, completed);
  res.json(result);
});

/*
Example 4: Remove Completed Tasks
Create an endpoint /tasks/remove-completed to return all the pending tasks
Create a function removeCompletedTasks to filter out completed tasks.
API Call: http://localhost:3000/tasks/remove-completed

Expected output:
[
  { 'taskId': 1, 'title': 'Buy groceries', 'completed': false },
  { 'taskId': 2, 'title': 'Walk the dog', 'completed': false }
]
*/

let tasks1 = [
  { taskId: 1, title: 'Buy groceries', completed: false },
  { taskId: 2, title: 'Walk the dog', completed: false },
  { taskId: 3, title: 'Do laundry', completed: true },
];

function removeCompletedTasks(tasks1) {
  return tasks1.filter((el) => el.completed !== true);
}

app.get('/tasks/remove-completed', (req, res) => {
  const result = removeCompletedTasks(tasks1);
  res.json(result);
});

/*
Example 5: Update Library Book Availability by ID
Create an endpoint /library/update to update the availability of a book
Declare bookId and available variables to accept input from query parameters.
Create a function updateBookAvailabilityById to update the availability of a book by ID.
API call: http://localhost:3000/library/update?bookId=1&available=false

Expected output:
[
  { 'bookId': 1, 'title': '1984', 'available': false },
  { 'bookId': 2, 'title': 'Brave New World', 'available': true },
  { 'bookId': 3, 'title': 'Fahrenheit 451', 'available': false }
]
*/

let books = [
  { bookId: 1, title: '1984', available: true },
  { bookId: 2, title: 'Brave New World', available: true },
  { bookId: 3, title: 'Fahrenheit 451', available: false },
];

function updateBookAvailabilityById(books, bookId, available) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].bookId === bookId) {
      books[i].available = available;
      break;
    }
  }
  return books;
}

app.get('/library/update', (req, res) => {
  const bookId = parseInt(req.query.bookId);
  let available = req.query.available;

  if (available === 'true') {
    available = true;
  } else if (available === 'false') {
    available = false;
  }
  const result = updateBookAvailabilityById(books, bookId, available);
  res.json(result);
});

//-----------------HW2---------------------------------------------------------------------

/*
Example 1: Remove Out of Stock Products
Create an endpoint /products/remove-out-of-stock to return all the products currently in stock & remove the products that are out of stock
Create a function removeOutOfStockProducts to filter out products that are out of stock.
API Call: http://localhost:3000/products/remove-out-of-stock
Sample data:

let products = [
  { productId: 1, name: 'Laptop', inStock: true },
  { productId: 2, name: 'Phone', inStock: true },
  { productId: 3, name: 'Tablet', inStock: false }
];

Expected output:
[
  { 'productId': 1, 'name': 'Laptop', 'inStock': true },
  { 'productId': 2, 'name': 'Phone', 'inStock': true }
]
*/
const products = [
  { productId: 1, name: 'Laptop', inStock: true },
  { productId: 2, name: 'Phone', inStock: true },
  { productId: 3, name: 'Tablet', inStock: false },
];

function removeOutOfStockProducts(products) {
  return products.filter((e) => e.inStock);
}

app.get('/products/remove-out-of-stock', (req, res) => {
  const result = removeOutOfStockProducts(products);
  res.json(result);
});

/*
Example 2: Update Employee Active Status by ID
Create an endpoint /employees/update to update the status of an employee
Declare employeeId and active variables.
Create a function updateEmployeeStatusById to update the status of an employee by ID.
API call: http://localhost:3000>/employees/update?employeeId=1&active=false

Sample data:
let employees = [
  { employeeId: 1, name: 'Alice', active: true },
  { employeeId: 2, name: 'Bob', active: true },
  { employeeId: 3, name: 'Charlie', active: false }
];

Expected output:
[
  { 'employeeId': 1, 'name': 'Alice', 'active': false },
  { 'employeeId': 2, 'name': 'Bob', 'active': true },
  { 'employeeId': 3, 'name': 'Charlie', 'active': false }
]

*/

const employees = [
  { employeeId: 1, name: 'Alice', active: true },
  { employeeId: 2, name: 'Bob', active: true },
  { employeeId: 3, name: 'Charlie', active: false },
];

function updateEmployeeStatusById(employees, employeeId, active) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].employeeId === employeeId) {
      employees[i].active = active;
      break;
    }
  }
  return employees;
}

app.get('/employees/update', (req, res) => {
  const employeeId = parseInt(req.query.employeeId);
  let active = req.query.active;
  if (active === 'true') {
    active = true;
  } else if (active === 'false') {
    active = false;
  }
  const result = updateEmployeeStatusById(employees, employeeId, active);
  res.json(result);
});

/* 
Example 3: Update Order Delivery Status by ID
Create an endpoint /orders/update to update the delivery status of an order
Declare orderId and delivered variables to accept input from query parameters.
Create a function updateOrderStatusById to update the status of an order by ID.
API call: http://localhost:3000/orders/update?orderId=1&delivered=true

Sample data:

let orders = [
  { orderId: 1, product: 'Laptop', delivered: false },
  { orderId: 2, product: 'Phone', delivered: true },
  { orderId: 3, product: 'Tablet', delivered: false }
];

Expected output:
[
  { 'orderId': 1, 'product': 'Laptop', 'delivered': true },
  { 'orderId': 2, 'product': 'Phone', 'delivered': true },
  { 'orderId': 3, 'product': 'Tablet', 'delivered': false }
]

*/

const orders = [
  { orderId: 1, product: 'Laptop', delivered: false },
  { orderId: 2, product: 'Phone', delivered: true },
  { orderId: 3, product: 'Tablet', delivered: false },
];

function updateOrderStatusById(orders, orderId, delivered) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].orderId === orderId) {
      orders[i].delivered = delivered;
      break;
    }
  }
  return orders;
}

app.get('/orders/update', (req, res) => {
  const orderId = parseInt(req.query.orderId);
  let delivered = req.query.delivered;

  if (delivered === 'true') {
    delivered = true;
  } else if (delivered === 'false') {
    delivered = false;
  }
  const result = updateOrderStatusById(orders, orderId, delivered);
  res.json(result);
});

/*
Example 4: Remove Unconfirmed Reservations
Create an endpoint /reservations/remove-unconfirmed to remove unconfirmed reservations & return only the confirmed ones.
Create a function removeUnconfirmedReservations to filter out unconfirmed reservations.

API call: http://localhost:3000/reservations/remove-unconfirmed

Sample data:

let reservations = [
  { reservationId: 1, name: 'John', confirmed: false },
  { reservationId: 2, name: 'Jane', confirmed: true },
  { reservationId: 3, name: 'Jack', confirmed: false }
];

Expected output:
[
  { 'reservationId': 2, 'name': 'Jane', 'confirmed': true }
]
*/

const reservations = [
  { reservationId: 1, name: 'John', confirmed: false },
  { reservationId: 2, name: 'Jane', confirmed: true },
  { reservationId: 3, name: 'Jack', confirmed: false },
];

function removeUnconfirmedReservations(reservations) {
  return reservations.filter((e) => e.confirmed);
}

app.get('/reservations/remove-unconfirmed', (req, res) => {
  const result = removeUnconfirmedReservations(reservations);
  res.json(result);
});

/* 
Example 5: Update Subscription Status by ID
Create an endpoint /subscriptions/update to update the status of a subscription.
Declare subscriptionId and active variables to accept input from query parameters.
Create a function updateSubscriptionStatusById to update the status of a subscription by ID.
API Call: http://localhost:3000/subscriptions/update?subscriptionId=1&active=true
Sample data:
let subscriptions = [
  { subscriptionId: 1, service: 'Netflix', active: false },
  { subscriptionId: 2, service: 'Spotify', active: true },
  { subscriptionId: 3, service: 'Amazon Prime', active: false }
];

Expected output:
[
  { 'subscriptionId': 1, 'service': 'Netflix', 'active': true },
  { 'subscriptionId': 2, 'service': 'Spotify', 'active': true },
  { 'subscriptionId': 3, 'service': 'Amazon Prime', 'active': false }
]
*/

const subscriptions = [
  { subscriptionId: 1, service: 'Netflix', active: false },
  { subscriptionId: 2, service: 'Spotify', active: true },
  { subscriptionId: 3, service: 'Amazon Prime', active: false },
];

function updateSubscriptionStatusById(subscriptions, subscriptionId, active) {
  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === subscriptionId) {
      subscriptions[i].active = active;
      break;
    }
  }
  return subscriptions;
}

app.get('/subscriptions/update', (req, res) => {
  const subscriptionId = parseInt(req.query.subscriptionId);
  let active = req.query.active;
  if (active === 'true') {
    active = true;
  } else if (active === 'false') {
    active = false;
  }
  const result = updateSubscriptionStatusById(
    subscriptions,
    subscriptionId,
    active
  );
  res.json(result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
