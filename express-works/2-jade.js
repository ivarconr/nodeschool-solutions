var express = require('express');
var jade = require('jade');
var path = require('path');
var app = express();

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.listen(process.argv[2]);