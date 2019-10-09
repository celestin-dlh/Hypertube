import { UserManager } from '../../services/UserManager';
import uploadPic from '../../services/uploadPic';
import User from '../../models/user.model';
import fs from 'fs';

var path = require('path');
var appDir = path.dirname(require.main.filename);

const UpdateProfilePic = function(req, res) {
	const { username } = req.user;
	
	
	/* remove the old picture */
	User.findOne({ username: username }, 'profilepicture', function(err, user) {
		if (user.profilepicture !== "") {
			let filePath = appDir + '/public/profile_pic/' + user.profilepicture; 
			fs.unlinkSync(filePath);
		}
	});

	/* upload the new one and put it in the DB */
	uploadPic(req, res)
		.then((res) => {
			console.log('thierry')
			User.findOneAndUpdate({ username: username }, {profilepicture: res}, function(err, user) {
				if (err) {
					console.log('error 401')
					return res.status(401).send(err);
				}
			})
			console.log('200')
			return res.status(200);
		})
		.catch((err) => {
			console.log('400')
			return res.status(400).send(err);
		})
}

export default UpdateProfilePic;