import React,{ useState } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updatePassword } from '../services/requestManager';

function UpdatePassword() {

	const [inputs, setInputs] = useState({
		password: '',
		new_password: ''
	})

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
    };
    
	const handleSubmit = (event) => {
		event.preventDefault();
		updatePassword(inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update your password</h3>
			<form className="settings-form" onSubmit={handleSubmit}>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="password" placeholder="&nbsp;" name="password" onChange={handleOnChange} value={inputs.password} />
						<span className="label">Password</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="password" placeholder="&nbsp;" name="new_password" onChange={handleOnChange} value={inputs.new_password} />
						<span className="label">New Password</span>
						<span className="border"></span>
					</label>
				</div>
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
                	Update password
                </Button>   
			</form>
		</div>
	)
}

export default UpdatePassword;