import torrentStream from 'torrent-stream';
import { MovieManager } from '../../services/MovieManager';
import fs from 'fs';

let files = {};

const streamFile = ({ file, res, range }) => {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0]);
    const end = (start + 6000000 >= file.length ? file.length - 1: start + 6000000);
    const chunksize = (end-start) + 1;
    const stream = file.createReadStream({
        start,
        end
    });

    const head = {
        'Content-Range': `bytes ${start}-${end}/${file.length}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    stream.pipe(res);
};

const streamLocalFile = ({ path, res, range }) => {
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0])
    const end = (start + 6000000 >= fileSize ? fileSize - 1: start + 6000000);
    const chunksize = (end-start) + 1;
    const file = fs.createReadStream(path, {start, end})

    const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
};

const saveFile = ({ file, imdb_id, quality }) => {
    const writeStream = fs.createWriteStream(`/sgoinfre/goinfre/Perso/cdelahay/hypertube-movies/${imdb_id}_${quality}`);

    console.log('Currently Stream writing...');
    writeStream.on('finish', () => {
        console.log('Wrting Stream Finished');
        delete files[imdb_id + '_' + quality];
    });
    file.createReadStream().pipe(writeStream)
};

const stream = async function(req, res) {
    const range = req.headers.range;
    const imdb_id = req.params.imdb_id; 
    const quality = (req.params.quality === '1080p') ? req.params.quality : '720p';

    if (!range || range === null) 
        return res.sendStatus(404);

    if (!files[imdb_id + '_' + quality] && fs.existsSync(`/sgoinfre/goinfre/Perso/cdelahay/hypertube-movies/${imdb_id}_${quality}`)) {
        const path =`/sgoinfre/goinfre/Perso/cdelahay/hypertube-movies/${imdb_id}_${quality}`;
        return streamLocalFile({
            path,
            range,
            res
        });
    }

    if (files[imdb_id + '_' + quality])
        return streamFile({
            file: files[imdb_id + '_' + quality],
            range,
            res
        });

    MovieManager.getMagnet(imdb_id, quality)
        .then((magnet) => {
            console.log(magnet + ' here')
            let engine = torrentStream(magnet, {
                trackers: [
                    'udp://glotorrents.pw:6969/announce',
                    'udp://tracker.opentrackr.org:1337/announce',
                    'udp://torrent.gresille.org:80/announce',
                    'udp://tracker.openbittorrent.com:80',
                    'udp://tracker.coppersurfer.tk:6969',
                    'udp://tracker.leechers-paradise.org:6969',
                    'udp://p4p.arenabg.ch:1337',
                    'udp://tracker.internetwarriors.net:1337'
                ],
            });
        
            engine.on('ready', function() {
                engine.files.forEach(function(file) {
                    if (file.name.split('.').pop() === 'mp4') {
                        files[imdb_id + '_' + quality] = file;
                        streamFile({
                            file: files[imdb_id + '_' + quality],
                            range,
                            res
                        });
                        saveFile({ file, imdb_id, quality });
                    }
                });
            });
        })
        .catch(() => {
            return res.sendStatus(400)
        })
};

export default stream;