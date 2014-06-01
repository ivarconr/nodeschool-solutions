var fs = require('fs')
var path = require('path')

var mymodule = require('./6-modular.js');
mymodule(process.argv[2], process.argv[3], function(err, data) {
  data.forEach(function(file) {
    console.log(file);
  });
});

/*
fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(file) {
    if(path.extname(file) === '.' + process.argv[3]) {
      console.log(file);
    }
  });
});*/