var crypto = require('crypto');

var key = process.argv[2];

var decrypter = crypto.createDecipher('AES256',  key);
process.stdin.pipe(decrypter).pipe(process.stdout);