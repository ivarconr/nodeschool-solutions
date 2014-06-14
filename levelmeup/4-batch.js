var level = require('level');
var fs = require('fs');
var db = level(process.argv[2]);
var file = process.argv[3];


db.on('ready', function() {
  var batch = db.batch();
  batchDataFromFile(file, batch);
});


function batchDataFromFile(file, batch) {
  fs.readFile(file, function(err, contents) {
    var lines = contents.toString().split('\n');

    lines.forEach(function(line) {
      var row = line.split(',')
      if(row[0] === 'put') {
        batch.put(row[1], row[2]);
      } else if(row[0] === 'del') {
        batch.del(row[1]);
      }
    });

    batch.write();  
  });
}