const axios = require('axios');

const infoMovie = async function(req, result) {
    let movie;
    await axios.get('https://api.themoviedb.org/3/movie/' + req.params.id + '?api_key=' + process.env.MOVIEDB_API_KEY + '&language=' + req.params.lang +'&append_to_response=credits,similar,videos')
        .then(response => {
            movie = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    result.json(movie);
};

export default infoMovie;