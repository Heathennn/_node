var app = require('http').createServer(handler)

var io = require('socket.io').listen(app)

var fs = require('fs')

app.listen(7564, '127.0.0.1')

function handler(req, res) {
  fs.readFile(__dirname + '/public/index.html', (err, data) => {
    if (err) return;
    res.setHeader("Content-Type", "text/html");
    res.end(data)
  })
}

io.sockets.on('connection', (socket) => {
  socket.emit('server', '服务器发送于' + new Date());
  socket.on('client', (data) => {
    console.log('来自客户端的消息: ' + data.toString())
    socket.emit('server', '用户消息:' + data.toString());
  })
})