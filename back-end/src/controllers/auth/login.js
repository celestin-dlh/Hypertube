import bcrypt from 'bcryptjs';
/* Model */
import User from '../../models/user.model';

const login = function(req, res) {
	const username = req.body.username
	const password = req.body.password

	User.findOne({ username: username },'password', function (err, user) {
		bcrypt.compare(password, user.password, function(err, res) {
         	if (res) {
         		return console.log('logged')
         	}
         	else {
         		return console.log('xDD')
         	}
        });                
	});
}

export default login;