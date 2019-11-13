import React,{ Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/* Bootstrap */
import Container from 'react-bootstrap/Container';
/* Templates */
import Header from '../templates/Header';
/* Style */
import '../style/movieInfo.css';


function Movie(props) {
    return (
        <div className="movieSmall">
            <a href={'http://localhost:3000/movie/' + props.imdb_id}><img src={props.img} alt={props.title + " img"}/></a>
        </div>
    )
}
function SearchMovies() {
    let {search} = useParams();
    const [movies, setMovies] = useState({});
    useEffect(async () => {
        await axios.get('http://localhost:5000/movies/search/' + search)
            .then((res) => {
                setMovies(res.data);
            })
    }, []);
    if (movies.total_results > 0) {
        console.log(movies);
        return (
            <Container fluid style={{padding: "0px"}}>
                <Header/>
                <div id="films">
                    {movies.results.map((movie) => {
                        return (<Movie title={movie.title} img={"http://image.tmdb.org/t/p/w185" + movie.poster_path} imdb_id={movie.imdb_id}/>)
                    })}
                </div>
            </Container>
        );
    }
    else {
        return (
            <div>No Actors in this movie ????</div>
        );
    }
}
export default SearchMovies;