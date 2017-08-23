/*
The fs.appendFile() method appends specified content to a file. 
If the file does not exist, the file will be created:
*/
ar fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});