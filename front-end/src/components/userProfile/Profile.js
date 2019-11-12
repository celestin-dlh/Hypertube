import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getUser } from '../services/requestManager';

/* Templates */ 
import Header from '../templates/Header';
 
function Profile({ history }) {

    const [userInfos, setUserInfos] = useState({
        firstname: '',
        lastname: '',
        profilepicture: '',
        error: ''
    });

    let { username } = useParams();


    useEffect(() => {
        getUser(username)
            .then((res) => {
                setUserInfos(res.data)
            })
            .catch((err) => {
                setUserInfos({error: 'User not found'})
            })
    }, [username]);

	return (
		<Container fluid style={{padding: "0px"}} className="settings" >
			<Header />
			<Row className="justify-content-center" style={{height: "95vh"}}>
				<Col md="4" className="" style={{margin: "auto"}}>
                    <div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        {userInfos.error === 'User not found' ? 
                            <div><h3>{userInfos.error}</h3></div> :
                            <div>
                                <h3>Profile of {userInfos.username}</h3>
                                <h3>{userInfos.firstname + ' ' + userInfos.lastname}</h3>
                                <img src={"http://localhost:5000/profile_pic/" + userInfos.profilepicture   }  alt="avatar" />
                            </div>
                        }   
                    </div>
				</Col>
			</Row>
		</Container>
	)
}			

export default withRouter(Profile);