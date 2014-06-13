var level = require('level');
var db = level(process.argv[2]);

var o = JSON.parse(process.argv[3]);

for(var key in o) {
  if (o.hasOwnProperty(key)) {
    db.put(key, o[key]);
  }
}
