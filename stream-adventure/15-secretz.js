var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var cipher = process.argv[2];
var passphrase = process.argv[3];

var decipher = crypto.createDecipher(cipher, passphrase);

var parser = tar.Parse();
parser.on('entry', function(entry) {
  if (entry.type !== 'File') return;
  var md5 = crypto.createHash('md5', { encoding: 'hex' });
  entry.pipe(md5)
    .pipe(through(null, function() {
      this.queue(' ' + entry.path + '\n');
    }))
    .pipe(process.stdout);

});

process.stdin
.pipe(decipher)
.pipe(zlib.createGunzip())
.pipe(parser)

//task-output to stdout: 'md5-hash filename\n'