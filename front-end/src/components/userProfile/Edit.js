import React,{ useState, useEffect } from 'react';
import { withRouter } from "react-router";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
	
/* Style */

/* Form */
import FullNameForm from './FullNameForm';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import ProfilePicForm from './ProfilePicForm';

import { getProfile } from '../services/requestManager';
import {CheckLogged} from '../services/CheckLogged.js';

function Edit({ history }) {

	if (!CheckLogged()) {
		history.push('/signin')
	}
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

export default withRouter(Edit)