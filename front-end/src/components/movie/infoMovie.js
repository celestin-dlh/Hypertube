import React from 'react';

export function InfoMovie(props) {

    console.log(props.movie);
    const movie = props.movie;



    return (
        <div id="movieInfo">
            <div id="poster">
                <img src={"http://image.tmdb.org/t/p/original" + movie.poster_path} alt="movie poster"/>
            </div>
            <div id="infoBoxe">
                <h1>{movie.title}</h1>
                <div id="yearRating">
                    <h3>{movie.release_date}</h3>
                    <div id="rating">
                        <div>Popularity {movie.popularity}</div>
                        <div>Rated {movie.vote_average}</div>
                    </div>
                </div>
                <h5 id="movieLenght">{Math.trunc(movie.runtime / 60) } h {movie.runtime % 60} min</h5>
                <div id="synopsis">{movie.overview}</div>
                <div class="tagline">
                    <h1>{movie.tagline}</h1>
                </div>
            </div>
        </div>
    );
}