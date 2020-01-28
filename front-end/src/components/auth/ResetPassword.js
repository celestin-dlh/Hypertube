import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, withRouter} from "react-router-dom";

import useForm from 'react-hook-form';

/* Lang */
import { ResetYourPassword, NewPassword, BackToLoginPage } from '../services/textLang';


/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/* Style */
import '../style/Auth.css';

function ResetPassword({props, history}) {
    let { token } = useParams();
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

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

    const onSubmit = async () => {
        axios.post(process.env.REACT_APP_URL_BACK +'/auth/resetpassword', inputs)
            .then(() => {
                history.push('/login');
            })
            .catch(() => {
                alert('Wrong Password Format or token unknown')
            });
    };

    const { register, errors, handleSubmit } = useForm();

	return (
		<Container>
		  <Row className="justify-content-center" style={{width: "100%"}}>
		    <Col xs="12" md="9" lg="6">
				<div className="auth-container">
					<h1>{ResetYourPassword[lang]}</h1>
					<div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
						{/*<form onSubmit={handleSubmit}>*/}
							<div className="input-form" style={{marginTop: "15px"}}>
								<label htmlFor="inp" className="inp">
									<input className="input"
                                           type="password"
                                           placeholder="&nbsp;"
                                           name="password"
                                           onChange={handleOnChange}
                                           value={inputs.password}
                                           ref={register({ required: true, maxLength: 30, minLength: 8,
                                               pattern: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/}
                                               )}
                                    />
                                    {errors.password && errors.password.type === "required" && 'Password is required'}
                                    {errors.password && errors.password.type === "maxLength" && 'Password is too long'}
                                    {errors.password && errors.password.type === "minLength" && 'Password is too short'}
                                    {errors.password && errors.password.type === "pattern" && 'Password must contain at least one lowercase, upercase and number'}
									<span className="label">{NewPassword[lang]}</span>
									<span className="border"></span>
								</label>
							</div>
							<Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                {ResetYourPassword[lang]}
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

export default withRouter(ResetPassword);