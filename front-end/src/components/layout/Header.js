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

function sidebarToogle() {
    console.log("sidebar");

}
    return (
        <Container fluid={true}>
            <Navbar bg="dark bg-dark justify-content-between navbar-collapse " sticky="top" style={{zIndex: "0"}}>
                <Navbar.Brand href="" onClick={sidebarToogle}><i className="fas fa-2x fa-bars text-white"></i></Navbar.Brand>
                    <Form inline className="d-none d-sm-block">
                        <FormControl type="text" placeholder="Search Movie"/>
                    </Form>
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