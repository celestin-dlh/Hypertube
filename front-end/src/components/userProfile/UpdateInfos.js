import React,{ useState, useEffect } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { getUser, updateInfos, updateProfilePic } from '../services/requestManager';

/* Style */
import '../style/Settings.css';
import '../style/Input.css';

function UpdateInfos() {
	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		email: '',
		profilepicture: '',
		username: ''
	});

	// const [picture, setPicture] = useState(null);

	useEffect(() => {
		getUser('')
		.then((res) => {
			setInputs(res.data)
		})
	}, []);

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
	};

	const handleOnFileChange = (event) => {
		const file = event.target.files[0];
		console.log(file)
		if (file) {
			let formData = new FormData();
				formData.append('avatar', file);
			updateProfilePic(formData)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs)
		updateInfos(inputs)
	}

	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update your data</h3>
			<img src="http://localhost:5000/profile_pic/4ddabd127bcfeb23dd5088a81a612b5b" alt="test"/>
			<div>
				<label htmlFor="file-input">
					<div className="pictureContainer">
						<img 
							style={{backgroundColor: "black"}}
							src={inputs.profilepicture !== '' ? 'http://localhost:5000/profile_pic/de604aa223dbd200b9988372fb14ca9f.png' : './images/default_avatar-white.png'}
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
			<form className="settings-form" onSubmit={handleSubmit}>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="firstname" onChange={handleOnChange} value={inputs.firstname} />
						<span className="label">First Name</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="text" placeholder="&nbsp;" name="lastname" onChange={handleOnChange} value={inputs.lastname} />
						<span className="label">Last Name</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input" type="email" placeholder="&nbsp;" name="email" onChange={handleOnChange} value={inputs.email} />
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