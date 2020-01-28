import React,{ useState } from 'react';
import useForm from 'react-hook-form';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Services */
import { updatePassword } from '../../services/requestManager';
import { Update, password, NewPassword } from '../../services/textLang';

const UpdatePassword = function(props) {
	const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

	const [inputs, setInputs] = useState({
		password: '',
		new_password: ''
	});

	const handleOnChange = (event) => {
		const {name, value} = event.target;
		setInputs({ ...inputs, [name]: value});
    };

	const onSubmit = () => {
		updatePassword(inputs)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	};

    const { register, errors, handleSubmit} = useForm();

	return (
		<div className="menu-settings" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h3>{Update[lang] + " " + password[lang]}</h3>
			<form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="input-form">
					<label htmlFor="inp" className="inp">
						<input className="input"
							   type="password"
							   placeholder="&nbsp;"
							   name="password"
							   onChange={handleOnChange}
							   value={inputs.password}
							   autoComplete="password"
						/>
						<span className="label">{password[lang]}</span>
						<span className="border"></span>
					</label>
				</div>
				<div className="input-form" style={{color: "white"}}>
					<label htmlFor="inp" className="inp">
						<input className="input"
							   type="password"
							   placeholder="&nbsp;"
							   name="new_password"
							   onChange={handleOnChange}
							   value={inputs.new_password}
							   autoComplete="password"
							   ref={register({ required: true, maxLength: 30, minLength: 8,
                            							pattern: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/})}
						/>
                        {errors.new_password && errors.new_password.type === "required" && 'Password is required'}
                        {errors.new_password && errors.new_password.type === "maxLength" && 'Password is too long'}
                        {errors.new_password && errors.new_password.type === "minLength" && 'Password is too short'}
                        {errors.new_password && errors.new_password.type === "pattern" && 'Password must contain at least one lowercase, upercase and number'}
						<span className="label">{NewPassword[lang]}</span>
						<span className="border"></span>
					</label>
				</div>
				<Button variant="primary" size="lg" block type="submit" className="submit-button">
					{Update[lang] + " " + password[lang]}
                </Button>   
			</form>
		</div>
	)
}

export default UpdatePassword;