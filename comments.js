// Create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the index.html file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Serve the comments.json file
app.get('/comments.json', function(req, res) {
    res.sendFile(__dirname + '/comments.json');
});

// Handle POST requests to add comments
app.post('/add_comment', function(req, res) {
    fs.readFile(__dirname + '/comments.json', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        var comments = JSON.parse(data);
        comments.push(req.body.comment);

        fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });
    res.end();
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Server started on http://localhost:3000/');
});