import React,{ useState, useEffect } from 'react';
import axios from "axios";

function Movie(props) {

    return (
        <div className="movieSmall">
            <img src={props.img} alt={props.title + " img"}/>
        </div>
    )
}

export function RelatedMovies(props) {

    const [movies, setMovies] = useState({});

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/' + props.id + '/similar?api_key=63f77bcd4f045f354e004ec092d0bbdc')
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results);
            })}, []);

    if (movies[0]) {
        return (
            <div id="films">
                {movies.map((movie) => {
                    return (<Movie title={movie.title} img={"http://image.tmdb.org/t/p/w185" + movie.poster_path} />)
                })}
            </div>
        );
    }
    else {
        return (
            <div>No Actors in this movie ????</div>
        );
    }
}