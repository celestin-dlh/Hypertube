import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updateInfos } from '../../services/requestManager';

const UpdateInfos = function(props) {

	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		email: '',
	});

	useEffect(() => {
		setInputs(props.data)
	}, [props])

	const handleOnChangeInfos = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	};

	const handleSubmitInfos = (event) => {
		updateInfos(inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error.response.data)
			})
	}

	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<form className="settings-form" onSubmit={handleSubmitInfos}>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="firstname" onChange={handleOnChangeInfos} value={inputs.firstname} />
						<span className="label">First Name</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="lastname" onChange={handleOnChangeInfos} value={inputs.lastname} />
						<span className="label">Last Name</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="email" onChange={handleOnChangeInfos} value={inputs.email} />
						<span className="label">Email</span>
						<span className="border"></span>
					</label>
				</div>
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
                	Update informations
                </Button>
			</form>
		</div>

	)
}

export default UpdateInfos;