import React, { useState } from 'react';
import axios from 'axios';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/sign.css';


export default function SignUpForm() {

	const [inputs, setInputs] = useState({
		'username': '',
		'password': '',
	});	

	const [errors, setInputsErrors] = useState({
		'error_username': '',
		'error_password': ''
	});




	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:5000/auth/register', inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formGridUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" name="username" placeholder="Username" onChange={handleOnChange} value={inputs.username}/>
				<Form.Text className="text-muted" >
			      {errors.error_username}
			    </Form.Text>
			</Form.Group>			

			<Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange} value={inputs.password}/>
			</Form.Group>

			<Row className="justify-content-center">
				<Button type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
				    Sign in
				</Button>
			</Row>
		</Form>
	)

}			