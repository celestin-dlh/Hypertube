import React,{ Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Cast} from './cast';
import {InfoMovie} from './infoMovie';
import {RelatedMovies} from './relatedMovies';

/* Bootstrap */
import Container from 'react-bootstrap/Container';

/* Templates */
import Header from '../templates/Header';

/* Style */
import '../style/movieInfo.css';


function SearchMovies(props) {

    let {id} = useParams();

    const [movie, setMovie] =  useState({});

    useEffect(async () => {
        await axios.get('http://localhost:5000/movies/infos/' + id)
            .then((res) => {
                setMovie(res.data);
            })
    }, []);

    return (
        <Container fluid style={{padding: "0px"}}>
            <Header/>
            <InfoMovie movie={movie}/>
            <Cast id={id}/>
            <RelatedMovies id={id}/>
        </Container>
    )

}

export default SearchMovies;