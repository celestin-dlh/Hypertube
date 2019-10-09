import bcrypt from 'bcryptjs';
import multer from 'multer';
import fs from 'fs';

/* Model */
import User from '../../models/user.model';
import uploadPic from '../../services/uploadPic';
import Joi from '@hapi/joi';

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
    	.regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    	.required(),
    firstname: Joi.string()
    	.alphanum()
        .min(3)
        .max(30)
        .required(),
    lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
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
}

const register = function(req, res) {
	let file;

	uploadPic(req, res)
		.then((res) => {
			file = res
			req.body.profilepicture = res.filename;
			console.log(schema.validate(req.body));
			const newUser = new User(req.body);
			let hash = bcrypt.hashSync(req.body.password, 10);
			newUser.password = hash;
			return newUser.save()
		})
		.then (() => {
			return res.end("Account created successfully");
		})
		.catch((err) => {
			if (file) {
				trydelete(file.path)
			}
			return res.status(400).json(err.errmsg);
		});
}

export default register;