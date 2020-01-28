const axios = require('axios');
import Movie from '../../models/movie.model';

function saveMovieDb(imdb_id, torrents) {
    let obj = {};
    for (let i = 0; i < torrents.length; i++) {
        if (torrents[i].quality === "720p") obj.magnet720p = torrents[i].magnet;
        else if (torrents[i].quality === "1080p") obj.magnet1080p = torrents[i].magnet;
    }

    Movie.findOne({ imdb_id }, function(err, movie) {
        if (!movie) {
            obj.imdb_id = imdb_id;
            const newMovie = new Movie(obj);
            newMovie.save();
        }
    });
}

async function getTorrents(req, result){
    const imdb_id = req.params.imdb_id;

    if (imdb_id) {
        await axios.get('https://yts.lt/api/v2/list_movies.jsonp?&query_term=' + imdb_id)
        .then(response => {
            if (response.data.status !== 'ok' || response.data.data.movie_count === 0)
                return result.sendStatus(204);
            const torrents = response.data.data.movies['0'].torrents
                .reduce((prev, curr) => {
                    if (curr.quality !== "3D")
                        return [
                            ...prev,
                            ({
                                ...curr,
                                magnet: `magnet:?xt=urn:btih:${curr.hash}&dn=${imdb_id}::${curr.quality}`
                            })
                        ]
                    return prev;
                }, [])

            result.json(torrents);
            saveMovieDb(imdb_id, torrents);
        })
        .catch(console.log)
    }
    else {
        res.sendStatus(401)
    }
}

export default getTorrents;