import React, { useState, useEffect } from 'react';
import {getProfile} from "../services/requestManager";
import {useParams } from 'react-router-dom';

import Header from '../layout/Header';
import Sidebar from "../layout/Sidebar";

export default function User() {
    let {username} = useParams();

    const [user, setUser] = useState({
        username: '',
        firstname: '',
        lastname: '',
        profilePictureGoogleFt: '',
        profilepicture: '',
    });

    useEffect(() => {
        getProfile({ username }).then((res) => {
           console.log(res);
           setUser(res.data)
        });
    }, []);

    if (user.profilepicture !== undefined)
    {
        user.profilePictureGoogleFt = "../../../../back-end/public/profile_pic/" + user.profilepicture;
        console.log(user.profilePictureGoogleFt);
    }

    return (
        <>
            <Header/>
            <Sidebar/>
            <div>
                <div className="profileDisplay">
                    <h1>Profile of {user.username}</h1><br/>
                    <section>
                        <h4>Username : {user.username}</h4>
                        <h4>First Name : {user.firstname}</h4>
                        <h4>Last Name : {user.lastname}</h4>
                    </section>
                        <img src={user.profilePictureGoogleFt} alt="profil picture"/>
                </div>
            </div>
        </>
    )
}