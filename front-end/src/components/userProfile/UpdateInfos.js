import React,{ useState, useEffect } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { getUser, updateInfos, updateProfilePic } from '../services/requestManager';


const ProfilePicture = function(props) {
	const [picture, setPicture] = useState(null);

	const handleOnChangeFile = (event) => {
		const file = event.target.files[0];
		setPicture(file)

	}

	const handleSubmitPicture = (event) => {
		let formData = new FormData();
			formData.append('avatar', picture);
		updateProfilePic(formData)
	}

	return (
		<div id="profilepicture-form">
			<form onSubmit={handleSubmitPicture}>
				<label htmlFor="file-input">
					<div className="pictureContainer">
						<img 
							style={{backgroundColor: "black"}}
							src={props.profilepicture !== '' ? 'http://localhost:5000/profile_pic/de604aa223dbd200b9988372fb14ca9f.png' : './images/default_avatar-white.png'}
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
					onChange={handleOnChangeFile}
					className="imageUpload"
				/>		
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
					Update profile pic
				</Button>			
			</form>
		</div>
	)
}








function UpdateInfos() {
	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		email: '',
		profilepicture: '',
	});


	useEffect(() => {
		getUser('')
		.then((res) => {
			setInputs(res.data)
		})
	}, []);

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
				console.log(error.response.data)
			})
	}



	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update your data</h3>
			<img src="http://localhost:5000/profile_pic/4ddabd127bcfeb23dd5088a81a612b5b" alt="test"/>




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