import React, { useState } from 'react';
import axios from 'axios';

/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import '../style/sign.css';

export default function SignUpForm() {

	const [inputs, setInputs] = useState({
		'firstname': '',
		'lastname': '',
		'username': '',
		'email': '',
		'password': ''
	});

	const [picture, setPicture] = useState(null);

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	}

	const handleOnFileChange = (event) => {
	    const file = event.target.files[0];
	    setPicture(file)
  	}

	const handleSubmit = (event) => {
		let formData = new FormData();
			formData.append('avatar', picture);
			formData.append('firstname', inputs.firstname);
			formData.append('lastname', inputs.lastname);
			formData.append('username', inputs.username);
			formData.append('email', inputs.email);
			formData.append('password', inputs.password);

		event.preventDefault();

		axios.post('http://localhost:5000/auth/register', formData)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Row>
				<Form.Group as={Col} controlId="formBasicFirstName">
				    <Form.Label>First Name</Form.Label>
					<Form.Control type="text" name="firstname" placeholder="First Name" onChange={handleOnChange} value={inputs.firstname}/>
				  </Form.Group>

				<Form.Group as={Col} controlId="formGridLastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" name="lastname" placeholder="Last Name" onChange={handleOnChange} value={inputs.lastname}/>
				</Form.Group>
			</Form.Row>

			<Form.Group controlId="formGridUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" name="username" placeholder="Username" onChange={handleOnChange} value={inputs.username}/>
			</Form.Group>			

			<Form.Group controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleOnChange} value={inputs.email}/>
			    <Form.Text className="text-muted" >
			      We'll never share your email with anyone else.
			    </Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange} value={inputs.password}/>
			</Form.Group>

			<Row className="justify-content-center">
				<Form.Group controlId="formBasicPicture">
		            <label htmlFor="file-input">
		                <div className="pictureContainer">
		                  <img 
		                    src={picture ? URL.createObjectURL(picture) : 'images/default_avatar.png'}
		                    id="avatar"
		                    className="avatar"
		                    alt="avatar" />
		               	</div>        
		            </label>
					<input
						variant="outlined"
						type="file"
						id="file-input"
						name="file"
						onChange={handleOnFileChange}
						className="imageUpload"
					/>
				</Form.Group>

			</Row>			
			<Row className="justify-content-center">
				<p className="text-muted">Don't forget to choose a profile pic</p>
			</Row>

			<Row className="justify-content-center">
				<Button
					disabled={!(inputs.firstname && inputs.lastname && inputs.username && inputs.email && inputs.password && picture)}
					type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
				    Create
				</Button>
			</Row>
		</Form>
	)

}			