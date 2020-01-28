const axios = require('axios');

const searchGenre = async function(req, result) {
    await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MOVIEDB_API_KEY
        + '&language=' + req.params.lang + '&sort_by=popularity.desc&include_video=true&with_genres=' + req.params.genre)
        .then(response => {
            result.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

export default searchGenre;