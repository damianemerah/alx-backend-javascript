"use strict";

var fs = require('fs');

function countStudents(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf-8', function (error, data) {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      var lines = data.split('\n').filter(function (line) {
        return line.trim() !== '';
      });
      delete lines[0];
      var students = {};
      lines.forEach(function (line) {
        var fields = line.split(',');
        var field = fields[fields.length - 1].trim();

        if (field in students) {
          students[field].count += 1;
          students[field].names.push(fields[0]);
        } else {
          students[field] = {
            count: 1,
            names: [fields[0]]
          };
        }
      });
      console.log("Number of students: ".concat(lines.length - 1));

      for (var field in students) {
        console.log("Number of students in ".concat(field, ": ").concat(students[field].count, ". List: ").concat(students[field].names.join(', ')));
      }

      resolve();
    });
  });
}

module.exports = countStudents;