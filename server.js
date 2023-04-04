require('dotenv').config(); 
const express = require('express'); 
const app = express(); 

// serves up static files from the public folder. 
app.use(express.static('public'));
// also add a path to static 
app.use('/static', express.static('public'));

// get our data model 
const Movie = require('./models/Movie'); 

// tell node to use json and HTTP header features in body-parser 
app.use(express.urlencoded({extended: true})); 
// use the route handlers 

// create connection to database 
require('./handlers/dataConnector.js').connect(); 

app.use(function (req, res, next) { 
    res.status(404).send("Sorry I can't find that!") 
}); 

const port = process.env.port; 
app.listen(port, () => { 
 console.log("Server running at port= " + port); 
}); 