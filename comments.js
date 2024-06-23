// Create web server
// 1. Create a web server
// 2. Handle GET requests for /comments
// 3. Send back a response with some comments
// 4. Listen on port 3000

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ comments: ['one', 'two', 'three'] }));
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});






