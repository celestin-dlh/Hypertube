import React, { useState } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

/* Language */
import { login, username, password, forget, LoginUsing, RegisterHere, Register } from '../services/textLang';

/* Style */
import '../style/Auth.css';
import '../style/Input.css';
import { Button, Container, Col, Row } from 'react-bootstrap';


function Login({ history }) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

    const [inputs, setInputs] = useState({
        'username': '',
        'password': '',
    });

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputs({ ...inputs, [name]: value});
    };

    const onSubmit = (event) => {
        event.preventDefault();
        axios.post(  process.env.REACT_APP_URL_BACK+ '/auth/login', inputs)
            .then((res) =>
            {
                localStorage.setItem('lang', res.data.lang);
                history.push('/jwt/' + res.data.accessToken);
            })
            .catch(() => alert('Bad Credentials'))
    };

    function inputFocus(event) {
        const input = document.getElementById(event.target.id);
        input.focus();
        input.select();
    }

    return (
        <Container>
            <Row className="justify-content-center" style={{width: "100%"}}>
                <Col xs="12" md="9" lg="5">
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <button style={{backgroundColor: "rgba(0,0,0,0)", border: "0px"}} onClick={() => { localStorage.setItem('lang', 'fr'); window.location.reload() }}>
                            <img style={{width: "100px", height: "78px"}} src={"/images/french-flag.png"} alt="Fr"/>
                        </button>
                        <button style={{backgroundColor: "rgba(0,0,0,0)", border: "0px"}} onClick={() => { localStorage.setItem('lang', 'en'); window.location.reload() }}>
                            <img style={{width: "100px"}} src={"/images/english-flag.png"} alt="En"/>
                        </button>
                        <button style={{backgroundColor: "rgba(0,0,0,0)", border: "0px"}} onClick={() => { localStorage.setItem('lang', 'es'); window.location.reload() }}>
                            <img style={{width: "100px"}} src={"/images/spain-flag.png"} alt="Es"/>
                        </button>
                    </div>
                    <div className="auth-container">
                        <h1>{login[lang]}</h1>
                        <div className="login-form">
                            <form onSubmit={onSubmit}>
                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input className="input"
                                               type="text"
                                               placeholder="&nbsp;"
                                               name="username"
                                               id="username"
                                               onChange={handleOnChange} value={inputs.username}/>
                                        <span className="label" id="username" onClick={inputFocus}>{username[lang]}</span>
                                        <span className="border"></span>
                                    </label>
                                </div>
                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input className="input"
                                               type="password"
                                               placeholder="&nbsp;"
                                               name="password"
                                               id="password"
                                               onChange={handleOnChange}
                                               value={inputs.password}
                                               autoComplete="password"/>
                                        <span className="label" id="password" onClick={inputFocus}>{password[lang]}</span>
                                        <span className="border"></span>
                                    </label>
                                </div>

                                <div className="link forgot">
                                    <a className="text-muted" href="/forgetpassword">{forget[lang]}?</a>
                                </div>
                                <Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                    {login[lang]}
                                </Button>
                            </form>
                        </div>
                        <div className="login-social">
                            <p className="text-muted">{LoginUsing[lang]}</p>
                            <a href={process.env.REACT_APP_URL_BACK + "/auth/42"} >
                                <div className="images"
                                     style={{width: "50px", height: "50px", borderRadius: "1000px", backgroundColor: "black"}}>
                                    <img alt="login with 42" src="./images/42-icon.png" />
                                </div>
                            </a>
                            <a href={process.env.REACT_APP_URL_BACK + "/auth/google"}>
                                <div className="images"
                                     style={{width: "50px", height: "50px", borderRadius: "1000px", backgroundColor: "#DD4B39"}}>
                                    <img alt="login with google"  src="./images/google-icon.png" />
                                </div>
                            </a>
                            <a href={process.env.REACT_APP_URL_BACK + "/auth/github"}>
                                <div className="images"
                                     style={{width: "50px",
                                         height: "50px",
                                         borderRadius: "1000px",
                                         backgroundColor: "black"}}>
                                    <img alt="login with github"  src="./images/github-icon.png" style={{backgroundColor: "white"}}/>
                                </div>
                            </a>
                        </div>
                        <div className="link">
                            <p className="text-muted">{RegisterHere[lang]}</p><a href="/register">{Register[lang]}</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Login);