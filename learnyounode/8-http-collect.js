var http = require("http")

var url = process.argv[2]

var data = ''

http.get(url, function(response) {
  response.setEncoding('utf8')
  response.on("error", console.error)
  
  response.on("data", function(d) {
    data += d
  })
  
  response.on("end", function() {
    console.log(data.length)
    console.log(data)
  })
})


//LF:
/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})
*/