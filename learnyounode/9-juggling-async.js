var http = require("http")

var urls = process.argv.slice(2)
var content = []
var count = 0

function fetcher(url, callback) {
  var data = ''
  http.get(url, function(response) {
    response.setEncoding('utf8')
    
    response.on("data", function(d) {
      data += d
    })
    
    response.on("end", function() {
      callback(data)
    })
  })  
}

for(var i=0;i<urls.length;i++) {
  function store(idx, data) {
    count++
    content[idx] = data
    if(count === content.length) {
      content.forEach(function(c) {
        console.log(c)
      });
    }
  }

  fetcher(urls[i], store.bind(this, i))
}