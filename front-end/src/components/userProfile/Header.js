import React, { useState } from 'react';

/* Bootstrap */
import Container    from 'react-bootstrap/Container';
import Navbar       from 'react-bootstrap/Navbar';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import Button       from 'react-bootstrap/Button';

import { logout } from '../services/requestManager';

/* Style */
import '../style/menu.css';

export default function Profile() {
    const [enableMenu, setEnableMenu] = useState('none');

    const handleClick = () => {
        if (enableMenu === "none") {
            setEnableMenu('')            
        }
        else {
            setEnableMenu('none')            
        }

    }

    return (
        <Container fluid={true} style={{paddingLeft: "0px", paddingRight: "0px"}}> 
            <Navbar sticky="top" style={{backgroundColor: "grey", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                    <img onClick={handleClick} width="32" src="./images/toggle-button.jpg"/>
                        
                    <div style={{display: enableMenu}} className="menu">
                        
                        <a href="/">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/home.png" />
                                    <p>Accueil</p>                                  
                                </div>
                            </div>
                        </a>
                        <a href="/profile">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/default_avatar.png"/>
                                    <p>Profile</p>                                  
                                </div>
                            </div>
                        </a>
                        <a href="/settings">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/settings.png"/>
                                    <p>Parametres</p>                                  
                                </div>
                            </div>
                        </a>

                        <a href="/logout" onClick={logout}>
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/logout.png"/>
                                    <p>Logout</p>                                  
                                </div>
                            </div>
                        </a>
                    </div>
                    <Navbar.Brand href="/home">Hypertube</Navbar.Brand>        
                </div>

                <Form inline>
                    <FormControl type="text" placeholder="Search a movie..." className="mr-sm-2" />
                    <Button variant="light">Search</Button>
                </Form>
                <div>
                    <img style={{textAlign: "right"}} width="32" src="./images/default_avatar.png" />

                </div>

            </Navbar>
        </Container>
    )

}
