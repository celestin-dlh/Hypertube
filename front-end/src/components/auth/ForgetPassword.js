import React, { useState } from 'react';
import axios from 'axios';
import useForm from 'react-hook-form';

/* lang */ 
import { SendEmail, forget, email, BackToLoginPage } from '../services/textLang';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/Auth.css';
import {withRouter} from "react-router";


function ForgetPassword({history}) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')

	const [inputs, setEmail] = useState({
		'email': ''
	});

	const handleOnChange = (event) => {
		setEmail({[event.target.name]: event.target.value})
	};

	const onSubmit = () => {
		document.getElementById('forgetpass').disabled = true;
		axios.post(process.env.REACT_APP_URL_BACK + '/auth/forgetpassword', inputs)
			.then(() => {
				history.push('/login');
			})
			.catch((err) => {
				console.log(err)
			});
	};
    const { register, errors, handleSubmit } = useForm();

	return (
		<Container>
		  <Row className="justify-content-center" style={{width: "100%"}}>
		    <Col xs="12" md="9" lg="6">
				<div className="auth-container">
					<h1>{forget[lang]}</h1>
					<div className="login-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="input-form" style={{marginTop: "15px"}}>
								<label htmlFor="inp" className="inp">
									<input className="input"
										   type="email"
										   placeholder="&nbsp;"
										   name="email"
										   onChange={handleOnChange}
										   value={inputs.email}
                                           ref={register({ required: true, maxLength: 320,
                                               pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/})}
                                    />
                                    {errors.email && errors.email.type === "required" && 'Email is required'}
                                    {errors.email && errors.email.type === "maxLength" && 'Email is too long'}
									<span className="label">{email[lang]}</span>
									<span className="border"></span>
								</label>
							</div>
							<Button id="forgetpass" variant="primary" size="lg" block type="submit" className="submit-button">
								{SendEmail[lang]}
                            </Button>
						</form>
					</div>
					<div className="link">
						<a href="/login"><p>{BackToLoginPage[lang]}</p></a>
					</div>
				</div>
		    </Col>
		  </Row>
		</Container>
	)
}

export default withRouter(ForgetPassword);