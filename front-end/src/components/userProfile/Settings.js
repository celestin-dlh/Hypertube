import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Style */
import '../style/Settings.css';
import '../style/Input.css';

import { getUser } from '../services/requestManager';


/* settings forms */
import UpdateInfos from './settings-forms/UpdateInfos';
import UpdateProfilePic from './settings-forms/UpdateProfilePic';
import UpdateLanguage from './settings-forms/UpdateLanguage';
import UpdatePassword from './settings-forms/UpdatePassword';
 
function Settings() {

	const [data, setData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		profilepicture: '',
		url_profilepicture: '',
		language: '',
	});

	useEffect(() => {
		getUser()
		.then((res) => {
			setData(res.data);
		})
	}, []);

	return (
		<Container fluid className="settings" >
			<Row className="justify-content-center full">
				<Col md="4" style={{margin: "auto"}}>
					<UpdateProfilePic profilepicture={data.profilepicture} url_profilepicture={data.url_profilepicture} />
				</Col>
				<Col md="4" style={{margin: "auto"}}>
					<UpdateLanguage language={data.language} />
				</Col>
			</Row>
			<Row className="justify-content-center full">
				<Col md="4" style={{margin: "auto"}}>
					<UpdateInfos data={data}/>
				</Col>
				<Col md="4" style={{margin: "auto"}}>
					<UpdatePassword />
				</Col>
			</Row>
		</Container>
	)
}			

export default Settings;