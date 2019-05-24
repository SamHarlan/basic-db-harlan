var express = require('express');	// imports the express library
var router = express.Router();		// Router object for routes
var db = ("./db")
// Setting home route response
router.get('/', function handleRootGet(request, response) {

  exports.getAll = function GetAllHandler(done){
    db.get().query(
        'SELECT * FROM friends LIMIT 30', function SelectQueryHandler(err, result, fields){
          response.write("1");
            if (err) {
              response.write("result error");
              console.log("error getting all");
                return done(err);
              }
            //done(null, result, fields);
            response.write("result success");
            console.log(result);
        });
}
  //  rounter.get('/all');

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
