const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

/* 
Exercise 1: Report Card Generation
Create a function generateReportCard that takes a roll number as input.
Find the student with the given roll number.
Print the report card in the specified format.

Expected output:
===== Report Card for John ======
Roll No. : 201
------
Marks:
------
science: 88
history: 75
geography: 90
------ ------ ------

*/
console.log('');
console.log('==================Exercise 1================');
console.log('');
const studentData = [
  { studentName: 'John', rollNo: 201, science: 88, history: 75, geography: 90 },
  {
    studentName: 'Alice',
    rollNo: 202,
    science: 92,
    history: 85,
    geography: 88,
  },
  { studentName: 'Bob', rollNo: 203, science: 78, history: 89, geography: 91 },
];

function generateReportCard(rollNumber) {
  const student = studentData.find((e) => e.rollNo === rollNumber);
  console.log('===== Report Card for', student.studentName, '=====');
  console.log('Roll No. :', student.rollNo);
  console.log('------');
  console.log('Marks:');
  console.log('------');
  console.log('science:', student.science);
  console.log('history', student.history);
  console.log('geography', student.geography);
  console.log('------ ------ ------');
}

generateReportCard(201);
console.log('');
console.log('==================Exercise 2================');
console.log('');

/*
Exercise 2: Filter Students by Subject Marks
Create a function filterStudentsByScienceCutoff that takes a cutoff mark.
Filter the students who have marks greater than or equal to the cutoff in the specified subject.
Return the filtered array of students.

Expected output:
Assuming Science has a cutoff at 80:

[
  { studentName: 'John', rollNo: 201, science: 88, history: 75, geography: 90 },
  { studentName: 'Alice', rollNo: 202, science: 92, history: 85, geography: 88 }
]

*/
function filterStudentsByScienceCutoff(cutOffMarks) {
  const student = studentData.filter((el) => el.science > cutOffMarks);
  console.log('Assuming Science has a cutoff at', cutOffMarks, ':');
  console.log('');
  console.log(student);
}

filterStudentsByScienceCutoff(80);
console.log('');
console.log('=================Exercise 3=================');
console.log('');
/*
Exercise 3: Filter Students by Average Marks
Create a function filterStudentsByAverageMarks that takes an average marks cutoff.
Calculate the average marks for each student.
Filter the students who have average marks greater than or equal to the cutoff.
Print the students who pass the cutoff along with their average marks.

Expected output:
For average marks, cutoff is 85:
Alice has average marks 88.33
Bob has average marks 86.00

*/

function filterStudentsByAverageMarks(avgCutOffMarks) {
  console.log('For average marks, cutoff is ', avgCutOffMarks, ':');
  studentData.forEach((data) => {
    const avgMarks = (data.geography + data.history + data.science) / 3;
    if (avgMarks > avgCutOffMarks) {
      console.log(data.studentName, 'has average marks', avgMarks.toFixed(2));
    }
  });
}

filterStudentsByAverageMarks(85);
console.log('');
console.log('=================Exercise 4=================');
console.log('');
/*
Exercise 4: Find Student with Highest Average Marks
Create a function getStudentWithHighestAverageMarks that calculates the average marks for each student & returns the student with the highest average marks.
Declare 2 variables highestAverage & topStudent
Calculate average marks for each student
Compares with the existing value of highAverage & if the current student’s average is higher the update both the variables.
Finally, return the output on the console in the expected format

Expected output:
Alice has the highest average marks of 88.33
*/

function getStudentWithHighestAverageMarks(studentData) {
  let highestAverage = 0;
  let topStudent = '';
  studentData.forEach((e) => {
    const average = (e.science + e.geography + e.history) / 3;
    if (average > highestAverage) {
      highestAverage = average;
      topStudent = e.studentName;
    }
  });
  console.log(
    topStudent,
    'has the highest average marks of ',
    highestAverage.toFixed(2)
  );
}
getStudentWithHighestAverageMarks(studentData);

console.log('');
console.log('=================Exercise 5=================');
console.log('');

/*

Exercise 5: Convert Hours to Minutes
Create a function convertToMinutes that takes hours as input.
Convert and return the hours into minutes.

Expected Output:
2 hours = 120 minutes
*/

function convertToMinutes(hours) {
  const minutes = hours * 60;
  console.log(hours, 'hours = ', minutes, 'minutes');
}

convertToMinutes(2);

console.log('');
console.log('=================Exercise 6=================');
console.log('');

/*
Exercise 6: Count Occurrences of Character in String
Create a function countOccurrences that takes a string and a character as input.
Count and return the number of times the character appears in the string.

Expected Output:
Character 'o' repeats 2 times
*/

const str = 'hello world';
const char = 'o';

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }
  console.log('Character', char, 'repeats', counter, 'times');
}

countOccurrences(str, char);

console.log('');
console.log('=================Exercise 7=================');
console.log('');

/*
Exercise 7: Find the Sum of All Even Numbers in an Array
Create a function sumOfEvenNumbers that takes an array of numbers as input.
Find and return the sum of all even numbers in the array.
Expected Output:

The sum of all even numbers is 12
*/

const numbers = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  console.log('The sum of all even numbers is', sum);
}
sumOfEvenNumbers(numbers);

console.log('');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
