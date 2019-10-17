import React, { useState } from 'react';
import axios from 'axios';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/Login.css';

function ForgetPassword() {

	const [inputs, setEmail] = useState({
		'email': ''
	});

	const handleOnChange = (event) => {
		setEmail({[event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:5000/auth/forgetpassword', inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col xs="12" md="9" lg="6">
				<div className="login-container">
					<h1>Reset <br/> Your Password</h1>
					<div className="login-form">
						<form onSubmit={handleSubmit}>
							<div className="input-form" style={{marginTop: "15px"}}>
								<label htmlFor="inp" className="inp">
									<input type="email" placeholder="&nbsp;" name="email" onChange={handleOnChange} value={inputs.email}/>
									<span className="label">Email</span>
									<span className="border"></span>
								</label>  
							</div>
							<Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                Send email
                            </Button> 
						</form>
					</div>
					<div>
						<a href="/login"><p>Back to login page</p></a>
					</div>
				</div>
		    </Col>
		  </Row>
		</Container>
	)
}

export default ForgetPassword;