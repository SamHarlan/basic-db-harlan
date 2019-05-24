var express = require('express');
var app = express();
var db = require('./db');

var port = 3010;

// http://leia.cs.spu.edu:3010
app.use('/', myRouter);
//Serves static content from directory public
app.use('/', express.static('public'));

db.connect(function ConnectionHandler(err){
    if (err){
        console.log('Unable to connect to MySQL');
        process.exit(1);
    }
    console.log("Connection to MySQL Successfull");
});

var myRouter = require('./employees.router.js');

app.all('/', function HandleAll(request, response, next){
    console.log(request.connection.remoteAddress);
    next();
});

app.use('/api', router);

app.listen(port, function ServerListener() {
    console.log('Sample App with router. This app serves static content');
    console.log('http://leia.cs.spu.edu:3010');
});
