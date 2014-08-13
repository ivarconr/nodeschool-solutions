var q = require("q");
var defer = q.defer();

function attachTitle(a) {
  return "DR. " + a;
}

defer.promise
  .then(attachTitle)
  .then(console.log);

defer.resolve('MANHATTAN');
