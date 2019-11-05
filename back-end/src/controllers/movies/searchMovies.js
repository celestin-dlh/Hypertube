const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb(process.env.MOVIEDB_API_KEY);
import Movie from "../../models/movie.model";
import newMovie from "./newMovie";

const searchmovie = function(req, res) {
    const search = req.params.title;

    moviedb.searchMovie({ query: search }).then(result => {
        for(let i= 0; i < result.results.length; i++)
        {
           Movie.findOne({movieDbId: result.results[i].id}, function(err, movieFind)  {
            if (movieFind) {
                // already have the movie
                console.log('movie is ', movieFind.title);
                console.log('movie imdbid is ', movieFind.id);
            } else {
                // if not save movie
                newMovie(result.results[i]);
            }});
        }
        res.json(result);
    })
};

export default searchmovie;