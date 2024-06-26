var http = require('http');
var dt = require('./timestamp');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("The date and time is currently: " + dt.myDateTime());
	res.end('Connected');
}).listen(8080);

console.log('Connected to port 8080 through localhost');
console.log('The result is displayed in the Command Line Interface');
