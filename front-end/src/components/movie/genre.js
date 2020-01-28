import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

/* Style */
import '../style/movieInfo.css';

/* Services */

import { getMoviesGenre } from '../services/requestManager';

function Movie(props) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')

    return (
        <div className="movieSmall">
            <a href={process.env.REACT_APP_URL_FRONT + "/movie/" + props.imdb_id + '/' + lang}>
                <img src={props.img} alt={props.title + " img"}/>
            </a>
        </div>
    )
}

function Genre() {
    let {genreId, lang} = useParams();

    const [loading, setLoading] = useState(1);
    const [movies, setMovies] =  useState({});

    useEffect(() => {
        getMoviesGenre(genreId, lang)
            .then((res) => {
                setMovies(res.data);
                setLoading(0);
            })
    }, [genreId, lang]);

        if (loading) {
            return (
                <div>
                    <div style={{height: "100vh"}}>
                        <Spinner style={{display: "block", margin: "auto"}} animation="border" variant="light" />
                    </div>
                </div>
            )
        }
        else {
            return (
                <Container fluid className="settings" >
                    <Row className="justify-content-center" style={{minHeight: "100vh"}}>
                        <Col md="11">
                            <div id="films">
                                {movies.results.map((movie) => {
                                    return (<Movie title={movie.title} img={process.env.REACT_APP_BASE_URL + "/w185" + movie.poster_path}
                                                imdb_id={movie.id} key={movie.id}/>)
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
}

export default Genre;