require('dotenv').config(); 
const express = require('express'); 
const app = express(); 

// get our movie data model
const Movie = require('./models/Movie'); 

// tell node to use json and HTTP header features in body-parser 
app.use(express.urlencoded({extended: true}));

// use the route handlers 
const movieRouter = require('./handlers/movieRouter.js'); 
movieRouter.getAllMovies(app, Movie);
movieRouter.getMoviesByLimit(app, Movie);
movieRouter.getMovieById(app, Movie);
movieRouter.getMovieByTmbdId(app, Movie);
movieRouter.getMoviesByYearRange(app, Movie);

// create connection to database 
require('./handlers/dataConnector.js').connect(); 

app.use(function (req, res, next) { 
    res.status(404).send("Sorry I can't find that!") 
}); 

const port = process.env.port; 
    app.listen(port, () => { 
    console.log("Server running at port= " + port); 
}); 