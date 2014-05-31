var fs = require('fs');

var fileToRead = process.argv[2];

var content = fs.readFileSync(fileToRead).toString().split('\n');

console.log(content.length -1);