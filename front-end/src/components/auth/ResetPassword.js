import React, { useState } from 'react';
/* Bootstrap */
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Style */
import '../style/sign.css';

import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPassword() {
    let { token } = useParams();
    return (
        <Container>
            <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px"}}>
                <Row className="justify-content-center">
                    <Col>
                        <h2>Set new password</h2>
                        <ResetPasswordForm token={token}/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}