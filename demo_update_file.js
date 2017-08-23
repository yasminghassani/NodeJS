/*
The fs.appendFile() method appends the specified content at the end of the specified file:
If the content of 'mynewfile1.txt' is 'Hello content!' and you run this script,
So the content of 'mynewfile1.txt' updated like 'Hello content! This is my text.'
*/
var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});