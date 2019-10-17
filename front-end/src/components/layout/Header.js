import React from 'react';

/* Bootstrap */
import Container    from 'react-bootstrap/Container';
import Navbar       from 'react-bootstrap/Navbar';
import Nav          from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';



/* Style */
import '../style/header.css';

export default function Header() {

    return (
        <Container fluid={true}>
            <Navbar bg="dark bg-dark justify-content-end navbar-collapse " sticky="top" style={{zIndex: "0"}}>
                <Nav className="mr-sm-2 dropleft">
                    <NavDropdown title={
                        <img className="thumbnail-image"
                             src="https://lh3.googleusercontent.com/a-/AAuE7mCts4KTGMveAvrcHBPVqQxz_uv48aFixYQu6XrCIA"
                             alt="user pic"
                             style={{height: "50px", borderRadius: "50%", border: "2px solid white", margin: "-10px"}}
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