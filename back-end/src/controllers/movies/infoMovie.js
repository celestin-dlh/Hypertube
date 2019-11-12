const axios = require('axios');

let movie;


const infoMovie = async function(req, result) {
    const id = req.params.id;

    await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + process.env.MOVIEDB_API_KEY + '&append_to_response=credits,similar')
        .then(response => {
            movie = response.data;
        })
        .catch(error => {
            console.log(error);
        });

    result.json(movie);
};

export default infoMovie;