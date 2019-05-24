var express = require('express');	// imports the express library
var router = express.Router();		// Router object for routes
var db = require('./db.js');		// Get access to the Database


// Setting home route response
router.get('/', function handleRootGet(request, response) {
 // response.sendfile('public/index.html');
  //response.send('Home Page');
  '<!DOCTYPE html> \n' +
      '<html lang="en" dir="ltr"> \n' +
      '  <head> \n' +
      '    <meta charset="utf-8"> \n' +
      '    <title>MySQL Assignment</title> \n' +
      '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n' +
      '  </head> \n' +
      '  <body> \n' +
      '      <div class="container"> \n' + '<br>' + '<br>' +
      '       <h1>Welcome!</h1> \n' +
      '       <h5>Choose a button that you want to be directed..</h5> \n' + '<br>' +
      '       <a href="/employees" class="btn btn-secondary btn-lg" role="button" aria-disabled="true">View Employees</a> \n' +
      '       <a href="/salaries" class="btn btn-secondary btn-lg" role="button" aria-disabled="true">View Salaries</a> \n' +
      '       <a href="/departments" class="btn btn-secondary btn-lg" role="button" aria-disabled="true">View Departments</a> \n' +
      '       <a href="/bosses" class="btn btn-secondary btn-lg" role="button" aria-disabled="true">View Bosses</a> \n' +
      '       <a href="/all" class="btn btn-secondary btn-lg" role="button" aria-disabled="true">View All</a> \n' +
      '      </div> \n' +
      '  </body> \n' +
      '</html> \n'

      response.write('Home Page');
  // Create a static page with links to all 5 requests, or serve that page here
});

router.get('/employees', function (request, response) {
  db.connect(function ConnectToDatabase(err){
    if (err){
      console.log("Unable to Connect to MySQL");
      process.exit(1); //Possibly need to send error page to client
    }
    db.get().query("SELECT first_name,last_name,emp_no FROM employees LIMIT 30", function QueryHandler(err, result, fields){
      if (err)
      throw err;
      //response.send(JSON.stringify(result));
      response.write(
        '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '        <head> \n' +
        '               <meta charset="utf-8"> \n' +
        '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
        '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
        '               <meta name="description" content="30 Employees"> \n' +
        '               <meta name="author" content="Lhakpa Sherpa"> \n' +
        '               <script type="text/javascript" src="buses.js"></script> \n' +
        '               <title>Client Side Example</title> \n' +
        '               <!-- Bootstrap core CSS --> \n' +
        '               <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n' +
        '       </head> \n' +
        '<table class="table table-bordered table-hover"> \n' +
        '	<thead class = "thead-dark"> \n' +
        '		<tr> \n' +
        '			<th scope="col">Employee #</th> \n' +
        '			<th scope="col">First Name</th> \n' +
        '			<th scope="col">Last Name</th> \n' +
        '		</tr> \n' +
        '	</thead> \n' +
        '	<tbody> \n'
      );
      for (record of result){
        response.write(
          '<tr> \n' +
          '	<td>' + record["emp_no"] + '</td> \n' +
          '	<td>' + record["first_name"] + '</td> \n' +
          '	<td>' + record["last_name"] + '</td> \n' +
          '</tr> \n'
        );
      }
      response.write("</tbody></table></body></html>");
      response.end();
    });
  });
});

router.get('/salaries', function (request, response) {
  db.get().query(
    'select first_name,last_name,salary from employees join salaries on employees.emp_no=salaries.emp_no limit 30',
    function SelectQueryHandler(err, result, fields){
      if (err)
      return done(err);
      response.send(result);
    });
  });

  router.get('/departments', function (request, response) {
    db.get().query(
      'select first_name, last_name,dept_name from employees, departments, dept_emp where employees.emp_no = dept_emp.emp_no and dept_emp.dept_no = departments.dept_no limit 30',
      function SelectQueryHandler(err, result, fields){
        if (err)
        return done(err);
        response.send(result);
      });
    });

    router.get('/bosses', function (request, response) {
      db.get().query(
        'SELECT emp_no, first_name FROM employees LIMIT 30',
        function SelectQueryHandler(err, result, fields){
          if (err)
          return done(err);
          response.send(result);
        });
      });

      router.get('/all', function (request, response) {
        db.get().query(
          'SELECT emp_no, first_name FROM employees LIMIT 30',
          function SelectQueryHandler(err, result, fields){
            if (err)
            return done(err);
            response.send(result);
          });
        });

        // Exporting the router "object"
        module.exports = router;
