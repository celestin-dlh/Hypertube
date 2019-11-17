const axios = require('axios');
const {isNumber} = require("@hapi/joi/lib/common");

const searchmovie = async function(req, result) {
    let movie, page, lang, sort;

    await isNaN(req.params.lang) ? lang = req.params.lang :  page = req.params.lang;
    await isNumber(req.params.lang) ? lang = 'en-EN' : page = req.params.lang;
    await req.params.lang === undefined ? lang = 'en-EN' :  lang = req.params.lang;

    axios.get('https://api.themoviedb.org/3/search/movie/?api_key=' + process.env.MOVIEDB_API_KEY +
           '&query=' + req.params.query + '&include_adult=true&language=' + lang +'&page=' + page)
        .then( response => {
                console.log("Search Movie with query : "+ req.params.query +
                            " Language : "+ lang + " Page : " + page);
                movie = response.data;
            }
        ).then(() => {
            result.json(movie)
        })
        .catch(error => {
                console.log(error);
            }
        );
};

export default searchmovie;