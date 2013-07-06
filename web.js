var fs = require ('fs');
var express = require('express');
var data = new Buffer(40);

var app = express.createServer(express.logger());
//data = fs.readFileSync('index.html');
//console.log ("Length of data is", data.length);
//console.log ("The contents of the buffer are", data.toString('utf-8'));

app.get('/', function(request, response) {
  response.render('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
