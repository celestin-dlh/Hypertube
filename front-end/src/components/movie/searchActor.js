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
import { getActors } from '../services/requestManager';
import { Birthday, Deathday } from '../services/textLang';

function Movie(props) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')
    if (props.poster) {
        return (
            <div className="movieSmall">
                <a href={process.env.REACT_APP_URL_FRONT + '/movie/' + props.imdb_id + '/' + lang}>
                    <img crossOrigin="anonymous" src={props.img} alt={props.title + " img"}/>
                </a>
            </div>
        )       
    }
    else {
        return (null)   
    }
}

function InfoActor(props) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');
    let imgUrl = null;
    props.img === null ? imgUrl = null : imgUrl = process.env.REACT_APP_BASE_URL + "/w185" + props.img;
    return (
        <div className="actorInfo">
            <img crossOrigin="anonymous" src={imgUrl} alt="Actor img missing" />
            <div>
                <h2>{props.name}</h2>
                <h4>{Birthday[lang]} : {props.birthday}</h4>
                {(props.deathday !== null && props.deathday !== undefined) ? <h4>{Deathday[lang]} : {props.deathday.substring(0, 4)}</h4> : null}
                <div>{props.bio}</div>
            </div>
        </div>
    )
}

function SearchActor() {
    let {actorId, lang} = useParams();

    const [loading, setLoading] = useState(1);
    const [movies, setMovies] = useState({});
    const [actor, setActor] = useState({});

    useEffect(() => {
        getActors(actorId, lang)
            .then((res) => {
                    setMovies(res.data.movie_credits.cast);
                    setActor(res.data)
                    setLoading(0)
                }
            )
    }, [actorId, lang]);

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
            <Container fluid >
                <Row className="justify-content-center" style={{minHeight: "100vh"}}>
                    <Col md="11" style={{margin: "auto"}}>
                        <InfoActor
                            bio={actor.biography}
                            img={actor.profile_path}
                            name={actor.name} birthday={actor.birthday}
                            deathday={actor.deathday}
                        />
                        <div id="films">
                            {movies.map((movie) => {
                                return (
                                    <Movie title={movie.title}
                                        poster={movie.poster_path}
                                        img={process.env.REACT_APP_BASE_URL + "/w185" + movie.poster_path}
                                        imdb_id={movie.id}
                                        key={movie.credit_id}
                                    />
                                )}
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchActor;