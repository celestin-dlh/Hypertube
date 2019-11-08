import React, { useState } from 'react';
import axios from 'axios';

/* Style */
import '../style/Auth.css';
import '../style/Input.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
	
function Register() {

    const [inputs, setInputs] = useState({
		'firstname': '',
		'lastname': '',
		'username': '',
		'email': '',
		'password': ''
	});

    const [picture, setPicture] = useState(null);
    const [passwordType, setPasswordType] = useState('password');

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	}

	const handleOnFileChange = (event) => {
	    const file = event.target.files[0];
	    setPicture(file);
    }

    const handleClick = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else {
            setPasswordType('password');
        }
    }

    const handleSubmit = (event) => {
		let formData = new FormData();
			formData.append('avatar', picture);
			formData.append('firstname', inputs.firstname);
			formData.append('lastname', inputs.lastname);
			formData.append('username', inputs.username);
			formData.append('email', inputs.email);
			formData.append('password', inputs.password);

        event.preventDefault(); 
        console.log(inputs)

		axios.post('http://localhost:5000/auth/register', formData)
			.then((res) => {
				console.log(res)
				// if (res.data === "success")
				// 	history.push('/signin')
				// else
				// 	setError(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="flex-container">
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <div className="input-form">
                                            <label htmlFor="inp" className="inp">
                                                <input className="input" type="text" placeholder="&nbsp;" name="firstname" onChange={handleOnChange} value={inputs.firstname}/>
                                                <span className="label">First Name</span>
                                                <span className="border"></span>
                                            </label>  
                                        </div>                                    
                                    </Col>
                                    <Col>
                                        <div className="input-form">
                                            <label htmlFor="inp" className="inp">
                                                <input className="input" type="text" placeholder="&nbsp;" name="lastname" onChange={handleOnChange} value={inputs.lastname}/>
                                                <span className="label">Last Name</span>
                                                <span className="border"></span>
                                            </label>  
                                        </div>                                    
                                    </Col>
                                </Row>
                                <div className="input-form" style={{marginTop: "0px"}}>
                                    <label htmlFor="inp" className="inp">
                                        <input className="input" type="text" placeholder="&nbsp;" name="username" onChange={handleOnChange} value={inputs.username}/>
                                        <span className="label">Username</span>
                                        <span className="border"></span>
                                    </label>  
                                </div>
                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input className="input" type="email" placeholder="&nbsp;" name="email" onChange={handleOnChange} value={inputs.email}/>
                                        <span className="label">Email</span>
                                        <span className="border"></span>
                                    </label>  
                                </div>

                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input className="input" type={passwordType} placeholder="&nbsp;" name="password" onChange={handleOnChange} value={inputs.password}/>
                                        <span className="label">Password</span>
                                        <img className="eyePassword" alt="see-password" onClick={handleClick} width="25" src={passwordType === "password" ? "./images/eye-close.png" :"./images/eye-open.png"}/>
                                        <span className="border"></span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="file-input">
                                        <div className="pictureContainer">
                                            <img 
                                                src={picture ? URL.createObjectURL(picture) : './images/default_avatar.png'}
                                                id="avatar"
                                                className="avatar"
                                                alt="avatar" 
                                            />
                                        </div>
                                    </label>
                                    <input
                                        variant="outlined"
                                        type="file"
                                        id="file-input"
                                        name="file"
                                        onChange={handleOnFileChange}
                                        className="imageUpload"
                                    />
                                </div>
                                <Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                    Register
                                </Button>   
                            </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;