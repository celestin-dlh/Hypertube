import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";

/* lang */
import { Home, Profile, Settings, Logout, SearchMovie } from '../services/textLang';

/* Bootstrap */
import Navbar from 'react-bootstrap/Navbar';
import { logout } from '../services/requestManager';

/* Style */
import './Header.css';

const Header = function({history }) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

    const [research, setResearch] = useState('');
    const [enableMenu, setEnableMenu] = useState('');

    useEffect(() => {
        if (window.innerWidth < 600) {
            setEnableMenu('none');
        }
    }, [])

    const handleOnChange = (event) => setResearch(event.target.value.replace(/[^\w\s]/gi, ''));
    const handleSubmit = () => {
        history.push('/search/' + research + '/' + lang + '/title');
    };

    const handleClick = () => setEnableMenu(enableMenu === "none" ? '' : 'none');

    return (
        <Navbar className="navbar">

            <div id="brand-toggle">
                <img className="toggle-img" onClick={handleClick} width="24" src="/images/toggle-button.png" alt="toggle" />
                <a href="/" className="brand"><img src="/images/logo.png" alt="Hypertube" style={{height: "50px"}}/></a>
            </div>
            <form className="form-search" onSubmit={handleSubmit}>
                <input type="text" placeholder={SearchMovie[lang] + "..."} className="input-search" onChange={handleOnChange} value={research} />
                <button className="button-search"><img width="25" src="/images/search-icon.png" alt="search"/></button>
            </form>
            <div className="profile-avatar" >
            </div>

            <div className="menu" style={{display: enableMenu}}>
                <a href="/">
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/home-white.png" alt="home" />
                            <p>{Home[lang]}</p>
                        </div>
                    </div>
                </a>
                <a href={"/profile"}>
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/default_avatar-white.png" alt="profile" />
                            <p>{Profile[lang]}</p>
                        </div>
                    </div>
                </a>
                <a href={"/settings"}>
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/settings-white.png" alt="settings" />
                            <p>{Settings[lang]}</p>
                        </div>
                    </div>
                </a>
                <a href={"/login"} onClick={logout}>
                    <div className="menuCell">
                        <div className="content">
                            <img width="24" src="/images/logout-white.png" alt="logout" />
                            <p>{Logout[lang]}</p>
                        </div>
                    </div>
                </a>
            </div>
        </Navbar>
    )
};

export default withRouter(Header);