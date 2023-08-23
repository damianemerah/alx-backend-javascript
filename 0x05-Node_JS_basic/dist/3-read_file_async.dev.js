"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fs = require('fs');
/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */


var countStudents = function countStudents(dataPath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(dataPath, 'utf-8', function (err, data) {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        var fileLines = data.toString('utf-8').trim().split('\n');
        var studentGroups = {};
        var dbFieldNames = fileLines[0].split(',');
        var studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var line = _step.value;
            var studentRecord = line.split(',');
            var studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
            var field = studentRecord[studentRecord.length - 1];

            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }

            var studentEntries = studentPropNames.map(function (propName, idx) {
              return [propName, studentPropValues[idx]];
            });
            studentGroups[field].push(Object.fromEntries(studentEntries));
          };

          for (var _iterator = fileLines.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var totalStudents = Object.values(studentGroups).reduce(function (pre, cur) {
          return (pre || []).length + cur.length;
        });
        console.log("Number of students: ".concat(totalStudents));

        for (var _i = 0, _Object$entries = Object.entries(studentGroups); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              field = _Object$entries$_i[0],
              group = _Object$entries$_i[1];

          var studentNames = group.map(function (student) {
            return student.firstname;
          }).join(', ');
          console.log("Number of students in ".concat(field, ": ").concat(group.length, ". List: ").concat(studentNames));
        }

        resolve(true);
      }
    });
  });
};

module.exports = countStudents;