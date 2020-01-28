import crypto from 'crypto';
import nodemailer from 'nodemailer';

/* Model */
import User from '../../../models/user.model';

const forgetpassword = function(req, res) {
   if (req.body.email === "")
      return res.sendStatus(400);

   const token = crypto.randomBytes(20).toString('hex');
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
            if (!err)
               return res.send('Email send successfully');
            else
               return res.status(400).send('Error while sending Email please retry');
         });
      }
      else {
         console.log('Unknown Email')
         res.status(401).send('Email adress unknown');
      }
   });     
};

export default forgetpassword;