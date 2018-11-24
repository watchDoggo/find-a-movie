var http = require('http');
var fs = require('fs');
var url = require('url');
//var express = require('express');


//var app = express();

var hostname = '127.0.0.1';
var port = 3100;


var server = http.createServer((req, res) => {

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');

	var page = url.parse(req.url).pathname;

	if (page == "/"){

		fs.readFile('first.html', (err, html) => {

		res.write(html);
		res.end();

		});
	}
	else{

		fs.readFile('secondHTML.html', (err, html) => {

			res.write(html);
			res.end();
		});
	}
});

server.listen(port, hostname);

console.log("Server started on port " + port);



