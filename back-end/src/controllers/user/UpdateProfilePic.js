import uploadPic from '../../services/uploadPic';
import User from '../../models/user.model';
import fs from 'fs';

const path = require('path');
const appDir = path.dirname(require.main.filename);
let currentFilename;

const getNameOldProfilePicture = function(username) {
	return new Promise((resolve, reject) => {
		User.findOne({ username }, 'profilepicture', function(err, user) {
			if (!user.profilepicture || user.profilepicture === "") {
				reject('No profile picture found');
			} else {
				resolve(user.profilepicture)
			}
		})
	})
}

const UpdateProfilePic = function(req, res) {
	const { username } = req.user;

	uploadPic(req, res)
		.then((res) => {
			currentFilename = res.filename;
			return (getNameOldProfilePicture(username))
		})
		.then((filename) => {
			const filePath = appDir + '/public/profile_pic/' + filename
			fs.unlink(filePath, (err) => {
				if (err) throw err;
				console.log('Old profile picture was deleted');
			});
		})
		.then(() => {
			User.findOneAndUpdate({ username: username }, {profilepicture: currentFilename}, function(err) {
				if (err) console.log(err)
			})
			console.log('Picture uploaded')
		})
		.catch((err) => {
			console.log(err)
		})
}

export default UpdateProfilePic;