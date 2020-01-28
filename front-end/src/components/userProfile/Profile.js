import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getUser } from '../services/requestManager';
import { ProfileOf } from '../services/textLang';

/* Style */
import '../style/movieInfo.css';

function Profile() {
	const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

    const [userInfos, setUserInfos] = useState({
        firstname: '',
        lastname: '',
        profilepicture: '',
        url_profilepicture: '',
        error: ''
    });

    let { username } = useParams();


    useEffect(() => {
        getUser(username)
            .then((res) => {
                setUserInfos(res.data);
            })
            .catch(() => {
                setUserInfos({error: "User not found"})
            })
    }, [username]);


	return (
		<Container fluid className="settings" >
			<Row className="justify-content-center" style={{height: "96vh"}}>
				<Col md="4" className="" style={{margin: "auto"}}>
                    <div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        {userInfos.error === 'User not found' ? 
                            <div><h3>{userInfos.error}</h3></div> :
                            <div>
                                <h3>{ProfileOf[lang]} {userInfos.username}</h3>
                                <h3>{userInfos.firstname + ' ' + userInfos.lastname}</h3>
                                <span className="profilPic"
                                      style={{backgroundImage: `url(${userInfos.url_profilepicture === "" ?
                                              userInfos.profilepicture : (!userInfos.profilepicture ?
                                                  userInfos.url_profilepicture : (process.env.REACT_APP_URL_BACK
                                                      + "/profile_pic/" + userInfos.profilepicture))})`}}>
                                </span>
                            </div>
                        }   
                    </div>
				</Col>
			</Row>
		</Container>
	)
}			

export default withRouter(Profile);