"use strict";

var http = require('http');

var fs = require('fs');

var studentsDatabase = process.argv[2];

if (!fs.existsSync(studentsDatabase)) {
  throw new Error('Cannot load the database');
}

if (!fs.statSync(studentsDatabase).isFile()) {
  throw new Error('Cannot load the database');
}

var dbContents = fs.readFileSync(studentsDatabase, 'utf-8');
var studentsByCourse = JSON.parse(dbContents);
var app = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    var studentsCount = studentsByCourse.reduce(function (count, course) {
      return count + course.students.length;
    }, 0);
    var studentsCS = studentsByCourse.find(function (course) {
      return course.course === 'CS';
    }).students;
    var studentsSWE = studentsByCourse.find(function (course) {
      return course.course === 'SWE';
    }).students;
    var response = ['This is the list of our students', "Number of students: ".concat(studentsCount), "Number of students in CS: ".concat(studentsCS.length, ". List: ").concat(studentsCS.join(', ')), "Number of students in SWE: ".concat(studentsSWE.length, ". List: ").concat(studentsSWE.join(', '))].join('\n');
    res.end(response + '\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});
app.listen(1245, function () {
  console.log('Server is listening on port 1245');
});
module.exports = app;