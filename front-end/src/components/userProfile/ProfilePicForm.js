import React, { useState } from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
	
/* Style */
import '../style/sign.css';

import { updateProfilePic } from '../services/requestManager';
import { getProfile } from '../services/requestManager';

export default function FullNameForm() {
	const [picture, setPicture] = useState(null);

	const handleOnChange = (event) => {
		const file = event.target.files[0];
	    setPicture(file)
	}

	const onSubmit = (event) => {
		let formData = new FormData();
			formData.append('avatar', picture);
		event.preventDefault();
		updateProfilePic(formData)
		// updateFullName(fullname)
		// 	.then((res) => {
		// 		console.log(res)
		// 	})
		// 	.catch((err) => {
		// 		console.log(err)
		// 	})
	}

	return (
		<div>
			<p>Profile Picture</p>
			<Form onSubmit={onSubmit}>
				<Form.Group controlId="formGridFirstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control 
						type="file"
						name="file" 
						onChange={handleOnChange} 
					/>
				</Form.Group>	
				<Row className="justify-content-center">
					<Button 
						type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
					    Update picture
					</Button>
				</Row>

			</Form>

		</div>
	)
}