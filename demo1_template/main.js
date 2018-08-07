var http = require('http');

var fs = require('fs');


http.createServer( (req, res) => {
  // chekout(req, res);
  console.log('请求' + req.method)
  getLis(res);
}).listen(7564, '127.0.0.1')

// function chekout(req, res) {
//   // console.log(req.method + '----' + req.url + '--------host:' + req.headers.host)
//   // res.end(req.method + '----' + req.url + '--------host:' + req.headers.host)
// }
function getLis(res) {
  fs.readFile('./public/json/content.json', (err,data) => {
    if (err) return handleError(err, res)
    getTemplate(JSON.parse(data), res)
  })
}

function getTemplate(lis, res) {
  fs.readFile('./public/template/index.html', (err, data) => {
    if (err) return handleError(err, res)
    formatHTML(lis, data.toString(), res)
  })
}

function formatHTML(lis, template, res) {
  var html = template.replace('%', lis.join(`</li><li>`));
  res.writeHead(200, { 'Content-Type' : 'text/html'});
  
  res.end(html);
}

function handleError(err, res) {
  console.log(err);
  res.end('Server Error')
}