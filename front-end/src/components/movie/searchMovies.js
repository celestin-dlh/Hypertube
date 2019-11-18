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
        <div className="movieSmall" id={props.imdb_id}>
            <a href={process.env.REACT_APP_URL_FRONT + '/movie/' + props.imdb_id}>
                <img src={props.img} alt={props.title}/>
            </a>
        </div>
    )
}

function SelectGenre(movies) {
    function sortGenres(event) {
        if (movies.results) {
            for (var i = 0; i < movies.results.length; i++) {
                let display = false;
                if (event.target.value !== '') {

                    for (let j = 0; j < movies.results[i].genre_ids.length; j++) {
                        if (Number(movies.results[i].genre_ids[j]) === Number(event.target.value)) {
                            console.log("display");
                            display = true;
                        }
                        console.log(movies.results[i].genre_ids[j] + ' ' + event.target.value);
                    }
                    if (display) {
                        console.log("display flex");
                        document.getElementById(movies.results[i].id).style.display="flex";
                    }
                    else {
                        console.log("display none");
                        document.getElementById(movies.results[i].id).style.display="none";
                    }
                }
                else {
                    console.log("all");
                    document.getElementById(movies.results[i].id).style.display="flex";
                }
            }
        }
    }
    return (
        <div>
        <select style={{marginLeft: "75px"}} id="genreSort" onChange={sortGenres} >
            <option value="">All</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
        </select>

        </div>
    )
}

function hideMovie(movieId) {
    console.log(movieId);
    document.getElementById(movieId).style.display="none";
}


function SearchMovies() {

    let {search, page, lang} = useParams();

    const [movies, setMovies] = useState({});


    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_BACK + '/movies/search/' + search + '/' + lang + '/' + page)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);
            })
    }, [search, lang, page]);


    if (movies.results) {
        return (
            <Container fluid style={{padding: "0px"}}>
                <Header/>
                <SelectGenre {...movies}/>
                <div id="films">
                    {movies.results.map((movie) => {
                        return (<Movie title={movie.title} img={process.env.REACT_APP_BASE_URL + "w185" + movie.poster_path}
                                       imdb_id={movie.id} key={movie.id} />)
                    })}
                </div>
            </Container>
        );
    }
    else
        return (<div>Loading</div>)
}
export default SearchMovies;