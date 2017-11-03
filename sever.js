var http = require('http');
var server = http.createServer(function(req, res){
	console.log('hi gugu');
	res.write('guglaaaaaaaaaaaaaa');
	res.end();
});
server.listen(3000);