import React, { useState, useEffect } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updateLanguage } from '../../services/requestManager';
import { Update, Lang } from '../../services/textLang';

const UpdateLanguage = function(props) {
	const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');
	const [language, setLanguage] = useState({
		language: lang,
	});

	useEffect(() => {
		setLanguage(props.language)
	}, [props]);

	const handleOnChange = (event) => {
		setLanguage({language: event.target.value})
	};

	const handleSubmit = () => {

        language === undefined ? localStorage.setItem('lang', lang) : localStorage.setItem('lang', language.language);
		updateLanguage(language)
	};


	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>{Update[lang] + " " + Lang[lang]}</h3>
			<form className="settings-form" onSubmit={handleSubmit}>
				<input type="radio" id="en" name="language" value="en" onChange={handleOnChange} required/>
					<label className="label-language" htmlFor="en">English</label>

				<input type="radio" id="fr" name="language" value="fr"  onChange={handleOnChange}/>
					<label className="label-language" htmlFor="fr">Francais</label>

				<input type="radio" id="es" name="language" value="es"  onChange={handleOnChange}/>
					<label className="label-language" htmlFor="es">Espagnol</label>
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
					{Update[lang] + " " + Lang[lang]}
                </Button>  
			</form>
		</div>
	)
};

export default UpdateLanguage;