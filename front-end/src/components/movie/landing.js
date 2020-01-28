import React,{ useState, useEffect } from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

/* Style */
import '../style/movieInfo.css';

/* Services */
import { getPopularMovies, getLastSeen } from '../services/requestManager';

function MovieCard(props) {
    return (
        <a id={props.id} className="movieLink" crossOrigin="anonnymous" href={process.env.REACT_APP_URL_FRONT + '/movie/' + props.id}>
            <div className="movieCard">
                <img className="moviePoster" width="250" src={props.image} alt="movie" />
                <p className="title">{props.title}</p>
                <p className="year">{props.year}</p>
                <span className="score">{props.score}</span>
            </div>
        </a>
    )
}

function MoviesList(props) {
    return (
        <div className="popular">
            {props.movies.map((movie) => {
                return (<MovieCard
                    key={movie.id}
                    id={movie.imdb_code}
                    title={movie.title}
                    image={movie.large_cover_image}
                    year={movie.year}
                    score={movie.rating} />)
            })}
        </div>
    )
}

function Landing() {
    const [loading, setLoading] = useState(1);
    const [movies, setMovies] = useState({});

    useEffect(() => {

        getLastSeen();
            getPopularMovies()
                .then((res) => {
                        setMovies(res.data.data.movies);
                        setLoading(0);
                    }
                );
        }, []);

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
                        <MoviesList movies={movies} />
                    </Col>
                </Row>
		    </Container>
        )
    }
}

export default Landing;