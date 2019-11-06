import bcrypt from 'bcryptjs';

import User from '../../models/user.model';

import { UserManager } from '../../services/UserManager';

const UpdatePassword = function(req, res) {
	const { username } = req.user;
	const { password, new_password } = req.body;
	if (password === "" || new_password === "")
		return res.status(400);

	let hash = bcrypt.hashSync(new_password, 10);

	User.findOne({ username }, 'password', function (err, user) {
        bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
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
            else {
                return res.status(403).send('Bad credentials')
            }
       });                
    });
}

export default UpdatePassword;