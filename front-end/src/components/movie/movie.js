import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Cast} from './cast';
import {InfoMovie} from './infoMovie';
import {RelatedMovies} from './relatedMovies';
import {Trailer} from './trailer';

/* Bootstrap */
import Container from 'react-bootstrap/Container';

/* Templates */
import Header from '../templates/Header';

/* Style */
import '../style/movieInfo.css';


function Movie() {

    let {id, lang} = useParams();

    const [movie, setMovie] =  useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/movies/infos/' + id + '/' + lang)
            .then((res) => {
                setMovie(res.data);
            })
    }, [id, lang]);

    return (
        <Container fluid style={{padding: "0px"}}>
            <Header/>
            <InfoMovie movie={movie}/>
            <Trailer video={movie.videos}/>
            <Cast cast={movie.credits}/>
            <RelatedMovies movies={movie.similar}/>
        </Container>
    )

}

export default Movie;