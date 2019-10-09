import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
	
/* Style */
import '../style/sign.css';

/* Form */
import EditForm from './EditForm';

export default function ForgetPassword() {


	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">

				<h2>Edit</h2>

				<EditForm />

		    	
		    </Col>
		  </Row>
		</Container>
	)

}			