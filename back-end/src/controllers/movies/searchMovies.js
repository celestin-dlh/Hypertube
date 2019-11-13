const axios = require('axios');

let movie;

const searchmovie = async function(req, result) {
    const search = req.params.title;

    await axios.get('https://api.themoviedb.org/3/search/movie/?api_key=' + process.env.MOVIEDB_API_KEY + '&query=' + search )
        .then(response => {
            movie = response.data;
        })
        .catch(error => {
            console.log(error);
        });

    result.json(movie);
};

export default searchmovie;