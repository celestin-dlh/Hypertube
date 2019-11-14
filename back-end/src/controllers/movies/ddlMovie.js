var torrentStream = require('torrent-stream');
const fs = require('fs');


const ddlMovie = function(req, res) {

    var engine = torrentStream('magnet:?xt=urn:btih:F976B434321C0FBE9027BB7B40386E0E40C23853&dn=Toy+Story+4+%282019%29+%5B720p%5D+%5BYTS.LT%5D&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337');

    engine.on('ready', function () {
        engine.files.forEach(function (file) {
            console.log('filename:', file.name);
            var stream = file.createReadStream();

            // stream is readable stream to containing the file content
        });
    });
};

export default ddlMovie;