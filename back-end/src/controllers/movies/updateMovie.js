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


function updateMovieNext(imdb_id) {
    Movie.findOne({imdb_id}, function(err, movieFind)  {
        moviedb.movieInfo({id: imdb_id, language: "fr"}).then(res => {
            Movie.updateOne({movieDbId: imdb_id}, {
                overview_fr: res.overview,
                title_fr: res.title,
                tagline_fr: res.tagline,
            }).then();
        });
        moviedb.movieInfo({id: imdb_id, language: "es"}).then(res => {
            Movie.updateOne({movieDbId: imdb_id}, {
                overview_es: res.overview,
                title_es: res.title,
                tagline_es: res.tagline,
            }).then();
        });
        moviedb.movieInfo({id: imdb_id}).then(res => {
            let imdbId = res.imdb_id;
            Movie.updateOne({movieDbId: imdb_id}, {
                tagline: res.tagline,
                imdb_id: res.imdb_id,
            }).then(() => {addTorrent(imdbId)});
        });
    });
}

let updateMovie = function (req, result) {
        const imdb_id = req.params.id;
        console.log("Update movie imdb_id : " + imdb_id);
        Movie.findOne({imdb_id}, () =>  {
            moviedb.movieInfo({id: imdb_id}).then(res => {
                Movie.updateOne({imdb_id}, {
                    modvidbId: res.id,
                    tagline: res.tagline,
                    popularity: res.popularity,
                    video: res.video,
                    vote_count: res.vote_count,
                    poster_path: res.poster_path,
                    adult: res.adult,
                    backdrop_path: res.backdrop_path,
                    original_language: res.original_language,
                    original_title: res.original_title,
                    genre_ids: res.genre_ids,
                    title: res.title,
                    vote_average: res.vote_average,
                    overview: res.overview,
                    release_date: res.release_date,
                    imdb_id: res.imdb_id,
                }).then(updateMovieNext(imdb_id));
                result.json(res);
            }).catch(console.error);
        });
};

export default updateMovie;