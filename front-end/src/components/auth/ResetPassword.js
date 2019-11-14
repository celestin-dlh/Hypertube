import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/Auth.css';

function ResetPassword(props) {
    let { token } = useParams();
    const [inputs, setInputs] = useState({
        'password': '',
        'token': ''
    });

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputs({ ...inputs, [name]: value});
    }; 

    useEffect(() => {
        setInputs({ 'password': '' ,'token': token})
    }, [token]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        axios.post('http://localhost:5000/auth/resetpassword', inputs)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    };

	return (
		<Container>
		  <Row className="justify-content-center" style={{width: "100%"}}>
		    <Col xs="12" md="9" lg="6">
				<div className="login-container">
					<h1>Change <br/> Your Password</h1>
					<div className="login-form">
						<form onSubmit={handleSubmit}>
							<div className="input-form" style={{marginTop: "15px"}}>
								<label htmlFor="inp" className="inp">
									<input className="input" type="password" placeholder="&nbsp;" name="password" onChange={handleOnChange} value={inputs.password}/>
									<span className="label">New Password</span>
									<span className="border"></span>
								</label>  
							</div>
							<Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                Change Password
                            </Button> 
						</form>
					</div>
                    <div className="link">
                        <a href="/login"><p>Home</p></a>
                    </div>
				</div>
		    </Col>
		  </Row>
		</Container>
	)
}

export default ResetPassword;