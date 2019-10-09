import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
	
/* Style */
import '../style/sign.css';

/* Form */
import ForgetPasswordForm from './ForgetPasswordForm';

export default function ForgetPassword() {


	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">

			<h2>Forget password?</h2>

			<ForgetPasswordForm />

		    <p className="link">Already have an account? <a href="/signin">Sign in</a></p> 
		    	
		    </Col>
		  </Row>
		</Container>
	)

}			