import React from 'react';

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

export default function ForgetPassword() {


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