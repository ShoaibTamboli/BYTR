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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
