// Create a web server
// Create a web server that listens on port 3000 and serves comments.json as a JSON response when a GET request is made to /comments.
// Make sure to use the right content-type.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    fs.createReadStream(__dirname + '/comments.json').pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000);
console.log('Server running at http://localhost:3000/');