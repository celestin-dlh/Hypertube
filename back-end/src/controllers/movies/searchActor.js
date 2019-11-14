const axios = require('axios');

let movies;

const searchActor = async function(req, result) {

    await axios.get('https://api.themoviedb.org/3/person/' + req.params.actorId + '?api_key=' + process.env.MOVIEDB_API_KEY + '&language=' + req.params.lang + '&include_adult=true&append_to_response=movie_credits,images')
        .then(response => {
            movies = response.data;
        })
        .catch(error => {
            console.log(error);
        });

    result.json(movies);
};

export default searchActor;