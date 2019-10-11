import React, { useState } from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
	
/* Style */
import '../style/sign.css';

import { updatePassword } from '../services/requestManager';

export default function PasswordForm() {
	const [password, setPassword] = useState({
		'password': '',
		'password_confirm': '',
	});

	const handleOnChange = (event) => {
		setPassword({ ...password, [event.target.name]: event.target.value})
	}

	const onSubmit = (event) => {
		event.preventDefault();
		updatePassword(password)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<p>Password</p>
			<Form onSubmit={onSubmit}>
				<Form.Group controlId="formGridPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="text"
						name="password" 
						placeholder="Password" 
						onChange={handleOnChange} 
						value={password.password}
						required
					/>
				</Form.Group>	
				<Form.Group controlId="formGridLastName">
					<Form.Control 
						type="text"
						name="password_confirm" 
						placeholder="Password confirm" 
						onChange={handleOnChange} 
						value={password.password_confirm}
						required
					/>
				</Form.Group>			

				<Row className="justify-content-center">
					<Button 
						type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
					    Update password
					</Button>
				</Row>
			</Form>
		</div>
	)
}