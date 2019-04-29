// Jamar Flowers
// Node simple server 2
// Project: 
// 6/1/18


// set 'http' as http object
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('static/index.html');

// create new server object
// lowercase c and capital S when calling 
// createServer.

http.createServer(function(req,res){
        
      res.writeHead(200, {'Content-Type': 'html'});
      res.end(index);
        
    }).listen(8080);
