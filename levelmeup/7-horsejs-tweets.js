module.exports = function (db, date, callback) {
  var end = new Date(Date.parse(date) + (24 * 60 * 60 * 1000));
  var tweets = [];
  db.createReadStream({start: date, end: end.toISOString()})
    .on('data', function(data) {
      tweets.push(data.value);
    })
    .on('error', function(err) {
      callback(err);
    })
    .on('end', function() {
      callback(null, tweets);
    });
}