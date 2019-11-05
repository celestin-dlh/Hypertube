/* Model */
import User from '../../models/user.model';

const getuser = function(req, res) {
	const username = req.body.username;
	console.log(username);
	User.findOne({ username: username },'firstname lastname username profilepicture profilePictureGoogleFt',
		function (err, user) {
			console.log(user);
			res.send(user)
		}
	);

};

export default getuser;