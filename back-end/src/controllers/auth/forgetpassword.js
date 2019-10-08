import crypto from 'crypto';
import nodemailer from 'nodemailer';

/* Model */
import User from '../../models/user.model';

const forgetpassword = function(req, res) {
   if (req.body.email === "")
      res.sensStatus(400)
   const token = crypto.randomBytes(20).toString('hex')
	User.findOneAndUpdate({email: req.body.email}, { reset_password_token: token}, function (err, user) {
         	if (user) {
               const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                     user: 'hypertube4242@gmail.com',
                     pass: 'Hypertube-42!'
                  }
               });

               const mailOptions = {
                  from: 'hypertube4242@gmail.com',
                  to: req.body.email,
                  subject: 'Test mail',
                  text: 'Click on this link http://localhost:3000/resetpassword/' + token,
               };

               transporter.sendMail(mailOptions, function(err, response) {
                  if (err)
                     console.log(err)
                  else
                     console.log(response)
               });
         	}
         	else {
         		console.log('not email match')
         	}
	});
}

export default forgetpassword;