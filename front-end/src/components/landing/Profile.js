import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
/* Style */
import '../style/sign.css';

import getUser from '../services/requestManager.js';

export default function SignUp() {

	const handleClick = () => {
		getUser('zeeratul')
			.then((res) => {
				console.log(res)
			})
	}
	return (
		<Container>
		  <Row className="justify-content-center">
		    <Col md="8" className="containerForm">
		    	<Button onClick={handleClick}>Click</Button>
		    </Col>
		  </Row>
		</Container>
	)

}			