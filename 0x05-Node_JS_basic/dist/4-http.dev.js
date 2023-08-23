"use strict";

var http = require('http');

var PORT = 1245;
var HOST = 'localhost';
var app = http.createServer();
app.on('request', function (_, res) {
  var responseText = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});
app.listen(PORT, HOST, function () {
  process.stdout.write("Server listening at -> http://".concat(HOST, ":").concat(PORT, "\n"));
});
module.exports = app;