import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Style */
import '../style/Search.css';

import { searchmovies } from '../services/requestManager';
import { filterByYear } from '../services/Array';

/* Templates */ 
import Header from '../templates/Header';
 

function MovieCard(props) {
    // let size = 60 * props.size;
    let size = 250;
    return (
        <div className="movieCard" style={{maxWidth: size}}>
            <img width={size} src={props.image} alt="movie" />
            <div className="triangle-seen"></div>
            <p className="title">{props.title}</p>
            <p className="year">{props.year}</p>
            <span className="score"><img width="35" src="/images/imdb.png" alt="movie-poster"/> {props.score}</span>
        </div>
    )
}

function ParametersBar(props) {

    return (
        <div id="barSort" style={{height: "50px", width: "100%", backgroundColor: "orange"}}>

        </div>
    )
}


function MoviesList(props) {


    return (
        <div className="moviesList">

                {/* {props.moviesList.map((movie) => {
                    return (<MovieCard key={movie.id} title={movie.original_title} image={"http://image.tmdb.org/t/p/w185/" + movie.poster_path} year={movie.release_date.substring(0, 4)} score={movie.popularity} />)
                })} */}
        </div>
    )   
}

let array = []; 

function Search() {
    let { research } = useParams();

    const [size, setSize] = useState('5');

    const handleSize = (event) => {
        setSize(event.target.value)
    }

    const [movies, setMovies] = useState([]);

    const handleClick = () => {
        let test;
        test = filterByYear(movies, 1999, 2013)
        setMovies(test)
        console.log(test)
    }


    useEffect(() => {
        document.title = `${research} - Hypertube`
        searchmovies(research)
            .then((res) => {
                setMovies(res.data.results)
                console.log(res.data.results)
            })
    }, [research]);

    return (
        <Container fluid style={{padding: "0px"}} className="settings" >
            <Header/>
            <ParametersBar />

            <button onClick={handleClick}>Sort by name</button>

            <Row className="justify-content-center dark-row">
                <Col md="11">
                    {/* <input type="range" id="size" name="size" min="2" max="5" step="0.20" onChange={handleSize} /> */}
                    <MoviesList movies={movies} size={size} />
                </Col>
            </Row>
        </Container>
    ) 
      

}			

export default Search;