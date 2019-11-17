import React from 'react';

function Poster(movie) {
    return (
        <div id="poster">
            <img src={process.env.REACT_APP_BASE_URL + "/original" + movie.poster_path} alt="movie poster"/>
        </div>
    )
}

function Title(movie) {
        if (movie.title === "") {
            return (
                <div>
                    <h1>{movie.original_title}</h1>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>{movie.title}</h1>
                </div>
            )
        }
}

function Genres(movie) {
    return(<div id="genres">
        {movie.genres.map((genre) => {
                return (
                    <a href={process.env.REACT_APP_URL_FRONT + "/genre/" + genre.id } key={genre.id}>
                        <div key={genre.id} className={'genre'}>{genre.name}</div>
                    </a>
                )})
        }
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
    if (movie.id) {
        let background_path = process.env.REACT_APP_BASE_URL + "/original" + movie.backdrop_path;
        return (
            <div id="movieInfo" style={{backgroundImage: `url(${background_path})`}}>
                <div id="infoBoxe">
                    <Poster {...movie} />
                    <div id="infos">
                        <Title {...movie} />
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