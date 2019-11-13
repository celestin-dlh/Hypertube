import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Style */
import '../style/Settings.css';
import '../style/Input.css';

import { getUser } from '../services/requestManager';


/* Templates */ 
import UpdateInfos from './settings-forms/UpdateInfos';
import UpdateProfilePic from './settings-forms/UpdateProfilePic';
import UpdateLanguage from './settings-forms/UpdateLanguage';
import UpdatePassword from './settings-forms/UpdatePassword';

import Header from '../templates/Header';
 
function Settings() {

	const [data, setData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		profilepicture: '',
		language: '',
	});

	useEffect(() => {
		getUser()
		.then((res) => {
			setData(res.data);
		})
	}, []);

	return (
		<Container fluid style={{padding: "0px"}} className="settings" >
			<Header/>
			<Row className="justify-content-center dark-row">
				<Col md="4" style={{margin: "auto"}}>
					<UpdateProfilePic profilepicture={data.profilepicture} />
					<UpdateInfos data={data}/>
				</Col>
				<Col md="4" style={{margin: "auto"}}>
					<UpdateLanguage language={data.language} />
					<UpdatePassword />
				</Col>
			</Row>
		</Container>
	)
}			

export default Settings;