const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    imdbId: {
        type: String,
    },
    title: {
        type: String,
    },
    synopsis: {
        type: String,
    },
    year: {
        type: String,
    },
    length: {
        type: String,
    },
    imdbRating: {
        type: Number,
        min: 0,
        max: 10,
    },
    director: {
        type: String,
    },
    stars: {
        type: Array,
    },
    trailer: {
        type: String,
    },
}, {
    timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

export default Movie;