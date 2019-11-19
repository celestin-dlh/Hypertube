const axios = require('axios');
const {isNumber} = require("@hapi/joi/lib/common");

function addPage(movie, page) {
    page = Number(page);
    if (page < movie.total_pages)
    {
        console.log(movie.total_pages);
    }
    else {
        console.log("else " + movie.total_pages);
    }
    return movie
}

const searchmovie = async function(req, result) {
    let movie, page, lang;

    req.params.lang === 'undefined' ? lang = "en-EN" :  lang = req.params.lang;
    req.params.page === 'undefined' ? page = 1 :  page = req.params.page;


    axios.get('https://api.themoviedb.org/3/search/movie/?api_key=' + process.env.MOVIEDB_API_KEY +
        '&query=' + req.params.query + '&include_adult=true&language=' + lang +'&page=' + page)
        .then( response => {
                console.log("Search Movie with query : "+ req.params.query +
                    " Language : "+ lang + " Page : " + page);
                movie = response.data;
            }
        ).then(() => {

            axios.get('https://api.themoviedb.org/3/search/movie/?api_key=' + process.env.MOVIEDB_API_KEY +
                '&query=' + req.params.query + '&include_adult=true&language=' + lang +'&page=' + (Number(page)+1))
                .then( response => {
                        console.log("Search Movie with query : "+ req.params.query +
                            " Language : "+ lang + " Page : " + (Number(page)+1));
                        for (let i=0; i<20; i++) {
                            let numbeResult = Number(page)*20;
                            movie['results'][numbeResult+i] = response.data.results[i];
                        }
                    }
                ).then(() => {
                result.json(movie)
            })
        }
    )
        .catch(error => {
                console.log(error);
            }
        );
};

export default searchmovie;