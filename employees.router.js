var express = require('express');	// imports the express library
var router = express.Router();		// Router object for routes

// Setting home route response
router.get('/', function handleRootGet(request, response) {
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
});

// Exporting the router "object"
module.exports = router;
