import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updateLanguage } from '../../services/requestManager';

const UpdateLanguage = function(props) {

	const [language, setLanguage] = useState({
		language: '',
	})

	useEffect(() => {
		setLanguage(props.language)
	}, [props])

	const handleOnChange = (event) => {
		setLanguage({language: event.target.value})
	}

	const handleSubmit = (event) => {
		updateLanguage(language)
			.then((res) =>{
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}


	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>Update Language</h3>
			<form className="settings-form" onSubmit={handleSubmit}>
				<input type="radio" id="en" name="language" value="en" onChange={handleOnChange} />
					<label htmlFor="en">English</label>

				<input type="radio" id="fr" name="language" value="fr"  onChange={handleOnChange} />
					<label htmlFor="fr">French</label>

				<input type="radio" id="es" name="language" value="es"  onChange={handleOnChange} />
					<label htmlFor="es">Espagnol</label>
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
                	Update language
                </Button>  
			</form>
		</div>

	)
}

export default UpdateLanguage;