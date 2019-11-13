const axios = require('axios');

let movies;

const searchActor = async function(req, result) {
    const search = req.params.actorId;

    await axios.get('https://api.themoviedb.org/3/person/' + search + '/movie_credits?api_key=' + process.env.MOVIEDB_API_KEY + '&language=en-US')
        .then(response => {
            movies = response.data;
        })
        .catch(error => {
            console.log(error);
        });

    result.json(movies);
};

export default searchActor;