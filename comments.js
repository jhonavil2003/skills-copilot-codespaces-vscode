// Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log(path);
  // Serve the index.html file
  if (path === '/' || path === '/index.html') {
    fs.readFile(__dirname + '/index.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Oh no! Error 404: Not found!');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (path === '/comments') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Comments page');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Oh no! Error 404: Not found!');
    res.end();
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
