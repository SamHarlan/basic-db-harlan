var express = require('express');
var app = express();
var db = require('./db');

var port = 3010;

var myRouter = require('./employees.router.js');
// http://leia.cs.spu.edu:3010
app.use('/', myRouter);
//Serves static content from directory public
app.use('/', express.static('public'));

app.listen(port, function ServerListener() {
    console.log('Sample App with router. This app serves static content');
    console.log('http://leia.cs.spu.edu:3010');
});
