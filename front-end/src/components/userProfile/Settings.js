import React,{ useState, useEffect } from 'react';
import { withRouter } from "react-router";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

/* Style */
import '../style/Settings.css';

/* Templates */ 
import Header from '../templates/Header';

function UpdatePassword() {
	return (
		<div>
			<h1>Update Password</h1>
			<form>
				<input type="text" placeholder="Password"/>
			</form>
		</div>
	)
}

function Menu(props) {
	if (props.component === "password") {
		return (
			<UpdatePassword />
		)
	}

	else {
		return (
			<h1>Infos</h1>
		)
	}
}


function Settings() {
	const [component, setComponent] = useState('infos');

	const handleClick = (event) => {
		setComponent(event.target.id)
		console.log(event.target.id);
	}


	return (
		<Container fluid style={{padding: "0px"}}>
			<Header/>
			<Row className="justify-content-center" style={{height: "95vh"}}>
				<Col md="2" className="">

					<div className="menu-settings" style={{display: "flex", flexDirection: "column", backgroundColor: "#272727"}}>
						<div onClick={handleClick} id="infos" className="cell">
							<p>Update Infos</p>
						</div>
						<div onClick={handleClick} id="password" className="cell">
							<p>Update Password</p>
						</div>
						<div className="cell">
							<p>Change background</p>
						</div>
					</div>



				</Col>
				<Col md="8" className="">
					<Menu component={component}/>

				</Col>
			</Row>
		</Container>
	)

}			

export default Settings;