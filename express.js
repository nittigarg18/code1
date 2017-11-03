var express = require('express');
var app = express();
app.get('/get_user', function(req, res){
	res.send('get');
});
app.post('/post_user', function(req, res){
	res.send('post');
});
app.delete('/post_user', function(req, res){
	res.send('delete');
});
app.get('/list_user', function(req, res){
	res.send('list');
});
app.get('//ab*cd', function(req, res){
	res.send('abc');
});
var server = app.listen(8081, function(){
	console.log('welcome 8081');
});