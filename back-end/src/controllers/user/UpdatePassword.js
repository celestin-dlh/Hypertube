import bcrypt from 'bcryptjs';

import User from '../../models/user.model';

import { UserManager } from '../../services/UserManager';

const UpdatePassword = function(req, res) {
	const { username } = req.user;
	const { password, new_password } = req.body;

	if (password === "" || new_password === "")
		return res.status(400);


	let regexPassword = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
	let verif = regexPassword.test(new_password);

    if (verif){
        let hash = bcrypt.hashSync(new_password, 10);
        User.findOne({ username }, 'password', function (err, user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if (result) {
                    UserManager.updatePassword(username, hash)
                        .then(() => {
                            console.log('Password updated');
                            res.status(200).send('Password updated')
                        })
                        .catch(() => {
                            console.log('error');
                            res.status(401).send('error')
                        })
                }
                else {
                    console.log('Bad credentials');
                    return res.status(403).send('Bad credentials')
                }
            });
        });
	}
	else {
        console.log('Wrong password format');
        return res.status(401).send('Wrong password format')
	}
};

export default UpdatePassword;