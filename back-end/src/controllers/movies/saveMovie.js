import Movie from "../../models/movie.model";

function saveMovieFr() {
    console.log('save fr')
}

function saveMovieEs() {
    console.log('save es')
}
function saveMovieEn() {
    console.log('save en')
}

function saveMovie(movie, languague) {
    if (languague === 'fr' || languague === 'FR') {
        saveMovieFr(movie)
    }
    else if (languague === 'es' || languague === 'ES') {
        saveMovieEs(movie)
    }
    else {
        saveMovieEn(movie)
    }
}

export default saveMovie;