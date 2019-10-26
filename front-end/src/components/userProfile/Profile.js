import React from 'react';

/* Bootstrap */
import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';
import Navbar       from 'react-bootstrap/Navbar';
import Nav          from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import Button       from 'react-bootstrap/Button';


/* Style */
import '../style/profile.css';


export default function Profil() {

    return (
        <Container fluid={true} style={{paddingLeft: "0px", paddingRight: "0px"}}> 
            <Navbar bg="light" sticky="top">
                <Navbar.Brand href="/home">Hypertube</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="light">Search</Button>
                    </Form>
                <img width="32" src="./images/default_avatar.png" />
            </Navbar>
        </Container>
    )

}
