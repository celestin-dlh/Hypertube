import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Cast} from './cast';
import {InfoMovie} from './infoMovie';
import {RelatedMovies} from './relatedMovies';
import {Trailer} from './trailer';

/* Templates */
import Header from '../templates/Header';

/* Style */
import '../style/movieInfo.css';

function Movie() {

    let {id, lang} = useParams();
    const [movie, setMovie] =  useState({});

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_BACK + '/movies/infos/' + id + '/' + lang)
            .then((res) => {
                console.log("movie req => id : " + id + " lang : " + lang);
                setMovie(res.data);
            })
    }, [id, lang]);

    return (
        <div>
            <Header/>
            <InfoMovie {...movie}/>
            <Trailer video={movie.videos}/>
            <Cast cast={movie.credits}/>
            <RelatedMovies movies={movie.similar}/>
        </div>
    )
}

export default Movie;