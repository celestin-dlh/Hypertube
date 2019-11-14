import React from 'react';

function Poster(movie) {
    return (
        <div id="poster">
            <img src={"http://image.tmdb.org/t/p/original" + movie.poster_path} alt="movie poster"/>
        </div>
    )
}

function Genres(movie) {
    return(<div id="genres">
        {movie.genres.map((genre) => {
            return (<a href={"http://localhost:3000/genre/" + genre.id } key={genre.id}><div key={genre.id} className={'genre'}>{genre.name}</div></a>)})}
    </div>)
}

function YearRating(movie) {
    return (
        <div id="yearRating">
            <div><h3>{movie.release_date.substring(0, 4)}</h3></div>
            <div id="rating">
                <div><span>Popularity {movie.popularity}</span></div>
                <div><span>Rated {movie.vote_average}</span></div>
            </div>
        </div>)
}

function LengthGenres(movie) {
    return (
    <div id="lengthGenres">
        <h5 id="movieLenght">{Math.trunc(movie.runtime / 60)} h {movie.runtime % 60} min</h5>
        <Genres genres={movie.genres}/>
    </div>)
}

function Tagline(movie) {
    return (
    <div className="tagline">
        <h1>{movie.tagline}</h1>
    </div>)
}

export function InfoMovie(movie) {
    console.log(movie);
    if (movie.runtime) {
        let background_path = "http://image.tmdb.org/t/p/original" + movie.backdrop_path;
        return (
            <div id="movieInfo" style={{backgroundImage: `url(${background_path})`}}>
                <div id="infoBoxe">
                    <Poster {...movie} />
                    <div id="infos">
                        <h1>{movie.title}</h1>
                        <div>
                            <YearRating {...movie} />
                            <LengthGenres {...movie} />
                            <div id="synopsis">{movie.overview}</div>
                        </div>
                        <Tagline {...movie} />
                    </div>
                </div>
            </div>
        );
    }
    else
        return (<div style={{display: "none"}}>No infos</div>)
}