const axios = require('axios');
const PirateBay = require('thepiratebay');

const searchMovie = async function(req, result) {
    let page;
    let sortby;
    let orderBy = 'asc';
    let query = req.params.query.replace(/[^\w\s]/gi, '');

    req.params.page ? page = req.params.page : page = 1;
    req.params.sortBy ? sortby = req.params.sortBy : sortby = 'title';
    req.params.sortBy === "rating" ? orderBy = 'desc' : orderBy = 'asc';

    await axios.get('https://yts.lt/api/v2/list_movies.jsonp?&limit=25&page=' + page + '&sort_by=' + sortby + '&order_by=' + orderBy
        + '&query_term=' + query)
        .then(response => {
            if (!response.data) {
                PirateBay.search(query, {
                    category: 'video',
                    orderBy: 'seeds',
                    sortBy: 'desc'
                }).catch(e => null);
            }
            result.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

export default searchMovie;