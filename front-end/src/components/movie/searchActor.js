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
function SearchActor() {

    let {actorId} = useParams();

    const [movies, setMovies] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/movies/actor/' + actorId)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.cast);
            })
    }, []);

    if (movies[0]) {
        console.log(movies);
        return (
            <Container fluid style={{padding: "0px"}}>
                <Header/>
                <div id="films">
                    {movies.map((movie) => {
                        return (<Movie title={movie.title} img={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
                                       imdb_id={movie.id}/>)
                    })}
                </div>
            </Container>
        );
    }
    else
        return (<div>Loading</div>)
}
export default SearchActor;