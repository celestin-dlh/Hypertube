const axios = require('axios');

const popular = async function(req, result) {

    await axios.get('https://yts.lt/api/v2/list_movies.jsonp?sort_by=like_count&limit=10')
        .then(response => {
            result.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

export default popular;