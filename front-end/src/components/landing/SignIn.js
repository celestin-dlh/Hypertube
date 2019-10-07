import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/sign.css';

/* Form */
import SignInForm from '../action/SignInForm';

export default function SignUp() {

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">
		    	<h2>Hypertube Sign In</h2>
				<Row className="justify-content-center">
					<Button
						variant="danger" type="submit" size="lg" block className="buttonForm"
					>
						Sign in with Google
					</Button>
				</Row>
				<Row className="justify-content-center">
					<Button
						variant="primary" type="submit" size="lg" block className="buttonForm"
					>
						Sign in with Facebook
					</Button>
				</Row>
				<h5 className="hr">or create account using email</h5>

		    	<SignInForm />
		    	<p className="link">Create your account ? <a href="/signup">Sign Up</a></p>
		    	
		    </Col>
		  </Row>
		</Container>
	)

}			