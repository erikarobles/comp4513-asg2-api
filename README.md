# COMP 4513 - Assignment 2 (Movies API)

## API Routes

#### Get all movies
(https://comp4513-api.onrender.com/api/movies)

#### Get movies by limit

(https://comp4513-api.onrender.com/api/movies/limit/5)

#### Get movies by id

(https://comp4513-api.onrender.com/api/movies/13)

#### Get movies by tmdb id

(https://comp4513-api.onrender.com/api/movies/tmdb/522)

#### Get movies by year range

(https://comp4513-api.onrender.com/api/movies/year/1999/2003)

#### Get movies by ratings range

(https://comp4513-api.onrender.com/api/movies/ratings/1/4)

#### Get movies by title

(https://comp4513-api.onrender.com/api/movies/title/american)

#### Get movies by genre

(https://comp4513-api.onrender.com/api/movies/genre/comedy)

## API Routes (Invalid Use Cases)

#### Get movies by limit - exceed 200

(https://comp4513-api.onrender.com/api/movies/limit/201)

#### Get movies by id - id does not exist

(https://comp4513-api.onrender.com/api/movies/1323)

#### Get movies by tmdb id - tmdb id does not exist

(https://comp4513-api.onrender.com/api/movies/tmdb/5232)

#### Get movies by year range - min is greater than max

(https://comp4513-api.onrender.com/api/movies/year/2030/2003)

#### Get movies by ratings range - min is greater than max

(https://comp4513-api.onrender.com/api/movies/ratings/5/4)

#### Get movies by ratings range - no matches with provided range

(https://comp4513-api.onrender.com/api/movies/ratings/1/3)

#### Get movies by title - title not found

(https://comp4513-api.onrender.com/api/movies/title/americana)

#### Get movies by genre - genre not found

(https://comp4513-api.onrender.com/api/movies/genre/comedies)
