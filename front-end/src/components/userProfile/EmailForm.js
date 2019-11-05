import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
	
/* Style */

import { updateEmail } from '../services/requestManager';

export default function EmailForm() {
	const [email, setEmail] = useState({
		'email': ''
	});

	const handleOnChange = (event) => {
		setEmail({[event.target.name]: event.target.value})
	}

	const onSubmit = (event) => {
		event.preventDefault();
		updateEmail(email)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<p>Email</p>
		<Form onSubmit={onSubmit}>
			<Form.Group controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control 
					type="email"
					name="email" 
					placeholder="Email" 
					onChange={handleOnChange} 
					value={email.email}
					required
				/>
			</Form.Group>			

			<Row className="justify-content-center">
				<Button 
					type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
				    Update email
				</Button>
			</Row>

		</Form>

		</div>
	)
}