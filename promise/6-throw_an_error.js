var q = require("q");

function parsePromised(str) {
  var defer = q.defer();

  try {
    defer.resolve(JSON.parse(str));
  } catch (e) {
    defer.reject(e);
  }

  return defer.promise;
}

parsePromised(process.argv[2])
  .then(null, console.log);
