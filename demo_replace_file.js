/*
The fs.writeFile() method replaces the specified file and content:
If the content of 'mynewfile1.txt' is 'Hello content!' and you run this script,
So the content of 'mynewfile1.txt' replaced with 'This is my text.'
*/
var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});