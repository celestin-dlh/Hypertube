import React, { useState } from 'react';
import { withRouter } from "react-router";

/* Bootstrap */
import Navbar from 'react-bootstrap/Navbar';

import { logout } from '../services/requestManager';

/* Style */
import './Header.css';

const Header = function({ history }) {
    const [research, setResearch] = useState('');
    const [enableMenu, setEnableMenu] = useState('');

    const handleOnChange = (event) => setResearch(event.target.value)
    const handleSubmit = () => history.push('/search/' + research);
    const handleClick = () => setEnableMenu(enableMenu === "none" ? '' : 'none')

    return (
        <Navbar className="navbar">

            <div id="brand-toggle">
                <img className="toggle-img" onClick={handleClick} width="24" src="/images/toggle-button.png" alt="toggle" /> 
                <a href="/" className="brand">Hypertube</a>        
            </div>

            <form className="form-search" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search a movie..." className="input-search" onChange={handleOnChange} value={research} />
                <button className="button-search"><img width="25" src="/images/search-icon.png" alt="search"/></button>
            </form>
            
            <div className="profile-avatar" >
                <img width="32" src="/images/default_avatar-white.png" alt="avatar" />
            </div>

            <div className="menu" style={{display: enableMenu}}>
                <a href="/">
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/home-white.png" alt="home" />
                            <p>Accueil</p>                                  
                        </div>
                    </div>
                </a>
                <a href="/profile">
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/default_avatar-white.png" alt="profile" />
                            <p>Profile</p>                                  
                        </div>
                    </div>
                </a>
                <a href="/settings">
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/settings-white.png" alt="settings" />
                            <p>Parametres</p>                                  
                        </div>
                    </div>
                </a>
                <a href="/login" onClick={logout}>
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/logout-white.png" alt="logout" />
                            <p>Logout</p>                                  
                        </div>
                    </div>
                </a>
            </div>
            
        </Navbar>
    )
}

export default withRouter(Header);