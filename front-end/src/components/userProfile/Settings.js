import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Style */
import '../style/Settings.css';
import '../style/Input.css';

/* Templates */ 
import UpdateInfos from './UpdateInfos';
import UpdatePassword from './UpdatePassword';

import Header from '../templates/Header';
 
function Settings() {

	return (
		<Container fluid style={{padding: "0px"}} className="settings" >
			<Header/>
			<Row className="justify-content-center" style={{height: "95vh"}}>
				<Col md="4" className="" style={{margin: "auto"}}>
					<UpdateInfos />
				</Col>
				<Col md="4" className="" style={{margin: "auto"}}>
					<UpdatePassword />
				</Col>
			</Row>
		</Container>
	)
}			

export default Settings;