var express = require('express');
var fs = require('fs');

var app = express();

var content = JSON.parse(fs.readFileSync(process.argv[3]).toString());

app.get('/books', function(req, res) {
  res.json(content);
});

app.listen(process.argv[2]);