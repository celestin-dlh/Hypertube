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

const ButtonContainer = () => {
	return (
		<React.Fragment>				
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
		</React.Fragment>
	)
}

export default function SignUp() {

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">
		    	<h2>Hypertube Sign In</h2>

		    	<ButtonContainer />
				<h5 className="hr">or log here</h5>

		    	<SignInForm />
		    	<p className="link">LOGOUT<a href="/logout">LOGOUT</a></p>
		    	<p className="link">Create your account ? <a href="/signup">Sign Up</a></p>
		    	<p className="link">Forgot your password ? <a href="/forgetpassword">Click here</a></p>
		    	
		    </Col>
		  </Row>
		</Container>
	)

}			