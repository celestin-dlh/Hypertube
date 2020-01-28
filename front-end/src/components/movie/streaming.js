import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import CommentForm from './movieInfo/commentForm';
import { logout } from '../services/requestManager';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Services */
import { setMovieSeen } from '../services/requestManager';

function Streaming({ history }) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')
    let { imdb_id, quality } = useParams(); 

    useEffect(() => {
        setMovieSeen(imdb_id)
            .catch(() => {
                logout()
                history.push('/logout')
            })
    })

    return (
        <Container fluid className="settings" >
            <Row className="justify-content-center">
                <Col md="11" style={{minHeight: "95vh"}}>
                    <section>
                        <video id="videoPlayer" crossOrigin="anonymous" controls style={{display: "block", width: "80%", margin: "auto", marginTop: "20px"}}>
                            <source src={`http://localhost:5000/movies/stream/${imdb_id}/${quality}`} type="video/mp4"/>

                            {lang === "en" 
                            ? <track type="text/vtt"label="English" kind="subtitles" srcLang="en" src={`http://localhost:5000/movies/getsubtitles/${imdb_id}/eng`} default></track> 
                            : <track type="text/vtt" label="English" kind="subtitles" srcLang="en" src={`http://localhost:5000/movies/getsubtitles/${imdb_id}/eng`}></track>
                            }
                            
                            {lang === "es" 
                            ? <track type="text/vtt" label="Espagnol" kind="subtitles" srcLang="es" src={`http://localhost:5000/movies/getsubtitles/${imdb_id}/spa`} default></track>
                            : <track type="text/vtt" label="Espagnol" kind="subtitles" srcLang="es" src={`http://localhost:5000/movies/getsubtitles/${imdb_id}/spa`} ></track>
                            }
                            
                            {lang === "fr" 
                            ? <track type="text/vtt" label="Francais" kind="subtitles" srcLang="fr" src={`http://localhost:5000/movies/getsubtitles/${imdb_id}/fre`} default></track>
                            : <track type="text/vtt" label="Francais" kind="subtitles" srcLang="fr" src={`http://localhost:5000/movies/getsubtitles/${imdb_id}/fre`} ></track>
                            }

                        </video>
                    </section>
                    <section id="comment">
                        <CommentForm imdb_id={imdb_id}/>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}   

export default withRouter(Streaming);