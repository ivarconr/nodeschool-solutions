module.exports = {
  
  init: function (db, words, callback) {
    var operations = words.map(function (word) {
      var key = word.length + '!' + word
      return { type: 'put', key: key, value: word }
    });
    db.batch(operations);
    callback();
  },

  query: function(db, word, callback) {
    var key = word.length + '!' + word.replace(/\*/g, '');
    var matches = [];

    db.createReadStream({start: key, end: key + '\xff'})
      .on('data', function (data) {
        matches.push(data.value);
      })
      .on('error', function (err) {
        callback(err)
      })
      .on('end', function () {
        callback(null, matches);
      });
  }
}