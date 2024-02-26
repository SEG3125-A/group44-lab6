var http = require('http');
var fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// Static files
app.use(express.static(path.join(__dirname, "../")));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));

var server = http.createServer((req, res) => {
    console.log(`Request was made: ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/html'});

    var htmlPath = path.join(__dirname, '../index.html');
    var myReadStream = fs.createReadStream(htmlPath, 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');