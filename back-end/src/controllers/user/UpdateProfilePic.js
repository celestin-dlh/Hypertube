import { UserManager } from '../../services/UserManager';
import uploadPic from '../../services/uploadPic';
import User from '../../models/user.model';
import fs from 'fs';

var path = require('path');
var appDir = path.dirname(require.main.filename);


const getNameOldProfilePicture = function(username) {
	return new Promise((resolve, reject) => {
		User.findOne({ username }, 'profilepicture', function(err, user) {
			if (user) {
				resolve(user.profilepicture)
			} else {
				reject('No profile picture found');
			}
		})
	})
}

const asyncCall = async function (username) {
	console.log('Calling')
	let filename = await getNameOldProfilePicture(username);
	return (appDir + '/public/profile_pic/' + filename)
}

const UpdateProfilePic = function(req, res) {
	const { username } = req.user;

	  asyncCall(username)
	  /* delete old picture */
	  	.then((filePath) => {
			fs.unlink(filePath, (err) => {
				if (err) throw err;
				console.log('Old profile picture was deleted');
			});
		})
		/* upload new picture */
		.then(() => {
			console.log('come on')
			return uploadPic(req, res)
		})
		/* change DB profile picture */
		.then((res) => {
			User.findOneAndUpdate({ username: username }, {profilepicture: res.filename}, function(err, user) {
				console.log(user)
			})
			return res.status(200).send('Profile picture updated')
		})
		.catch(function (err) {
			console.log("Promise Rejected: " + err);
		})
}

export default UpdateProfilePic;