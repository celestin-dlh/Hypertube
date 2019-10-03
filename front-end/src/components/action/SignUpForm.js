import React, { useState } from 'react';

/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/sign.css';


export default function SignUpForm() {
	const [inputs, setInputs] = useState({});

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Row>
				<Form.Group as={Col} controlId="formBasicFirstName">
				    <Form.Label>First Name</Form.Label>
					<Form.Control type="text" name="first-name" placeholder="First Name" onChange={handleOnChange}/>
				  </Form.Group>

				<Form.Group as={Col} controlId="formGridLastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" name="last-name" placeholder="Last Name" onChange={handleOnChange}/>
				</Form.Group>
			</Form.Row>

			<Form.Group controlId="formGridUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" name="username" placeholder="Username" onChange={handleOnChange}/>
			</Form.Group>			

			<Form.Group controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleOnChange}/>
			    <Form.Text className="text-muted" >
			      We'll never share your email with anyone else.
			    </Form.Text>
			</Form.Group>


			<Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange}/>
			</Form.Group>

				<Row className="justify-content-md-center">
					<Button variant="primary" type="submit" size="lg" block className="buttonForm">
					    Create
					</Button>
				</Row>

		</Form>
	)

}			