var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function(req, res) {
  var u = url.parse(req.url, true)
  var time = new Date(u.query.iso)
  var result
  if(u.pathname === '/api/parsetime') {
    result = {
      hour:  time.getHours(), 
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
    
  } else if(u.pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime()
    }
  }

  if(result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
  
  

  
})
server.listen(port)