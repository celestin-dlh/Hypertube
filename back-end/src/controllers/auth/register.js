import bcrypt from 'bcryptjs';
import multer from 'multer';

/* Model */
import User from '../../models/user.model';
import uploadPic from '../../services/uploadPic';

const register = function(req, res) {

	uploadPic(req, res)
		.then((res) => {
			req.body.profilepicture = res;
			const newUser = new User(req.body);
			let hash = bcrypt.hashSync(req.body.password, 10);
			newUser.password = hash;

			return newUser.save()
		})
		.then (() => {
			res.end("Account created successfully");
		})
		.catch((err) => {
			return res.status(400).send(err);
		})
}

export default register;