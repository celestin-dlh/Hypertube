import React from 'react';

function Genres(props) {
    return(<div id="genres">
        {props.genres.map((genre) => {
            return (<a href={"http://localhost:3000/genre/" + genre.id } key={genre.id}><div key={genre.id} className={'genre'}>{genre.name}</div></a>)})}
    </div>)
}

export function InfoMovie(props) {

    const movie = props.movie;
    if (movie.runtime) {
        let background_path = "http://image.tmdb.org/t/p/original" + movie.backdrop_path;
        return (
            <div id="movieInfo" style={{backgroundImage: `url(${background_path})`}}>
                <div id="poster">
                    <img src={"http://image.tmdb.org/t/p/original" + movie.poster_path} alt="movie poster"/>
                </div>
                <div id="infoBoxe">
                    <h1>{movie.title}</h1>
                    <div id="yearRating">
                        <h3>{movie.release_date.substring(0, 4)}</h3>
                        <div id="rating">
                            <div>Popularity {movie.popularity}</div>
                            <div>Rated {movie.vote_average}</div>
                        </div>
                    </div>
                    <div id="lengthGenres">
                        <h5 id="movieLenght">{Math.trunc(movie.runtime / 60)} h {movie.runtime % 60} min</h5>
                        <Genres genres={movie.genres}/>
                    </div>
                    <div id="synopsis">{movie.overview}</div>
                    <div className="tagline">
                        <h1>{movie.tagline}</h1>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (<div>Loading</div>)
}