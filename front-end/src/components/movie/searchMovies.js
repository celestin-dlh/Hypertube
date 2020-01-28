import React,{ useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from "react-bootstrap/Button";

/* Style */
import '../style/MovieList.css';

/* Services */
import { searchMoviesService, getLastSeen } from '../services/requestManager';


function MovieCard(props) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

    if (props.number < 25){
        return (
            <a id={props.number} className="movieLink" href={process.env.REACT_APP_URL_FRONT + '/movie/' + props.id + '/' + lang} style={{display: "block"}}>
                <div className="movieCard" id={props.id}>
                    <img className="moviePoster" width="250" src={props.image} alt="movie" />
                    {props.movieSeen.includes(props.id) ? <div className="movieSeen"></div> : null}
                    <p className="title">{props.title}</p>
                    <p className="year">{props.year}</p>
                    <p className="score">{props.score}</p>
                </div>
            </a>
        )
    }
    else {
        return (
            <a id={props.number} className="movieLink nextPage" href={process.env.REACT_APP_URL_FRONT + '/movie/' + props.id + '/' + lang} style={{display: "none"}}>
                <div className="movieCard" id={props.id}>
                    <img className="moviePoster" width="250" src={props.image} alt="movie" />
                    <p className="title">{props.title}</p>
                    <p className="year">{props.year}</p>
                    <p className="score">{props.score}</p>
                </div>
            </a>
        )
    }
}

function MoviesList(props) {
    let total = props.movies.length;
    let i = 0;
    let page = 0;

    const loadMoreMovies = (e) => {
        e.preventDefault();
        ++page;
        for (let j= page * 25; j < (page * 25 + 25) && j < i ; j++) {
            if (j+1 === i) {
                document.getElementById("more").style.display="none";
            }
            document.getElementById(String(j)).style.display="block";
            document.getElementById(String(page+25)).style.display="block";
        }
    };

    return (
        <>
            <div className="moviesList" id="moviesList">
                {
                    props.movies.map((moviePage) => {
                        return (
                            <div key={i} className="page">
                                {moviePage.map((movie) => {
                                    return (<MovieCard
                                        movieSeen={props.movieSeen}
                                        number={i++}
                                        total={total}
                                        key={i}
                                        id={movie.imdb_code}
                                        title={movie.title}
                                        image={movie.medium_cover_image}
                                        year={movie.year}
                                        score={movie.rating} />)
                                })}
                            </div>
                        )
                    })
                }
            </div>
            {i >= 25 ? <Button variant="primary" size="lg" block type="submit" className="submit-button" onClick={(e) => {loadMoreMovies(e)}} id="more">Load more </Button> : null}
        </>
    )
}

function SearchMovies() {
    let {search, lang, sortBy} = useParams();
    let total_Movies = useRef();

    const [movies, setMovies] = useState([]);
    const [movieSeen, setMovieSeen] = useState([]);
    const [loading, setLoading] = useState(1);
    const [minrate, setMinrate] = useState(0);

    const minRating = (event) => {
        setMinrate(event.target.value);
        let maxRating = document.getElementById('maxRating').value;
        for (let i = 0; i < movies.length; i++) {
            for (let j=0; j < movies[i].length; j++) {
                if (movies[i][j].rating > event.target.value && movies[i][j].rating < maxRating)
                    document.getElementById(movies[i][j]['imdb_code']).style.display = "block";
                else
                    document.getElementById(movies[i][j]['imdb_code']).style.display = "none";
            }
        }
    };

    const maxRating = (event) => {
        let minRating = document.getElementById('minRating').value;
        for (let i = 0; i < movies.length; i++) {
            for (let j=0; j < movies[i].length; j++) {
                if (movies[i][j].rating < event.target.value && movies[i][j].rating > minRating)
                    document.getElementById(movies[i][j]['imdb_code']).style.display="block";
                else
                    document.getElementById(movies[i][j]['imdb_code']).style.display="none";
            }
        }
    };

    const sortBySelect = () => {
        let e = document.getElementById("orderSelect");
        let sortBy = e.options[e.selectedIndex].value;
        window.open (process.env.REACT_APP_URL_FRONT + '/search/' + search + '/' + lang + '/' + sortBy,'_self',false)
    };

    const revSort = (event) => {
        let page = document.getElementsByClassName("page");
        if (event.target.checked === true) {
            document.getElementById("moviesList").style.flexDirection="row-reverse";
            document.getElementById("moviesList").style.flexWrap="wrap-reverse";
            document.getElementById("moviesList").style.justifyContent="flex-end";
            for (let i =0; i < page.length; i++) {
                page[i].style.flexDirection="row-reverse";
                page[i].style.flexWrap="wrap-reverse";
                page[i].style.justifyContent="flex-end";
            }
        }
        else {
            document.getElementById("moviesList").style.flexDirection="row";
            document.getElementById("moviesList").style.flexWrap="wrap";
            document.getElementById("moviesList").style.justifyContent="flex-start";
            for (let i =0; i < page.length; i++) {
                page[i].style.flexDirection="row";
                page[i].style.flexWrap="wrap";
                page[i].style.justifyContent="flex-start";
            }
        }
    };

    const handleChange = async (selectedOption) => {
        let e = document.getElementById("genderSelect");
        let value = e.options[e.selectedIndex].value;

        let display = false;
        for (let k = 0; k < movies.length; k++) {
            for (let i = 0; i < movies[k].length; i++) {
                if (value !== '') {
                    for (let j = 0; j < movies[k][i].genres.length; j++) {
                        if (movies[k][i].genres[j] === value) {
                            display = true;
                        }
                    }
                    if (display) {
                        document.getElementById(movies[k][i]['imdb_code']).style.display = "block";
                    } else {
                        document.getElementById(movies[k][i]['imdb_code']).style.display = "none";
                    }
                } else {
                    document.getElementById(movies[k][i]['imdb_code']).style.display = "block";
                }
            }
        }
    };

    useEffect(() => {
        searchMoviesService(search, lang, sortBy, 1)
            .then((res) => {
                total_Movies.current = res.data.data.movie_count;
                setMovies(movies => [...movies, res.data.data.movies]);
            })
            .then(async () => {
                setLoading(0);
                for (let i = 2; i <= Math.ceil(total_Movies.current / 25) && i <= 10; i++) {
                    await searchMoviesService(search, lang, sortBy, i)
                        .then((res) => {
                            setMovies(movies => [...movies, res.data.data.movies]);
                        })
                }
            });

        getLastSeen()
            .then((res) => {
                setMovieSeen(res.data)
            })
        }, [lang, search, sortBy]
    );

    if (loading) {
        return (
            <div style={{height: "100vh"}}>
                <Spinner style={{display: "block", margin: "auto"}} animation="border" variant="light" />
            </div>
        )
    } else {
        if (movies[0]) {
            return (
                <Container fluid className="settings" >
                    <div id="sortBar">
                        <div id="order">
                            <select id="orderSelect" className="orderSelect" onChange={sortBySelect}>
                                <option value="">Order By : </option>
                                <option value="title">Title</option>
                                <option value="year">Year</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                        <div id="gender">
                            <select id="genderSelect" className="genderSelect" onChange={handleChange}>
                                <option value="">All</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Family">Family</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="History">History</option>
                                <option value="Horror">Horror</option>
                                <option value="Music">Music</option>
                                <option value="Musical">Musical</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Sport">Sport</option>
                                <option value="Superhero">Superhero</option>
                                <option value="Thriller">Thriller</option>
                                <option value="War">War</option>
                                <option value="Western">Western</option>
                            </select>
                        </div>
                        <div id="rating">
                            <p>Min rating :
                                <input type="range" id="minRating" name="minRating" min="0" max="10" value={minrate} onChange={minRating}/>
                            </p>
                            <p>Max Rating :
                                <input type="range" id="maxRating" name="maxRating" min="0" max="10" onChange={maxRating}/>
                            </p>
                        </div>
                        <div id="reverse">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitches" onChange={revSort}/>
                                <label className="custom-control-label" htmlFor="customSwitches">Reverse sort</label>
                            </div>
                        </div>
                    </div>
                    <Row className="justify-content-center" style={{minHeight: "100vh"}}>
                        <Col md="11">
                            <MoviesList movies={movies} movieSeen={movieSeen}/>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container fluid className="settings" >
                    <Row className="justify-content-center" style={{minHeight: "100vh"}}>
                        <Col md="11">
                            <h3>No movies found, do your research again please..</h3>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
export default SearchMovies;