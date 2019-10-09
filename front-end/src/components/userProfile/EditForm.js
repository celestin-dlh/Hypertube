import React, { useState } from 'react';
import axios from 'axios';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
	
/* Style */
import '../style/sign.css';

import { updateFullName } from '../services/requestManager';
import { getProfile } from '../services/requestManager';

export default function EditForm() {
	const [fullname, setFullname] = useState({
		'firstname': '',
		'lastname': '',
	});

	const handleOnChange = (event) => {
		setFullname({ ...fullname, [event.target.name]: event.target.value})
	}

	const onSubmit = (event) => {
		event.preventDefault();
		updateFullName(fullname)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<p>First name Last name</p>
		<Form onSubmit={onSubmit}>
			<Form.Group controlId="formGridFirstName">
				<Form.Label>First Name</Form.Label>
				<Form.Control 
					type="text"
					name="firstname" 
					placeholder="First Name" 
					onChange={handleOnChange} 
					value={fullname.firstname}
					required
				/>
			</Form.Group>	
			<Form.Group controlId="formGridLastName">
				<Form.Label>Last Name</Form.Label>
				<Form.Control 
					type="text"
					name="lastname" 
					placeholder="Last Name" 
					onChange={handleOnChange} 
					value={fullname.lastname}
					required
				/>
			</Form.Group>			

			<Row className="justify-content-center">
				<Button 
					type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
				    Update infos
				</Button>
			</Row>

		</Form>

		</div>
	)
}