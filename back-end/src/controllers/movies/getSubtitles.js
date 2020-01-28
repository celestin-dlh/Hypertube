const OS = require('opensubtitles-api');
const request = require('request');
const fs = require('fs');
const OpenSubtitles = new OS({
    useragent:'TemporaryUserAgent',
    username: process.env.OPENSUB_USERNAME,
    password: process.env.OPENSUB_PASSWORD,
    ssl: true
});

async function getSubtitle(req, response) {
    const { imdb_id, lang } = req.params;
    const dest = 'public/subtitles/' + imdb_id + '_' + lang + '.vtt';

    if (!imdb_id|| !lang)
        return response.sendStatus(404)

    if (fs.existsSync(dest)) {
        fs.readFile(dest, "utf8", function(err, data){
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/vtt' });
            response.end(data)
        });
    }
    else {
        await OpenSubtitles.login()
            .catch(err => {
                console.log(err);
            });
        await OpenSubtitles.search({
            sublanguageid: lang,   
            extensions: ['srt', 'vtt'],
            limit: 'best',
            imdbid: imdb_id,
        })
        .then((res) => {
            if (Object.keys(res).length !== 0) {
                const key = Object.keys(res)
                request(res[key].vtt)
                    .pipe(fs.createWriteStream(dest))
                    .on('error', function(err) {
                        if (err) {
                            if (fs.existsSync(dest)) fs.unlinkSync(dest)
                        }
                    })
                    .on('finish', () => {
                        fs.readFile(dest, "utf8", function(err, data) {
                            if (err) throw err;
                            response.writeHead(200, { 'Content-Type': 'text/vtt' });
                            response.end(data)
                        });
                    })                
            }
        })
        .catch((err) => {
            response.sendStatus(400)
        })
    } 
}

export default getSubtitle;