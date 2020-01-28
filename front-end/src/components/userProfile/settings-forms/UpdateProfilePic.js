import React, { useState, useEffect } from 'react';

import useForm from 'react-hook-form';
import { withRouter } from "react-router";

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updateProfilePic } from '../../services/requestManager';
import { Update, Picture } from '../../services/textLang';

const UpdateProfilePic = function(props) {
	const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')

	const [picture, setPicture] = useState(null);
	const [profilepicture, setProfilePicture] = useState('');
	const [url_profilepicture, setUrlProfilePicture] = useState('');
	const { register, errors, handleSubmit} = useForm();

	useEffect(() => {
		if (props.profilepicture !== "") {
			setProfilePicture(process.env.REACT_APP_URL_BACK + '/profile_pic/' + props.profilepicture)
		} else {
			setProfilePicture('')
		}
		setUrlProfilePicture(props.url_profilepicture)
	}, [props.url_profilepicture, props.profilepicture])

	const handleOnChangeFile = (event) => {
		const file = event.target.files[0];
		setPicture(file)
	};

	const handleSubmitPicture = () => {
		let formData = new FormData();
			formData.append('avatar', picture);
		updateProfilePic(formData)
			.then(() => {
				props.history.push('/profile');
			})
	};

	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center", color: "white"}}>
			<h3>{Update[lang] + " " + Picture[lang]}</h3>
			<form className="settings-form" onSubmit={handleSubmit(handleSubmitPicture)}>
				<label htmlFor="file-input"className="labelImage">
					<div className="pictureContainer">
						<img 
							style={{backgroundColor: "black"}}
							src={picture ? 
								URL.createObjectURL(picture) : (url_profilepicture 
								? url_profilepicture : profilepicture) }
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
					ref={register({ required: true,
						pattern: /(.jpeg|.jpg|.png)$/})}
				/>
				{errors.file && errors.file.type === "required" && 'Avatar is required'}
				{errors.file && errors.file.type === "pattern" && 'Avatar must be .jpeg .jpg or .png'}
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
					{Update[lang] + " " + Picture[lang]}
				</Button>			
			</form>
		</div>
	)		
}

export default withRouter(UpdateProfilePic);