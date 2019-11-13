import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Style */
import '../style/Settings.css';
import '../style/Input.css';

/* Templates */ 
import Header from '../templates/Header';
 
function Movies() {


	return (
		<Container fluid style={{padding: "0px"}} className="settings" >
			<Header/>
			<Row className="justify-content-center dark-row">
				<Col md="11">
                    <div id="list" style={{display: "flex", flexDirection: "row"}}>
                        <div></div>

                    </div>

				</Col>
			</Row>
		</Container>
	)
}			

export default Movies;