// GET /api/movies - return all books 
const getAllMovies = (app, Movie) => {

    app.get('/api/movies', (req, resp) => {
        Movie.find()
            .then((data) => {
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movies"
                });
            });
    });
};

// GET /api/movies/limit/:num - return first 'num' movies, num = 1-200
const getMoviesByLimit = (app, Movie) => {

    app.get('/api/movies/limit/:num', (req, resp) => {

        const num = parseInt(req.params.num);

        if (num < 1 || num > 200) {
            return resp.json({
                error: 'num must be between 1 and 200.'
            })
        }

        Movie.find().limit(num)
            .then((data) => {
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movies"
                });
            });
    });
};

// GET /api/movies/:id - return a single book by id
const getMovieById = (app, Movie) => {
    app.get("/api/movies/:id", (req, resp) => {
        Movie.find({
                id: req.params.id
            })
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    return resp.status(404).json({
                        message: "Movie ID does not exist in the database. Failed to get movie"
                    });
                }
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movie"
                });
            });
    });
};

// GET /api/movies/tmdb/:id - return a single book by tmdb_id
const getMovieByTmdbId = (app, Movie) => {
    app.get("/api/movies/tmdb/:id", (req, resp) => {
        Movie.find({
                tmdb_id: req.params.id
            })
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    return resp.status(404).json({
                        message: "TMDB ID does not exist in the database. Failed to get movie"
                    });
                }
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movie"
                });
            });
    });
};

// GET /api/movies/year/:min/:max- return a books whose year is between the min and max
const getMoviesByYearRange = (app, Movie) => {

    app.get("/api/movies/year/:min/:max", (req, resp) => {

        const min = req.params.min;
        const max = req.params.max;

        if (min > max) {
            return resp.status(400).json({
                error: "Min must be less than or equal to max."
            });
        }

        const minYear = parseInt(min);
        const maxYear = parseInt(max);

        Movie.find()
            .where("release_date")
            .regex(new RegExp(`^(${minYear}|${maxYear})`))
            .sort({
                title: 1
            })
            .exec()
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    return resp.status(404).json({
                        message: "No movies match the selected range."
                    });
                }
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movies"
                });
            });
    });
};

// GET /api/movies/ratings/:min/:max - return a books whose avg. rating is between the min and max
const getMoviesByRatingRange = (app, Movie) => {

    app.get("/api/movies/ratings/:min/:max", (req, resp) => {

        const min = req.params.min;
        const max = req.params.max;

        if (min > max) {
            return resp.status(400).json({
                error: "Min must be less than or equal to max."
            });
        }

        Movie.find()
            .where("ratings.average")
            .gt(req.params.min)
            .lt(req.params.max)
            .sort({
                title: 1
            })
            .exec()
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    return resp.status(404).json({
                        message: "No movies match the selected range."
                    });
                }
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movies"
                });
            });
    });
};

// GET /api/movies/title/:text - return books whose title contains the given text somewhere in the title
const getMoviesByTitle = (app, Movie) => {
    app.get("/api/movies/title/:text", (req, resp) => {

        const text = req.params.text;
        Movie.find({
                title: {
                    $regex: new RegExp(text, "i")
                }
            })
            .sort({
                title: 1
            })
            .exec()
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    return resp.status(404).json({
                        message: "Title does not exist in the database. Failed to get movies"
                    });
                }
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movies"
                });
            });
    });
};

// GET /api/movies/genre/:name - return books whose genres matches the provided genre
const getMoviesByGenre = (app, Movie) => {
    app.get("/api/movies/genre/:name", (req, resp) => {

        const genre = req.params.name;

        Movie.find({
                "details.genres.name": {
                    $regex: new RegExp(genre, "i")
                }
            })
            .sort({
                title: 1
            })
            .exec()
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    return resp.status(404).json({
                        message: "Genre does not exist in the database. Failed to get movies"
                    });
                }
                resp.json(data);
            })
            .catch((err) => {
                resp.json({
                    message: "Failed to get movies"
                });
            });
    });
};

module.exports = {
    getAllMovies,
    getMoviesByLimit,
    getMovieById,
    getMovieByTmdbId,
    getMoviesByYearRange,
    getMoviesByRatingRange,
    getMoviesByTitle,
    getMoviesByGenre
};