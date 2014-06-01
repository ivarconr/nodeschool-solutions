var net = require('net') 
var strftime = require('strftime')

var port = process.argv[2]

var server = net.createServer(function (socket) {
    // socket handling logic
    socket.end(strftime("%Y-%m-%d %k:%M") + "\n")
})
server.listen(port)
