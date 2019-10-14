import React, { useState, useEffect } from 'react';

import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import {getProfile} from "../services/requestManager";

/* Style */
import '../style/profile.css';

export default function Profil() {

    const [user, setUser] = useState({
        username: '',
        firstname: '',
        lastname: ''
    });

    //useEffect(() => {
    useEffect((username) => {
        getProfile({ username }).then((res) => {
            console.log(res);
            setUser(res.data)
        });
    }, []);

    return (
        <>
        <Header/>
            <div className="profileDisplay">
                <h1>Profile</h1>
                <section>
                    <h4>Username :</h4>
                    <p>{user.username}</p>
                    <h4>First Name</h4>
                    <p>{user.firstname}</p>
                    <h4>Last Name</h4>
                    <p>{user.lastname}</p>
                </section>
            </div>
        <Sidebar/>
        </>
    )

};
