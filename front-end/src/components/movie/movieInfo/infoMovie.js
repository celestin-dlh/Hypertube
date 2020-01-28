import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const infoMovie = (props) => {
    let background_path = props.movie.backdrop_path === null ? null : process.env.REACT_APP_BASE_URL + "/original" + props.movie.backdrop_path;
    let i = 0;
    return (
        <section style={{height: "70vh"}}>
            <Row>
                <Col sm="12" lg="4">
                    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h1 style={{color: "white"}}>{props.movie.title === "" ? props.movie.original_title : props.movie.title}</h1>
                        <img crossOrigin="anonymous" style={{maxWidth: "50%"}} src={process.env.REACT_APP_BASE_URL + "/original" + props.movie.poster_path} alt="poster Movie" />
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flexStart"}}>
                            <h3>{Math.trunc(props.movie.runtime / 60)} h {props.movie.runtime % 60} min</h3>
                            <h3>{props.movie.vote_average}</h3>
                            {props.movie.genres.map((genre) => {
                                return (
                                    <a className="genres" href={process.env.REACT_APP_URL_FRONT + "/genre/" + genre.id } key={i++}>
                                        <p>{genre.name}</p>
                                    </a>
                                )})
                            }
                        </div>
                    </div>
                </Col>
                
                <Col sm="12" lg="8">
                    <div className="posterSide">
                        <img crossOrigin="anonymous" style={{maxWidth: "100%", opacity: "0.6"}} src={background_path} alt="poster Movie" />
                        <div className="overview">
                            <p>{props.movie.overview}</p>
                        </div>
                        <div className="tagline">
                            <h3>{props.movie.tagline}</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
};

export default infoMovie;