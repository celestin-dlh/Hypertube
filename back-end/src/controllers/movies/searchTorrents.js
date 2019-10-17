import PirateBay from 'thepiratebay'

const searchTorrents = function(req, res) {

    const title = req.params.title;
    console.log('search torrent with :'. title);

    PirateBay.search(req.params.title, {
        category: 201,
        filter: {
            verified: false    // default - false | Filter all VIP or trusted torrents
        },
        page: 0,               // default - 0 - 99
        orderBy: 'seeds',      // default - name, date, size, seeds, leeches
        sortBy: 'desc'         // default - desc, asc
    })
        .then((results) => {
            console.log(results.length);
            res.send(results)
        })
        .catch(err => console.log(err))

};

export default searchTorrents;