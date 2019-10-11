import bcrypt from 'bcryptjs';

import { UserManager } from '../../services/UserManager';

const UpdateFullName = function(req, res) {
	const { username } = req.user;
	const { password, password_confirm } = req.body;
	if (password === "" || password_confirm === "")
		return res.status(400);
	else if (password !== password_confirm)
		return res.status(402);

	let hash = bcrypt.hashSync(password, 10);
	console.log(hash)

	UserManager.updatePassword(username, hash)
		.then(() => {
			console.log('Password updated')
			res.status(200).end()
		})
		.catch(() => {
			console.log('error somewhere')
			res.status(401).end()
		})
}

export default UpdateFullName;