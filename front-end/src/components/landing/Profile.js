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
        <Container fluid={true}>
            <Navbar bg="dark bg-dark justify-content-between" sticky="top">
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <NavDropdown title={
                            <i className="fas fa-2x fa-bars" style={{marginRight: "10px"}}></i>
                        }>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Movie" className="mr-sm-2" />
                        </Form>
                    </div>
                    <Nav className="mr-sm-2 dropleft">
                        <NavDropdown title={
                                <img className="thumbnail-image"
                                     src="https://lh3.googleusercontent.com/a-/AAuE7mCts4KTGMveAvrcHBPVqQxz_uv48aFixYQu6XrCIA"
                                     alt="user pic"
                                     style={{height: "50px", borderRadius: "50%", border: "2px solid white"}}
                                /> }
                                     id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
            </Navbar>
        </Container>
    )

}
