// BASE SETUP
// =============================================================================

// Call the dependencies for our REST server:
// 1. call express
var express = require('express'); 
// 2. define our app using express   
var app = express();  
// 3. allow us to pull POST content from  our HTTP request      
var bodyParser = require('body-parser');


// Import DB and Page model
var db_connect = require('./app/dbconnect');
var Page = require('./app/models/page');

//Import Routes
const router = require('./app/routes/admin');

//Bind connection to error event (to get notification of connection errors)
db_connect.on('error', console.error.bind(console, 'MongoDB connection error:'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;        

// ROUTES FOR OUR API
// =============================================================================

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// register routes here

// REGISTER OUR ROUTES -------------------------------
app.use('/admin', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);