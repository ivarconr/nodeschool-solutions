var express = require('express');
var app = express();

app.use(require('body-parser')())

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);