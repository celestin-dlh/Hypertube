import React from 'react';

function Movie(props) {

    return (
        <div className="movieSmall">
            <a href={ process.env.REACT_APP_URL_FRONT + '/movie/' + props.id}>
                <img src={props.img} alt={props.title + " img"}/>
            </a>
        </div>
    )
}

export function RelatedMovies(props) {

    let movies = props.movies;

    if (movies) {
        return (
            <div id="films">
                {movies.results.map((movie) => {
                    return (
                        <Movie
                            title={movie.title}
                            img={process.env.REACT_APP_BASE_URL + "/w185" + movie.poster_path}
                            id={movie.id} overview={movie.overview}
                            key={movie.id}
                        />
                    )}
                )}
            </div>
        );
    }
    else {
        return (<div>Loading</div>)
    }
}