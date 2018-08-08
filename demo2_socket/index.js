var app = require('http').createServer(handler)

var io = require('socket.io').listen(app)

var fs = require('fs')

app.listen(7564, '192.168.1.105')

// EventEmitter.defaultMaxListeners = 100;
// emitter.setMaxListeners(100)
var userId = 1;

var names = [];
function getDate () {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
 return year+'年'+month+'月'+day+'日 '+ hour + ':'+ minute +':'+ second
}
function handler(req, res) {
  fs.readFile(__dirname + '/public/index.html', (err, data) => {
    if (err) return;
    res.setHeader("Content-Type", "text/html");
    res.end(data)
  })
}

io.sockets.on('connection', (socket) => {
  socket.on('joinChat', (data) => {
    console.log('[' + (data && data !== 'null' ? data : '游客') + ']' +'连接服务器成功 --------------' + getDate())
    io.sockets.emit('server', '[' + (data && data !== 'null' ? data : '游客') + ']' +'连接服务器成功 --------------' + getDate());
  })
  socket.on('client', (data) => {
    io.sockets.emit('server', '[ ' + (data.name ? data.name : '游客') + ' ]' +':' + data.value.toString())
  })
  io.sockets.on('connect_error', () => {
    console.log('退出聊天')
  })
})
