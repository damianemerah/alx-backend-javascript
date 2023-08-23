"use strict";

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Welcome to Holberton School, what is your name?');
rl.on('line', function (name) {
  console.log("Your name is: ".concat(name));
  rl.close();
});
rl.on('close', function () {
  console.log('This important software is now closing');
});