const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    imdb_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    magnet720p: {
        type: String,
    },
    magnet1080p: {
        type: String,
    }
}, {
    timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

export default Movie;