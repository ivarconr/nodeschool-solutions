var level = require("level");
var db = level(process.argv[2]);

function fetchAndPrint(key) {
  db.get(key, function(err, value) {
    if(!err) {
      console.log(key + '=' + value);
    }
  });
}

for(var i = 0; i<100; i++) {
  fetchAndPrint("key"+i);
}