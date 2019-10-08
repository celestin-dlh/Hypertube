import React from 'react';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/* Style */
import '../style/sign.css';

/* Form */
import ChangeLostPassForm from '../action/ChangeLostPassForm';

export default function ChangeLostPass() {

    return (
        <Container>
            <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px"}}>
                <Row className="justify-content-center">
                    <Col>
                        <h2>Set new password</h2>
                    <ChangeLostPassForm/>
                    </Col>
                </Row>
            </div>
        </Container>
    )

}