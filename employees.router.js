var express = require('express');	// imports the express library
var router = express.Router();		// Router object for routes
var db = ("./db")
// Setting home route response
router.get('/', function handleRootGet(request, response) {
db.connect(function connectToDatabase(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("SELECT * FROM employees LIMIT 5", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      response.write(result);
      response.write("insile function");
      //response.send(result);
  });

});
response.write("result end");
response.write('Home Page');
response.end();
    // Create a static page with links to all 5 requests, or serve that page here
});
// Setting the more-info response
router.get('/employees', function (request, response) {
});

router.get('/salaries', function (request, response) {
});

router.get('/departments', function (request, response) {
});

router.get('/bosses', function (request, response) {
});

router.get('/all', function (request, response) {
  connection.query("SELECT * FROM employees LIMIT 5", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      response.write(result);
  });
  response.end();
});

// Exporting the router "object"
module.exports = router;
