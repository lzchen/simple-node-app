var express = require('express');
var events = require('events');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
})
app.listen(8080);
