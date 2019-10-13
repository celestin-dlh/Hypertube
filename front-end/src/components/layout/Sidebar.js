import React from 'react';

/* Bootstrap */
import Container    from 'react-bootstrap/Container';
import Navbar       from 'react-bootstrap/Navbar';
import Nav          from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import Col          from 'react-bootstrap/Col';



/* Style */
import '../style/sidebar.css';


export default function Sidebar() {

    return (
            <div className="bg-success" id="sidebar">
                <div><a href="#home">Home</a></div>
                <div><a href="#Movies">Movies</a></div>
                <div><a href="#Settings">Settings</a></div>
                <div><a href="#Search">Search</a></div>
            </div>
    )

}