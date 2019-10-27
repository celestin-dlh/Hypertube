import React, { useState } from 'react';

/* Bootstrap */
import Container    from 'react-bootstrap/Container';
import Navbar       from 'react-bootstrap/Navbar';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import Button       from 'react-bootstrap/Button';


/* Style */
import '../style/menu.css';


export default function Profile() {
    const [enableMenu, setEnableMenu] = useState('menu menu-not-toggle');

    const handleClick = () => {
        if (enableMenu === "menu menu-not-toggle") {
            setEnableMenu('menu menu-toggle')
        } 
        else {
            setEnableMenu('menu menu-not-toggle')
        }
    }

    return (
        <Container fluid={true} style={{paddingLeft: "0px", paddingRight: "0px"}}> 
            <Navbar sticky="top" style={{backgroundColor: "grey", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                    <img onClick={handleClick} width="32" src="./images/toggle-button.jpg"/>
                        
                    <div id="menu" className={enableMenu}>
                        
                        <a href="/">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/home.png" />
                                    <p>Accueil</p>                                  
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

                        <a href="/logout">
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
