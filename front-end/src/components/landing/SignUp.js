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

const ButtonLogin = (props) => {
    return (
        <React.Fragment>
            <Button variant={props.color} type="submit" size="lg" block className="buttonForm">
                <a className="google-btn" href={props.link} style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div>
                        <i className={props.logo} style={{marginRight: "-30px"}}></i>
                        <img src={props.image} alt={props.alt} style={{width: "30px", marginRight: "60px"}}/>
                    </div>
                    <div> {props.text}</div>
                </a>
            </Button>
        </React.Fragment>
    )
};

const ButtonContainer = () => {
	return (
		<React.Fragment>
			<Row className="justify-content-center">
                    <ButtonLogin
                        color="danger"
                        link="http://localhost:5000/auth/google"
                        text="Sign up with Google"
                        logo="fab fa-google"
                    />
			</Row>
			<Row className="justify-content-center">
                    <ButtonLogin
                        color="primary"
                        link="http://localhost:5000/auth/42"
                        text="Sign up with 42"
                        image="/images/42-icon.svg"
                        alt="42 logo"
                    />
			</Row>
		</React.Fragment>
	)
};

export default function SignUp() {

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">
		    	<h2>Hypertube Sign Up</h2>
		    	<ButtonContainer />
				<h5 className="hr">Or create account using email</h5>

		    	<SignUpForm />
		    	<p>Already have an account ? <a href="/signin" style={{color: "black"}}>Sign in</a></p>
		    </Col>
		  </Row>
		</Container>
	)

}			