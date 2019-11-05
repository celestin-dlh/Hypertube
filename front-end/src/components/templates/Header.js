import React, { useState } from 'react';

/* Bootstrap */
import Navbar       from 'react-bootstrap/Navbar';

import { logout } from '../services/requestManager';

/* Style */
import './Header.css';

export default function Profile() {
    const [enableMenu, setEnableMenu] = useState('');

    const handleClick = () => {
        if (enableMenu === "none") {
            setEnableMenu('')            
        }
        else {
            setEnableMenu('none')            
        }
    }

    return (
        <div style={{paddingLeft: "0px", paddingRight: "0px"}}> 
            <Navbar sticky="top" style={{backgroundColor: "#272727", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                
                <div id="menu-div">
                    <img onClick={handleClick} width="25" src="./images/toggle-button.png" alt="toggle" style={{marginLeft: "7px"}}/>
                        
                    <div style={{display: enableMenu}} className="menu">
                        
                        <a href="/">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/home-white.png" />
                                    <p>Accueil</p>                                  
                                </div>
                            </div>
                        </a>
                        <a href="/profile">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/default_avatar-white.png"/>
                                    <p>Profile</p>                                  
                                </div>
                            </div>
                        </a>
                        <a href="/settings">
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/settings-white.png"/>
                                    <p>Parametres</p>                                  
                                </div>
                            </div>
                        </a>
                        <a href="/login" onClick={logout}>
                            <div className="menuCell">
                                <div className="content">
                                    <img width="24" src="./images/logout-white.png"/>
                                    <p>Logout</p>                                  
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="/" className="brand" style={{marginLeft: "25px", marginTop: "5px"}}>Hypertube</a>        
                </div>

                <form className="form-search" >
                    <input type="text" placeholder="Search a movie..." className="input-search" />
                    <button className="button-search"><img width="25" src="./images/search-icon.png"/></button>
                </form>
                
                <div>
                    <img style={{textAlign: "right"}} width="32" src="./images/default_avatar-white.png" />
                </div>

            </Navbar>
        </div>
    )
}