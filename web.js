var fs = require ('fs');
var express = require('express');
//var data = new Buffer(40);

var index = fs.readFileSync('index.html');

var app = express.createServer(express.logger());
//data = fs.readFileSync('index.html');
//console.log ("Length of data is", data.length);
//console.log ("The contents of the buffer are", data.toString('utf-8'));

console.log ("The file contents are", index.toString);

app.get('/', function(request, response) {
    response.writeHead(200, {'Content Type':'text/plain'});
    response.end(index);
//response.render('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
