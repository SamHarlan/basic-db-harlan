var express = require('express');	// imports the express library
var router = express.Router();		// Router object for routes
var db = require('./db');


// Setting home route response
router.get('/', function handleRootGet(request, response) {
  exports.getAll = function GetAllHandler(done){
      db.get().query('select
  E.first_name as emp_first_name,
  E.last_name as emp_last_name,
  dept_name,
  B.first_name as boss_first_name,
  B.last_name as boss_last_name
from
  employees E,
  dept_emp DE,
  departments D,
  dept_manager DM,
  employees B
where
  E.emp_no = DE.emp_no and
  DE.dept_no=D.dept_no and
  DE.to_date='9999-01-01' and
  E.emp_no=10005 and
  DM.to_date='9999-01-01' and
  D.dept_no=DM.dept_no and
  B.emp_no=DM.emp_no;', function SelectQueryHandler(err, result, fields){
              if (err) {
                  console.console.log("some error selecting all"); done(err);
                  console.log(err);
                  response.write("Error Getting All");
                }
                console.log("Successfully retrieve all records (100)");
                response.json(result);
              //done(null, result, fields);
          });
  }
});
    response.send('Home Page');

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
    db.get().query(
        'SELECT * FROM employees LIMIT 30', function SelectQueryHandler(err, result, fields){
            if (err)
                return done(err);
            done(null, result, fields);
        });
});

// Exporting the router "object"
module.exports = router;
