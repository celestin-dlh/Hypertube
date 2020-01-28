import bcrypt from 'bcryptjs';

/* Model */
import User from '../../../models/user.model';

const resetpassword = function(req, res) {
   const password = req.body.password;
   const token = req.body.token;
    let regexPassword = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    let verif = regexPassword.test(password);

   if (password === "")
      return res.sendStatus(400)

   if (verif) {
       let hash = bcrypt.hashSync(req.body.password, 10);
       User.findOneAndUpdate({reset_password_token: token}, { reset_password_token: '', password: hash}, function (err, user) {
            if (user) {
                return res.send('success')
            }
            else {
                return res.status(403).send('Token dont match')
            }
       });
   }
   else return res.status(403).send('Wrong password format')
};

export default resetpassword;