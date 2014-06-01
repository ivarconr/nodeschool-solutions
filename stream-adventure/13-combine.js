var combine = require('stream-combiner');
var split = require('split');
var zlib = require('zlib');
var through = require('through');
    
module.exports = function () {
  var currentGenre;
  var tr = through(write, end);

  function write(line) {
    if (line.length === 0) return;
    var row = JSON.parse(line);

    if(row.type === 'genre') {
      if (currentGenre) {
        this.queue(JSON.stringify(currentGenre) + '\n');
      }
      currentGenre = { name: row.name, books: [] };
    } else {
      currentGenre.books.push(row.name);
    }
  }

  function end() {
    if (currentGenre) {
      this.queue(JSON.stringify(currentGenre) + '\n');
    }

    this.queue(null);
  }

  return combine(split(), tr, zlib.createGzip());
}