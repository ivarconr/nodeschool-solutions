var level = require('level');
var db = level(process.argv[2], {valueEncoding: 'json'});
var content = require(process.argv[3]);

var ws = db.createWriteStream();

content.forEach(function(item) {
  if(item.type === 'user') {
    ws.write({key : item.name, value: item});  
  } else if(item.type === 'repo') {
    ws.write({key : item.user + '!' + item.name, value: item});  
  }
});

ws.end();

/*
//Official solution: 

var level = require('level')
var db = level(process.argv[2], { valueEncoding: 'json' })
var data = require(process.argv[3])
var operations = data.map(function (row) {
  var key
  if (row.type == 'user')
    key = row.name
  else if (row.type == 'repo')
    key = row.user + '!' + row.name
  return { type: 'put', key: key, value: row }
})

db.batch(operations)
*/