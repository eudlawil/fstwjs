const express = require( 'express' );
const volleyball = require('volleyball')
const app = express(); // creates an instance of an express application

var port    =   process.env.PORT || 3000;


//var router = express.Router();

app.use(volleyball);

// route middleware that will happen on every request
/* app.use(function(req, res, next) {
    // log each request to the console
    if (req.url.match(/\/special\//) ) {
        console.log("You are VERY SPECIAL");
    }
    else {
        console.log(req.method, req.url, res.statusCode);
    }
        // continue doing what we were doing and go to the route
    next(); 
});  */

// app.route('/')
//     .get(function(req, res) {
//         res.send('Welcome to Lisa\'s House! ');
//     })
app.get('/', (req, res) => res.send('Hello World! This is Lisa\'s House!'))
app.get('/news', (req, res) => res.send('Fresh News here... get your fresh news here!'))


app.listen(port);
console.log("Server Listening on port " + port);
