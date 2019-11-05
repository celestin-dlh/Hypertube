const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb(process.env.MOVIEDB_API_KEY);
import Movie from "../../models/movie.model";
import newMovie from "./newMovie";

const infoMovie = function(req, result) {
    const id = req.params.id;

    moviedb.movieInfo({ id }).then(res => {
        Movie.findOne({movieDbId: res.id}, function(err, movieFind)  {
                        if (movieFind) {
                             console.log('Search movie : ', movieFind.title);
                         } else {
                            console.log('New movie to save : ', movieFind.title);
                             newMovie(res);
                         }
            result.json(movieFind);
        });
    }).catch(console.error);
};

export default infoMovie;