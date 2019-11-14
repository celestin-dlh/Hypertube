import {lang} from "../../../../front-end/src/components/services/textLang";

const axios = require('axios');

let movies;

const searchGenre = async function(req, result) {
    await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MOVIEDB_API_KEY + '&language=' + req.params.lang + '&sort_by=popularity.desc&include_adult=true&include_video=true&with_genres=' + req.params.genre)
        .then(response => {
            movies = response.data;
        })
        .catch(error => {
            console.log(error);
        });

    result.json(movies);
};

export default searchGenre;