import crypto from 'crypto';

/* Model */
import User from '../../models/user.model';

const forgetpassword = function(req, res) {

	User.findOne({email: req.body.email},'email', function (err, user) {
         	if (user) {
         		const token = crypto.randomBytes(20).toString('hex')
         		console.log(user)
         	}
         	else {
         		console.log('xDD')
         	}
	});
}

export default forgetpassword;