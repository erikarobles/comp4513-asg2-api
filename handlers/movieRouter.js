// GET /api/movies - return all books 
const getAllMovies = (app, Movie) => { 

    app.get('/api/movie', (req,resp) => { 
    // use mongoose to retrieve all books from Mongo 
        Movie.find() 
            .then((data) => { resp.json(data); }) 
            .catch((err) => { resp.json({ message: "Unable to get to movies" }); }); 
    }); 
}; 

module.exports = { 
    getAllMovies 
}; 
   