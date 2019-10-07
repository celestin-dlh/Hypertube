import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/sign.css';

/* Form */
import SignUpForm from '../action/SignUpForm';

const ButtonContainer = () => {
	return (
		<React.Fragment>
			<Row className="justify-content-center">
				<Button
					variant="danger" type="submit" size="lg" block className="buttonForm"
				>
					Sign up with Google<a class="google-btn" href="http://localhost:5000/auth/google">Google+</a>
				</Button>
   				
			</Row>
			<Row className="justify-content-center">
				<Button
					variant="primary" type="submit" size="lg" block className="buttonForm"
				>
					Sign up with Facebook
				</Button>
			</Row>
		</React.Fragment>
	)
}

export default function SignUp() {

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">
		    	<h2>Hypertube Sign Up</h2>
		    	<ButtonContainer />
				<h5 className="hr">or create account using email</h5>

		    	<SignUpForm />
		    	<p className="link">Already have an account? <a href="/signin">Sign in</a></p> 
		    </Col>
		  </Row>
		</Container>
	)

}			