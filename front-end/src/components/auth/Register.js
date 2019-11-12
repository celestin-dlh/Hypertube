import React, { useState } from 'react';
import axios from 'axios';
import useForm from 'react-hook-form';

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
	};

	const handleOnFileChange = (event) => {
	    const file = event.target.files[0];
	    setPicture(file);
    };

    const handleClick = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else {
            setPasswordType('password');
        }
    };
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = () => {

        let formData = new FormData();
        formData.append('avatar', picture);
        formData.append('firstname', inputs.firstname);
        formData.append('lastname', inputs.lastname);
        formData.append('username', inputs.username);
        formData.append('email', inputs.email);
        formData.append('password', inputs.password);


        axios.post('http://localhost:5000/auth/register', formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    function inputFocus(event) {
        const input = document.getElementById(event.target.id);
        input.focus();
        input.select();
    }
    

    return (
        <Container>
            <Row className="justify-content-center" style={{width: "100%"}}>
                <Col xs="12" md="9" lg="5">
                    <div className="auth-container">
                        <h1>Register</h1>
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col>
                                        <div className="input-form">
                                            <label htmlFor="inp" className="inp">
                                                <input className="input"
                                                       type="text"
                                                       placeholder="&nbsp;"
                                                       name="firstname"
                                                       id="firstname"
                                                       onChange={handleOnChange}
                                                       value={inputs.firstname}
                                                       ref={register({ required: true, maxLength: 30})}/>
                                                {errors.firstname && errors.firstname.type === "required" && 'First name is required'}
                                                {errors.firstname && errors.firstname.type === "maxLength" && 'First name is too long'}
                                                <span className="label" id="firstname" onClick={inputFocus}>First Name</span>
                                                <span className="border"></span>
                                            </label>  
                                        </div>                                    
                                    </Col>
                                    <Col>
                                        <div className="input-form">
                                            <label htmlFor="inp" className="inp">
                                                <input className="input"
                                                       type="text"
                                                       placeholder="&nbsp;"
                                                       name="lastname"
                                                       id="lastname"
                                                       onChange={handleOnChange}
                                                       value={inputs.lastname}
                                                       ref={register({ required: true, maxLength: 30})}/>
                                                {errors.lastname && errors.lastname.type === "required" && 'Last name is required'}
                                                {errors.lastname && errors.lastname.type === "maxLength" && 'Last name is too long'}
                                                <span className="label" id="lastname" onClick={inputFocus}>Last Name</span>
                                                <span className="border"></span>
                                            </label>  
                                        </div>                                    
                                    </Col>
                                </Row>
                                <div className="input-form" style={{marginTop: "0px"}}>
                                    <label htmlFor="inp" className="inp">
                                        <input className="input"
                                               type="text"
                                               placeholder="&nbsp;"
                                               name="username"
                                               id="username"
                                               onChange={handleOnChange}
                                               value={inputs.username}
                                               ref={register({ required: true, maxLength: 30})}/>
                                        {errors.username && errors.username.type === "required" && 'Username is required'}
                                        {errors.username && errors.username.type === "maxLength" && 'Username is too long'}
                                        <span className="label" id="username" onClick={inputFocus}>Username</span>
                                        <span className="border"></span>
                                    </label>  
                                </div>
                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input className="input"
                                               type="text"
                                               placeholder="&nbsp;"
                                               name="email"
                                               id="email"
                                               onChange={handleOnChange}
                                               value={inputs.email}
                                               ref={register({ required: true, maxLength: 320,
                                                   pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/})}
                                        />
                                        {errors.email && errors.email.type === "required" && 'Email is required'}
                                        {errors.email && errors.email.type === "maxLength" && 'Email is too long'}
                                        {errors.email && errors.email.type === "pattern" && 'Wrong email'}
                                        <span className="label" id="email" onClick={inputFocus}>Email</span>
                                        <span className="border"></span>
                                    </label>  
                                </div>

                                <div className="input-form">
                                    <label htmlFor="inp" className="inp">
                                        <input className="input"
                                               type={passwordType}
                                               placeholder="&nbsp;"
                                               name="password"
                                               id="password"
                                               onChange={handleOnChange}
                                               value={inputs.password}
                                               ref={register({ required: true, maxLength: 30, minLength: 8,
                                                   pattern: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/})}
                                        />
                                        {errors.password && errors.password.type === "required" && 'Password is required'}
                                        {errors.password && errors.password.type === "maxLength" && 'Password is too long'}
                                        {errors.password && errors.password.type === "minLength" && 'Password is too short'}
                                        {errors.password && errors.password.type === "pattern" && 'Password must contain at least one lowercase, upercase and number'}
                                        <span className="label" id="password" onClick={inputFocus}>Password</span>
                                        <img className="eyePassword"
                                             alt="see-password"
                                             onClick={handleClick}
                                             width="25"
                                             src={passwordType === "password" ? "./images/eye-close.png" :"./images/eye-open.png"}/>
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
                                        ref={register({ required: true,
                                            pattern: /(.jpeg|.jpg|.png)$/})}
                                    />
                                    {errors.file && errors.file.type === "required" && 'Avatar is required'}
                                    {errors.file && errors.file.type === "pattern" && 'Avatar must be .jpeg .jpg or .png'}
                                </div>
                                <Button variant="primary"  size="lg" block type="submit" className="submit-button">
                                    Register
                                </Button>   
                            </form>
                        </div>
                        <div className="login-social">
                            <p className="text-muted">Or Sign Up Using</p>
                            <a href="/42">
                                <div className="images"
                                     style={{width: "50px",
                                         height: "50px",
                                         borderRadius: "1000px",
                                         backgroundColor: "black"}}>
                                    <img alt="login with 42" src="./images/42-icon.png" />
                                </div>
                            </a>
                            <a href="/google">
                                <div className="images"
                                     style={{width: "50px",
                                         height: "50px",
                                         borderRadius: "1000px",
                                         backgroundColor: "#DD4B39"}}>
                                    <img alt="login with google"  src="./images/google-icon.png" />
                                </div>
                            </a>
                        </div>
                        <div className="link">
                            <p className="text-muted">Already have an account?</p><a href="/login">Auth</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;