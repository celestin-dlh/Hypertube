import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

/* Style */
import '../style/Search.css';

import { searchmovies } from '../services/requestManager';

/* Templates */ 
import Header from '../templates/Header';
 

function MovieCard(props) {
    let size = 60 * props.size;

    return (
        <div style={{maxWidth: size, margin: "10px"}}>
            <img width={size} src={props.image} alt="movie" style={{marginBottom: "5px"}}/>
            <div className="triangle-seen"></div>
            <p className="title">{props.title}</p>
            <p className="year">{props.year}</p>
            <span className="score"><img width="35" src="/images/imdb.png"/> {props.score}</span>
        </div>
    )
}


let title;

function Search() {
    let { research } = useParams();

    const [size, setSize] = useState('5');

    const handleSize = (event) => {
        setSize(event.target.value)
    }

    const [movies, setMovies] = useState({
        page: 0,
        results: []
    });
    useEffect(() => {
        document.title = `${research} - Hypertube`
        searchmovies(research)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);

            })
    }, [research]);

        return (
            <Container fluid style={{padding: "0px"}} className="settings" >
                <Header/>
                <Row className="justify-content-center dark-row">
                    <Col md="11">
                        <input type="range" id="size" name="size" min="2" max="5" step="0.20" onChange={handleSize} />
                        <div id="movies-list" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                            {movies.results.map((movie) => {
                                return (<MovieCard key={movie.id} size={size} title={movie.original_title} image={"http://image.tmdb.org/t/p/w185/" + movie.poster_path} year={movie.release_date.substring(0, 4)} score={movie.popularity} />)
                            })}
                        </div>


                    </Col>
                </Row>
            </Container>
        ) 
      

}			

export default Search;