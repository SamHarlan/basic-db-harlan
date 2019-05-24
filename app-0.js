const http = require('http');
const hostname = 'localhost';
const port = 3010;

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "csc3221!",
  database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("SELECT * FROM employees LIMIT 5", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        response.json(result);

    });
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
