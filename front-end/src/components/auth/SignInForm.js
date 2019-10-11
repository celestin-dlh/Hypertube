import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

/* redux */
import { useSelector, useDispatch } from 'react-redux'
import { username } from '../../redux/actions'

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/sign.css';


function SignInForm({ history }) {
	const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
		'username': '',
		'password': '',
	});	

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:5000/auth/login', inputs)
			.then((res) =>
			{
				console.log(res)
				if (res.data.error === 'success') {
					console.log(res.data.accessToken)
					localStorage.setItem('token', res.data.accessToken)
					/* redux */
					dispatch(username(inputs.username))
					history.push('/profile');					
				}
				else
					console.log("BAD CREDENTIAL")

			})
			.catch((err) => 
				console.log(Object.values(err)))
	}

	return (

		<Form onSubmit={onSubmit}>
			<Form.Group controlId="formGridUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control 
					type="text" 
					name="username" 
					placeholder="Username" 
					onChange={handleOnChange} 
					value={inputs.username}
					required
				/>
			</Form.Group>			

			<Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control 
				    type="password" 
				    name="password" 
				    placeholder="Password" 
				    onChange={handleOnChange} 
				    value={inputs.password}
				    required
				/>
			</Form.Group>

			<Row className="justify-content-center">
				<Button 
					disabled={!(inputs.username && inputs.password)}
					type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
				    Sign in
				</Button>
			</Row>
		</Form>
	)

}

export default withRouter(SignInForm);
