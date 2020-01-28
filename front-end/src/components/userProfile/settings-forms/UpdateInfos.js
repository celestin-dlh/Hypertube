import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updateInfos } from '../../services/requestManager';
import { Update, Infos, firstname, lastname, email } from '../../services/textLang';

const UpdateInfos = function(props) {
	const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')

	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		email: '',
	});

	useEffect(() => {
		setInputs(props.data);
	}, [props]);

	const handleOnChangeInfos = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	};

	const handleSubmitInfos = (event) => {
		event.preventDefault();
		updateInfos(inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error)
			})
	};

	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>{Update[lang] + " " + Infos[lang]}</h3>
			<form className="settings-form" onSubmit={handleSubmitInfos}>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="firstname" onChange={handleOnChangeInfos} value={inputs.firstname} required="" minLength="3"/>
						<span className="label">{firstname[lang]}</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="lastname" onChange={handleOnChangeInfos} value={inputs.lastname} required="" minLength="3"/>
						<span className="label">{lastname[lang]}</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="email" onChange={handleOnChangeInfos} value={inputs.email} required="" minLength="3"/>
						<span className="label">{email[lang]}</span>
						<span className="border"></span>
					</label>
				</div>
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
                	{Update[lang] + " " + Infos[lang]}
                </Button>
			</form>
		</div>

	)
};

export default UpdateInfos;