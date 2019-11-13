const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb(process.env.MOVIEDB_API_KEY);
let request = require('request');
import Movie from "../../models/movie.model";

function addTorrent(imdb_id) {

    request('https://yts.lt/api/v2/list_movies.json?query_term=' + imdb_id , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let info = JSON.parse(body);
            let nbTorrent = info.data.movie_count;
            if (nbTorrent !== 0) {
                let imdbId = info.data.movies[0].imdb_code;
                let torrent = info.data.movies[0].torrents;

                if (info.data.movie_count > 0) {
                    Movie.updateOne({imdb_id: imdbId}, {
                        torrents: torrent,
                    }).then();
                }
            }
        }
    });
}

function updateMovie(movie) {
    Movie.findOne({movieDbId: movie}, function(err, movieFind)  {
        moviedb.movieInfo({id: movie, language: "fr"}).then(res => {
            Movie.updateOne({movieDbId: movie}, {
                overview_fr: res.overview,
                title_fr: res.title,
                tagline_fr: res.tagline,
            }).then();
        });
        moviedb.movieInfo({id: movie, language: "es"}).then(res => {
            Movie.updateOne({movieDbId: movie}, {
                overview_es: res.overview,
                title_es: res.title,
                tagline_es: res.tagline,
            }).then();
        });
        moviedb.movieInfo({id: movie}).then(res => {
            let imdbId = res.imdb_id;
            let genres = [];
            for (let i = 0; i < res.genres.length; i++) {
                genres[i] = res.genres[i].name;
            }
            Movie.updateOne({movieDbId: movie}, {
                tagline: res.tagline,
                imdb_id: res.imdb_id,
                runtime: res.runtime,
                genres:  genres,
            }).then(() => {addTorrent(imdbId)});
        });
    });
}

function newMovie(movie) {

    let poster;
    let backdroppath;
    if (movie.poster_path) {
        poster = 'http://image.tmdb.org/t/p/w500/' + movie.poster_path;
    }
    if (movie.backdrop_path) {
        backdroppath = 'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
    }

    new Movie({
        movieDbId: movie.id,
        popularity: movie.popularity,
        vote_count: movie.vote_count,
        poster_path: poster,
        adult: movie.adult,
        backdrop_path: backdroppath,
        original_language: movie.original_language,
        original_title: movie.original_title,
        title: movie.title,
        tagline: movie.tagline,
        vote_average: movie.vote_average,
        overview: movie.overview,
        release_date: movie.release_date,
    }).save().then(() => {updateMovie(movie.id)});
}

export default newMovie;