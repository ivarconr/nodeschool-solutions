var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var fileToServer = process.argv[3]


var server = http.createServer(function(req, res) {
  fs.createReadStream(fileToServer).pipe(res)
})
server.listen(port)