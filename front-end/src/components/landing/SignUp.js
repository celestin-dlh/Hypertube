import React, { useState } from 'react';
import { BrowserRouter as Link } from "react-router-dom";



/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/sign.css';

/* Form */
import SignUpForm from '../action/SignUpForm';

export default function SignUp() {

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">
		    	<h2>Hypertube Sign Up</h2>
				<Row className="justify-content-center">
					<Button
						variant="danger" type="submit" size="lg" block className="buttonForm"
					>
						Sign up with Google
					</Button>
				</Row>
				<Row className="justify-content-center">
					<Button
						variant="primary" type="submit" size="lg" block className="buttonForm"
					>
						Sign up with Facebook
					</Button>
				</Row>
				<h5 className="hr">or create account using email</h5>

		    	<SignUpForm />
		    	<br/>
		    	<p>Already have an account? <a href="/signin">Sign in</a></p>
		    	
		    </Col>
		  </Row>
		</Container>
	)

}			