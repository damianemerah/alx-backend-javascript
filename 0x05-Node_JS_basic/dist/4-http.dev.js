"use strict";

var http = require('http');

var hostname = '127.0.0.1';
var port = 1245;
var app = http.createServer(function (_, res) {
  responseText = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.write(Buffer.from(responseText));
});
app.listen(port, hostname, function () {
  console.log('Server running at http://' + hostname + ':' + port);
});
module.exports = app;