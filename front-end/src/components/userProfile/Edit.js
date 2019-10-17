import React, { useState } from 'react';
import { withRouter } from "react-router";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
	
import Sidebar from '../layout/sidebar';



function UpdateInfos() {
	return (
		<div>
			Updates Infos
		</div>
	)
}
	
function Second() {
	return (
		<p>second component</p>
	)
}
	
function Third() {
	return (
		<p>third component</p>
	)
}


function CallComponent(props) {
	let index = props.index;

	switch (index) {
		case 0:
			return <UpdateInfos />
	  	case 1:
			return <Second />
	  	case 2:
			return <Third />
	  	default:
			return (null);
	}
}

function Edit({ history }) {
	const [index, setIndex] = useState(0);

	const handleClick = () => {
		if (index >= 3) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}

	return (
		<Container fluid>
		  <Row className="justify-content-center">
			<Sidebar />
		    <Col md="8" className="containerForm">
				<button onClick={handleClick}>Change index</button>
				<CallComponent index={index} />
		    </Col>
		  </Row>
		</Container>
	)

}			

export default withRouter(Edit)