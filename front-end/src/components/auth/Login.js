import React, { useState } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

/* Style */
import '../style/Login.css';
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
        console.log(inputs)
		axios.post('http://localhost:5000/auth/login', inputs)
			.then((res) =>
			{
				console.log(res)
				if (res.data.error === 'success') {
					console.log(res.data.accessToken)
					localStorage.setItem('token', res.data.accessToken)
					history.push('/profile');					
				}
				else
					console.log("BAD CREDENTIAL")

			})
			.catch((err) => 
				console.log(Object.values(err)))
	}

    return (
        <Container>
            <Row className="justify-content-center" style={{width: "100%"}}>
                <Col xs="12" md="9" lg="5">
                    <div className="login-container">
                        <h1>Login</h1>
                        <div className="login-form">
                            <form onSubmit={onSubmit}>
                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input type="text" placeholder="&nbsp;" name="username" onChange={handleOnChange} value={inputs.username}/>
                                        <span className="label">Username</span>
                                        <span className="border"></span>
                                    </label>  
                                </div>
                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input type="password" placeholder="&nbsp;" name="password" onChange={handleOnChange} value={inputs.password}/>
                                        <span className="label">Password</span>
                                        <span className="border"></span>
                                    </label>
                                </div>

                                <div className="link forgot"> 
                                    <a className="text-muted" href="/forgetpassword">Forgot password?</a>
                                </div>                          
                                <Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                    LOGIN
                                </Button>   
                            </form>
                        </div>
                        <div className="login-social">
                            <p className="text-muted">Sign In Using</p>
                            <a href="/42">
                                <div className="images"  style={{width: "50px", height: "50px", borderRadius: "1000px", backgroundColor: "black"}}>
                                    <img alt="login with 42" src="./images/42-icon.png" />
                                </div>
                            </a>
                            <a href="/google">
                                <div className="images"style={{width: "50px", height: "50px", borderRadius: "1000px", backgroundColor: "#DD4B39"}}>
                                    <img alt="login with google"  src="./images/google-icon.png" />
                                </div>
                            </a>
                        </div>
                        <div className="link">
                            <p className="text-muted">Or Sign In Here</p><a href="/signup">Sign up</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Login);