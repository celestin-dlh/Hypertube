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
            <a href={'http://localhost:3000/movie/' + props.imdb_id}><img src={props.img} alt={props.title + " img"}/></a>
        </div>
    )
}

function Deathday(props) {
    if (props.deathday !== null && props.deathday !== undefined) {
        return (
            <h4>Death : {props.deathday.substring(0, 4)}</h4>
        )
    }
    else {
        return (<span></span>)
    }
}

function InfoActor(props) {
    return (
        <div className="actorInfo">
            <img src={"http://image.tmdb.org/t/p/original" + props.img} alt="Actor img missing"></img>
            <div>
            <h2>{props.name}</h2>
                <h4>Birthday : {props.birthday}</h4>
                <Deathday deathday={props.deathday}/>
            <div>{props.bio}</div>
            </div>
        </div>
    )
}

function SearchActor() {

    let {actorId, lang} = useParams();

    const [movies, setMovies] = useState({});
    const [actor, setActor] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/movies/actor/' + actorId + '/' + lang)
            .then((res) => {
                setMovies(res.data.movie_credits.cast);
                setActor(res.data)
            })
    }, [actorId, lang]);

    if (movies[0]) {
        return (
            <Container fluid style={{padding: "0px"}}>
                <Header/>
                <InfoActor bio={actor.biography} img={actor.profile_path} name={actor.name} birthday={actor.birthday} deathday={actor.deathday}/>
                <div id="films">
                    {movies.map((movie) => {
                        return (<Movie title={movie.title} img={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
                                       imdb_id={movie.id} key={movie.id}/>)
                    })}
                </div>
            </Container>
        );
    }
    else
        return (<div style={{height: "100vh"}}></div>)
}

export default SearchActor;