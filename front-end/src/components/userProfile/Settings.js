import React,{ useState, useEffect } from 'react';
import { withRouter } from "react-router";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

/* Style */
import '../style/Settings.css';
import '../style/Input.css';

/* Templates */ 
import Header from '../templates/Header';

function UpdatePassword() {


	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update your password</h3>
			<form className="settings-form">
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="password" placeholder="&nbsp;" name="password" value="test"/>
						<span className="label">Password</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="password" placeholder="&nbsp;" name="password" value="test"/>
						<span className="label">New password</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="password" placeholder="&nbsp;" name="password" value="test"/>
						<span className="label">Confirm Password</span>
						<span className="border"></span>
					</label>
				</div>
			</form>
		</div>
	)
}

function UpdateInfos() {
	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update your Informations</h3>
			<form className="settings-form">
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="password" value="test"/>
						<span className="label">First Name</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="password" value="test"/>
						<span className="label">Last Name</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="email" placeholder="&nbsp;" name="password" value="test"/>
						<span className="label">Email</span>
						<span className="border"></span>
					</label>
				</div>
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

	else if (props.component === "infos") {
		return (
			<UpdateInfos />
		)
	}

	else {
		return (
			<h1>test</h1>
		)
	}
}


function Settings() {
	const [component, setComponent] = useState('infos');

	const handleClick = (event) => {
		setComponent(event.target.value)
		console.log(event.target.value);
	}


	return (
		<Container fluid style={{padding: "0px"}}>
			<Header/>
			<Row className="justify-content-center" style={{height: "95vh"}}>
				<Col md="2" className="" style={{margin: "auto"}}>
					<div className="menu-settings" style={{display: "flex", flexDirection: "column", backgroundColor: "#272727"}}>
						<h3>Celestin Delahaye</h3>
							<button onClick={handleClick} value="infos">
								<p>Update Infos</p>
							</button>
							<button onClick={handleClick} value="password">
								<p>Update Password</p>
							</button>
						<div className="cell">
							<p>Change background</p>
						</div>
					</div>



				</Col>
				<Col md="6" className="" style={{margin: "auto"}}>
					<Menu component={component}/>

				</Col>
			</Row>
		</Container>
	)

}			

export default Settings;