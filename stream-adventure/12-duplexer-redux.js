var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
    // return a duplex stream to capture countries on the writable side
    // and pass through `counter` on the readable side
    var counts = {};

    function write(row) {
      counts[row.country] = (counts[row.country] || 0) + 1;
    }

    function end() {
      counter.setCounts(counts);
    }

    var input = through(write, end);
    return duplexer(input, counter);
};
