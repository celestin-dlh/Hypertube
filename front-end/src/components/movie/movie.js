import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import InfoMovie from './movieInfo/infoMovie';
import Cast from './movieInfo/cast';
import Crew from './movieInfo/crew';
import RelatedMovies from './movieInfo/relatedMovies';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

/* Style */
import '../style/movieInfo.css';
import Torrents from "./movieInfo/torrents";

/* Services */
import { getMoviesInfos } from '../services/requestManager';

function Movie() {

    let {id, lang} = useParams();
    const [movie, setMovie] =  useState({});
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        getMoviesInfos(id, lang)
            .then((res) => {
                setMovie(res.data);
                setLoading(0);
            })
    }, [id, lang]);

    
    if (loading) {
        return (
            <div>
                <div style={{height: "100vh"}}>
                    <Spinner style={{display: "block", margin: "auto"}} animation="border" variant="light" />
                </div>
            </div>
        )
    } else {
        return (
            <Container fluid style={{padding: "0px"}}>
                <Row className="justify-content-center" style={{width: "100%"}}>
                    <Col md="11" style={{margin: "auto", marginTop: "20px"}}>
                        <InfoMovie movie={movie} />
                        <section style={{height: "50vh", color: "white"}}>
                            <Torrents imdb_id={movie.imdb_id} mvdb_id={movie.id}/>
                        </section>
                        <Cast cast={movie.credits}/>
                        <Crew cast={movie.credits}/>
                        <RelatedMovies movies={movie.similar}/>
                    </Col>
                </Row>
            </Container>
        )        
    }
}

export default Movie;