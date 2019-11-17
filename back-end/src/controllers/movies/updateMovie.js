let request = require('request');
const axios = require('axios');
import Movie from "../../models/movie.model";

function addTorrent(imdb_id) {
    console.log("torrent");
    request('https://yts.lt/api/v2/list_movies.json?query_term=' + imdb_id , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let info = JSON.parse(body);
            if (info) {
                console.log("info.data " + info.data);
            }
            let nbTorrent = info.data.movie_count;
            if (nbTorrent !== 0) {

                let imdbId = info.data.movies[0].imdb_code;
                let torrent = info.data.movies[0].torrents;

                if (info.data.movie_count > 0) {
                    console.log("torrent find : " + torrent);
                    Movie.updateOne({imdb_id: imdbId}, {
                        torrents: torrent,
                    }).then();
                }
            }
        }
    });
}

function firstUpdate (imdb_id) {
    Movie.findOne({imdb_id}, () =>  {
        axios.get('https://api.themoviedb.org/3/movie/' + imdb_id + '?api_key=' + process.env.MOVIEDB_API_KEY +'&include_adult=true&append_to_response=credits,similar,videos').then(res => {
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
                    }
                ).then()
            }
        );
        axios.get('https://api.themoviedb.org/3/movie/' + imdb_id + '?api_key=' + process.env.MOVIEDB_API_KEY +'&language=fr-FR').then(res => {
            Movie.updateOne({movieDbId: imdb_id}, {
                overview_fr: res.overview,
                title_fr: res.title,
                tagline_fr: res.tagline,
            }).then();
        });
        axios.get('https://api.themoviedb.org/3/movie/' + imdb_id + '?api_key=' + process.env.MOVIEDB_API_KEY +'&language=es-ES').then(res => {
            Movie.updateOne({movieDbId: imdb_id}, {
                overview_es: res.overview,
                title_es: res.title,
                tagline_es: res.tagline,
            }).then();
        });
        axios.get('https://api.themoviedb.org/3/movie/' + imdb_id + '?api_key=' + process.env.MOVIEDB_API_KEY +'&language=en-EN').then(res => {
            let imdbId = res.imdb_id;
            Movie.updateOne({movieDbId: imdb_id}, {
                tagline: res.tagline,
                imdb_id: res.imdb_id,
            }).then();
        });
    })
}

let updateMovie = async function (req, result) {
   await req.params.id;
    console.log("Movie to update, imdb_id : " + req.params.id);
    await firstUpdate(req.params.id);
    await addTorrent(req.params.id);
    return result.json("Movie " + req.params.id + " updated");
};

export default updateMovie;