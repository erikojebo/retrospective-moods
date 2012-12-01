var express = require('express');

var app = express.createServer(express.logger());

console.log("Starting server...");

app.use('/images', express.static(__dirname + '/../client/images'));
app.use(express.static(__dirname + '/../client'));

app.get(function (request, response) {
	response.sendFile(__dirname + "/../client/index.html");
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on port: " + port);
});


