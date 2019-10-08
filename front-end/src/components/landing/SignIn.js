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
                    <h2>Hypertube Sign In</h2>
                    <ButtonContainer />
                    <h5 className="hr">or create account using email</h5>
                    <SignInForm />
                    <p>Create your account ? <a href="/signup" style={{color: "black"}}>Sign Up</a></p>
                </Col>
            </Row>
        </Container>
    )

}