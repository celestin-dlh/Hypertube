import bcrypt from 'bcryptjs';
import fs from 'fs';

/* Model */
import User from '../../models/user.model';
import uploadPic from '../../services/uploadPic';
import { UserManager } from '../../services/UserManager';
import Joi from '@hapi/joi';

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required(),
    email: Joi.string()
    	.regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        .min(6)
        .max(320)
    	.required(),
    firstname: Joi.string()
    	.alphanum()
        .min(1)
        .max(30)
        .required(),
    lastname: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required(),
    password: Joi.string()
        .regex(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)
        .min(8)
        .max(30)
    	.required()
});

const trydelete = (file_path) => {
	try {
		if (file_path && fs.existsSync(file_path))
			fs.unlinkSync(file_path);
	}
	catch (err) {
		console.log(err);
	}
};

const register = function(req, res) {
	let file;

	uploadPic(req, res)
		.then((res) => {
			file = res;
			const { error } = schema.validate(req.body);
			if (error) throw ('Inputs does not respect the schema');
			req.body.profilepicture = res.filename;
			return UserManager.usernameExists(req.body.username)
		})
		.then((exist_username) => {
			if (exist_username) throw ('Username taken');
			return UserManager.emailExists(req.body.email)
		}) 
		.then((exist_email) => {
			if (exist_email) throw ('Email taken');
			return (req.body)
		})
		.then((data) => {
			const newUser = new User(data);
			let hash = bcrypt.hashSync(data.password, 10);
			newUser.password = hash;
			newUser.save();
			return res.json('success')
		})
		.catch((err) => {

			console.log(err);

			if (file) {
				trydelete(file.path)
			}
			return res.json(err);
		});
};

export default register;