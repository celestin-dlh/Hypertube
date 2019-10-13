import React, { useState, useEffect } from 'react';
import {getProfile} from "../services/requestManager";
import {useParams } from 'react-router-dom';

import Header from '../layout/Header';

export default function User() {
    let {username} = useParams();

    const [user, setUser] = useState({
        username: '',
        firstname: '',
        lastname: ''
    });

    useEffect(() => {
        getProfile({ username }).then((res) => {
           console.log(res);
           setUser(res.data)
        });
    }, []);



    return (
        <>
        <p>{user.username}</p>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
        <p>user profile </p>
        </>
    )
}