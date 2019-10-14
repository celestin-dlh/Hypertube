import React,{ useState, useEffect } from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
	
/* Style */
import '../style/sign.css';

/* Form */
import FullNameForm from './FullNameForm';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import ProfilePicForm from './ProfilePicForm';

import { getProfile } from '../services/requestManager';

function Edit() {

	// const [userData, setUserData] = useState({
	// 	username: '',
	// 	firstname: '',
	// 	lastname: '',
	// 	profilepic: '',
	// 	email: '',
	// })

	// useEffect(() => {
	// 	getProfile()
	// 	.then((res) => {
	// 		setUserData(res.data)
	// 	})
	// }, [])
	// console.log(userData)

	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">

				<h2>Edit</h2>

				<FullNameForm />
				<EmailForm />
				<PasswordForm />
				<ProfilePicForm />

		    	
		    </Col>
		  </Row>
		</Container>
	)

}			

export default Edit