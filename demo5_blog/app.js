var http = require('http')

var path = require('path')

var fs = require('fs')

var filePath = path.join(__dirname, '/public/index.html');

var app = http.createServer( function(req, res) {
  // if (req.url == '/') {
    
  //   fs.readFile('./dist/index.html', function(err, data) {
  //     res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
  //     console.log(data)
  //     res.end(data)
  //   })
  // } else {
  //   res.end('500 Server Error')
  // }
  fs.createReadStream(filePath).pipe(res)
  // console.log(filePath)
})

app.listen(7564, '127.0.0.1')
