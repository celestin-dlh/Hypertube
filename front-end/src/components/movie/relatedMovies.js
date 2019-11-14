import React from 'react';

function Movie(props) {

    return (
        <div className="movieSmall">
            <a href={'http://localhost:3000/movie/' + props.id}><img src={props.img} alt={props.title + " img"}/></a>
        </div>
    )
}

export function RelatedMovies(props) {

    let movies = props.movies;

    if (movies) {
        return (
            <div id="films">
                {movies.results.map((movie) => {
                    return (<Movie title={movie.title} img={"http://image.tmdb.org/t/p/w185" + movie.poster_path} id={movie.id} overview={movie.overview} key={movie.id}/>)
                })}
            </div>
        );
    }
    else {
        return (<div>Loading</div>)
    }
}