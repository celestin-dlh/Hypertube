import bcrypt from 'bcryptjs';

/* Model */
import User from '../../../models/user.model';

const resetpassword = function(req) {
   const password = req.body.password;
   const token = req.body.token;

   if (password === "")
      return console.log('password empty');
   let hash = bcrypt.hashSync(req.body.password, 10);
	User.findOneAndUpdate({reset_password_token: token}, { reset_password_token: '', password: hash}, function (err, user) {
   	if (user) {
         console.log('password modified')

   	}
   	else {
   		console.log('token dont match')
   	}
	});
};

export default resetpassword;