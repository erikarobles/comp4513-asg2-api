// GET /api/movies - return all books 
const getAllMovies = (app, Movie) => { 

    app.get('/api/movies', (req,resp) => { 
        Movie.find() 
            .then((data) => { resp.json(data); }) 
            .catch((err) => { resp.json({ message: "Failed to get movies" }); }); 
    }); 
}; 

// GET /api/movies/limit/:num - return first 'num' movies, num = 1-200
const getMoviesByLimit = (app, Movie) => { 

    app.get('/api/movies/limit/:num', (req,resp) => { 
        
        const num = parseInt(req.params.num);

        if(num < 1 || num > 200) {
            return resp.json({error: 'Invalid parameter: num'})
        }
        Movie.find().limit(num)
            .then((data) => { resp.json(data); }) 
            .catch((err) => { resp.json({ message: "Failed to get movies" }); }); 
    }); 
}; 

// GET /api/movies/:id - return a single book by id
const getMovieById = (app, Movie) => { 
    app.get("/api/movies/:id", (req, resp) => { 
        Movie.find({ id: req.params.id }) 
            .then((data) => { resp.json(data); }) 
            .catch((err) => { resp.json({ message: "Failed to get movie" }); }); 
    }); 
}; 

module.exports = { 
    getAllMovies,
    getMoviesByLimit,
    getMovieById
}; 
   