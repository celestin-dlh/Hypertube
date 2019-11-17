import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/* Bootstrap */
import Container from 'react-bootstrap/Container';
/* Templates */
import Header from '../templates/Header';
/* Style */
import '../style/movieInfo.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('La recherche a été soumise : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="searchSort">
                <label>
                    Research :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

function Movie(props) {
    return (
        <div className="movieSmall">
            <a href={process.env.REACT_APP_URL_FRONT + '/movie/' + props.imdb_id}>
                <img src={props.img} alt={props.title}/>
            </a>
        </div>
    )
}

function SearchMovies() {

    let {search, page, lang} = useParams();

    const [movies, setMovies] = useState({});

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_BACK + '/movies/search/' + search + '/' + lang + '/' + page)
            .then((res) => {
                setMovies(res.data);
            })
    }, [search, lang, page]);

    if (movies.results) {
        return (
            <Container fluid style={{padding: "0px"}}>
                <Header/>
                <SearchForm />
                <div id="films">
                    {movies.results.map((movie) => {
                        return (<Movie title={movie.title} img={process.env.REACT_APP_BASE_URL + "w185" + movie.poster_path}
                                       imdb_id={movie.id} key={movie.id}/>)
                    })}
                </div>
            </Container>
        );
    }
    else
        return (<div>Loading</div>)
}
export default SearchMovies;