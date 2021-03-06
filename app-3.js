
var express = require('express');
var app = express();
var myRouter = require('./employees.router.js');

app.use('/', myRouter);
//Serves static content from directory public
app.use('/', express.static('public'));

app.listen(3010, function ServerListener() {
    console.log('Sample App with router. This app serves static content');
    console.log('http://leia.cs.spu.edu:3010');
});
