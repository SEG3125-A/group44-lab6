// Entry point for the application

// express application
var express = require('express');

// require the controller we make
var surveyController = require('./surveyController');

var app = express();


/**
 * 'app' refers to the instance of the Express application
 * 
 * 'view engine': This is a key representing the view engine to 
 * be used by Express. In this case, it's set to 'ejs'.
 * 
 * 'ejs': This is the value associated with the key 'view engine'. 
 * It specifies that the application will use the EJS (Embedded JavaScript) 
 * templating engine to render views.
 */
app.set('view engine', 'ejs');


/**
 * static file serving
 * 
 * The app.use middleware mounts the express.static middleware at the 
 * root level, making all files in the public directory accessible 
 * from the root of the server.
 * 
 * Clients can request static files by specifying the file path 
 * relative to the public directory. For example, if you have a file
 * named 'action.js' in the 'public/assets' directory, clients can
 * access it at 'http://localhost:3000/assets/action.js'
 */
app.use(express.static('../public'));

// set up routes or other functionality related to surveys within the Express application(i.e. app)
surveyController(app)

// listen to port
app.listen(3000);
console.log('The server (Express application) is now listening on port 3000')