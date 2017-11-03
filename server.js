var http = require('http');
var httpServer = http.createServer(function(req, res){
	console.log('server started');
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end('jhjdhdjskdhsk');
});
httpServer.listen(3000);