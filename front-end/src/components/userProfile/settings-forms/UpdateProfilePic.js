import React,{ useState } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updateProfilePic } from '../../services/requestManager';


const UpdateProfilePic = function(props) {
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
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update your data</h3>
			<form className="settings-form" onSubmit={handleSubmitPicture}>
				<label htmlFor="file-input">
					<div className="pictureContainer">
						<img 
							style={{backgroundColor: "black"}}
							src={picture ? URL.createObjectURL(picture) : 'http://localhost:5000/profile_pic/' + props.profilepicture }
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

export default UpdateProfilePic;