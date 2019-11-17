import React,{ useState, useEffect } from 'react';
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
            <a href={process.env.REACT_APP_URL_FRONT + "/movie/" + props.imdb_id}>
                <img src={props.img} alt={props.title + " img"}/>
            </a>
        </div>
    )
}

function Genre() {

    let {genre, lang} = useParams();

    const [movies, setMovies] =  useState({});

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_BACK + '/movies/genre/' + genre + '/' + lang)
            .then((res) => {
                setMovies(res.data);
            })
    }, [genre, lang]);

    if (movies.results) {
        return (
            <Container fluid style={{padding: "0px"}}>
                <Header/>
                <div id="films">
                    {movies.results.map((movie) => {
                        return (<Movie title={movie.title} img={process.env.REACT_APP_BASE_URL + "/w185" + movie.poster_path}
                                       imdb_id={movie.id} key={movie.id}/>)
                    })}
                </div>
            </Container>
        );
    }
    else
        return (<div>Loading</div>)
}

export default Genre;