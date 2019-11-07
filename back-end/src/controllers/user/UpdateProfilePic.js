import { UserManager } from '../../services/UserManager';
import uploadPic from '../../services/uploadPic';
import User from '../../models/user.model';
import fs from 'fs';

var path = require('path');
var appDir = path.dirname(require.main.filename);

const UpdateProfilePic = function(req, res) {
	const { username } = req.user;

	/* delete old pic DB and FILE */
	User.findOne({ username: username }, 'profilepicture', function(err, user) {
		if (user.profilepicture !== "") {	
			let filePath = appDir + '/public/profile_pic/' + user.profilepicture; 
			console.log('test')
			if (filePath)
				fs.unlinkSync(filePath);


			// fs.unlink(filePath, (err) => {
				// if (err) throw err;
				// console.log('File was deleted');
			// });
		}
	});



	uploadPic(req, res)
		.then((res) => {
			console.log(res0)
		}
	);




	// /* upload the new one and put it in the DB */
	// uploadPic(req, res)
	// 	.then((res) => {
	// 		User.findOneAndUpdate({ username: username }, {profilepicture: res}, function(err, user) {
	// 			console.log('test')
	// 			if (err) {
	// 				console.log('error 401')
	// 				return res.status(401).send(err);
	// 			}
	// 		})
	// 		let filePath = appDir + '/public/profile_pic/' + user.profilepicture; 
	// 		fs.unlinkSync(filePath);
	// 		console.log('200')
	// 		return res.status(200);
	// 	})
	// 	.catch((err) => {
	// 		console.log('400')
	// 		return res.status(400).send(err);
	// 	})
}

export default UpdateProfilePic;