const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movieDbId: {
        type: String,
    },
    imdb_id: {
        type: String,
    },
    original_language: {
        type: String,
    },
    original_title: {
        type: String,
    },
    popularity: {
        type: String,
    },
    video: {
        type: Boolean,
    },
    vote_count: {
        type: Number,
    },
    poster_path: {
        type: String,
    },
    adult: {
        type: Boolean,
    },
    backdrop_path: {
        type: String,
    },
    genre_ids: {
        type: Array,
    },
    title: {
        type: String,
    },
    title_fr: {
        type: String,
    },
    title_es: {
        type: String,
    },
    tagline: {
        type: String,
    },
    tagline_fr: {
        type: String,
    },
    tagline_es: {
        type: String,
    },
    vote_average: {
        type: Number,
    },
    overview: {
        type: String,
    },
    overview_fr: {
        type: String,
    },
    overview_es: {
        type: String,
    },
    release_date: {
        type: String,
    },
    torrents: {
        type: Array,
    }
}, {
    timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

export default Movie;