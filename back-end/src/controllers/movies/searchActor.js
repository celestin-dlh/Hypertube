const axios = require('axios');

const searchActor = async function(req, result) {

    await axios.get('https://api.themoviedb.org/3/person/' + req.params.actorId + '?api_key='
        + process.env.MOVIEDB_API_KEY + '&language=' + req.params.lang
        + '&include_adult=false&append_to_response=movie_credits,images')
        .then(response => {
            result.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

export default searchActor;