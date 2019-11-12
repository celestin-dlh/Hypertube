import React, { useState } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

/* Style */
import '../style/Auth.css';
import '../style/Input.css';
import { Button, Container, Col, Row } from 'react-bootstrap';


function Login({ history }) {
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
        axios.post('http://localhost:5000/auth/login', inputs)
            .then((res) =>
            {
                console.log(res.data.accessToken);
                localStorage.setItem('token', res.data.accessToken);
                history.push('/profile');
            })
            .catch(() => console.log('BAD CREDENTIALS'))
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
                    <div className="auth-container">
                        <h1>Login</h1>
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
                                        <span className="label" id="username" onClick={inputFocus}>Username</span>
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
                                               value={inputs.password}/>
                                        <span className="label" id="password" onClick={inputFocus}>Password</span>
                                        <span className="border"></span>
                                    </label>
                                </div>

                                <div className="link forgot">
                                    <a className="text-muted" href="/forgetpassword">Forgot password ?</a>
                                </div>
                                <Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                    LOGIN
                                </Button>
                            </form>
                        </div>
                        <div className="login-social">
                            <p className="text-muted">Login in using</p>
                            <a href="http://localhost:5000/auth/42">
                                <div className="images"
                                     style={{width: "50px", height: "50px", borderRadius: "1000px", backgroundColor: "black"}}>
                                    <img alt="login with 42" src="./images/42-icon.png" />
                                </div>
                            </a>
                            <a href="http://localhost:5000/auth/google">
                                <div className="images"
                                     style={{width: "50px", height: "50px", borderRadius: "1000px", backgroundColor: "#DD4B39"}}>
                                    <img alt="login with google"  src="./images/google-icon.png" />
                                </div>
                            </a>
                        </div>
                        <div className="link">
                            <p className="text-muted">Or Sign In Here</p><a href="/signup">Register</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Login);