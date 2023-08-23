const http = require('http');
const fs = require('fs');

const studentsDatabase = process.argv[2];
if (!fs.existsSync(studentsDatabase)) {
  throw new Error('Cannot load the database');
}
if (!fs.statSync(studentsDatabase).isFile()) {
  throw new Error('Cannot load the database');
}
const dbContents = fs.readFileSync(studentsDatabase, 'utf-8');
const studentsByCourse = JSON.parse(dbContents);

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.statusCode = 200;

    const studentsCount = studentsByCourse.reduce(
      (count, course) => count + course.students.length,
      0,
    );
    const studentsCS = studentsByCourse.find(
      (course) => course.course === 'CS',
    ).students;
    const studentsSWE = studentsByCourse.find(
      (course) => course.course === 'SWE',
    ).students;

    const response = [
      'This is the list of our students',
      `Number of students: ${studentsCount}`,
      `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(
        ', ',
      )}`,
      `Number of students in SWE: ${
        studentsSWE.length
      }. List: ${studentsSWE.join(', ')}`,
    ].join('\n');

    res.end(response + '\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
