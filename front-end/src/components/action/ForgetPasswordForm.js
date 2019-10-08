import React, { useState } from 'react';
import axios from 'axios';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
	
/* Style */
import '../style/sign.css';

/* Form */

export default function ForgetPasswordForm() {
	const [inputs, setEmail] = useState({
		'email': ''
	});

	const handleOnChange = (event) => {
		setEmail({[event.target.name]: event.target.value})
	}

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(inputs)
		axios.post('http://localhost:5000/auth/forgetpassword', inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control 
					type="email"
					name="email" 
					placeholder="Email" 
					onChange={handleOnChange} 
					value={inputs.email}
					required
				/>
			</Form.Group>			

			<Row className="justify-content-center">
				<Button 
					type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
				    Send email !
				</Button>
			</Row>
		</Form>
	)
}