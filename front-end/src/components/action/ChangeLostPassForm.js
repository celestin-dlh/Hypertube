import React, { useState } from 'react';
import axios from 'axios';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/sign.css';


export default function ChangeLostPassForm() {

    const [inputs, setInputs] = useState({
        'password': ''
    });

    const [errors, setInputsErrors] = useState({
        'error_password': ''
    });


    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputs({ ...inputs, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/changelostpass', inputs)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{display: "none"}}>New Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="New Password" onChange={handleOnChange} value={inputs.password}/>
            </Form.Group>

            <Row className="justify-content-center">
                <Button type="submit" size="lg" block className="buttonForm" style={{border: "none", backgroundColor: "#e5a00d"}}>
                    Update
                </Button>
            </Row>
        </Form>
    )

}