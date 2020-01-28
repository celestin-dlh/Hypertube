import React from 'react';

function Movie(props) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')

    return (
        <div className="movieSmall">
            <a href={ process.env.REACT_APP_URL_FRONT + '/movie/' + props.id + '/' + lang}>
                <img src={props.img} alt={props.title + " img"}/>
            </a>
        </div>
    )
}

const RelatedMovies = (props) => {

    let movies = props.movies;

    if (movies) {
        return (
            <div id="films">
                {movies.results.map((movie) => {
                    if (movie.poster_path){
                    return (
                        <Movie
                            title={movie.title}
                            img={process.env.REACT_APP_BASE_URL + "/w185" + movie.poster_path}
                            id={movie.id} overview={movie.overview}
                            key={movie.id}
                        />
                    )}
                else {
                    return(null)
                    }}
                )}
            </div>
        );
    }
    else {
        return (<div>Loading</div>)
    }
}

export default RelatedMovies;