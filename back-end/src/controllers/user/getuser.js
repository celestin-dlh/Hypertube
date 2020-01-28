/* Model */
import User from '../../models/user.model';

const GetUser = function(req, res) {
	let username = req.query.username;
	if (username === "" || !username || username === 'undefined') {
		username = req.user.username;
		User.findOne({ username: username },'firstname lastname email username profilepicture language url_profilepicture', 
			function (err, user) {
				if (user) {
					return res.send(user)
				}
				else {
					return res.status(404)
				}
			}
		);		
	}
	else {
		User.findOne({ username: username },'firstname lastname username profilepicture url_profilepicture', 
			function (err, user) {
				if (user) {
					return res.send(user)
				}
				else {
					return res.status(400).send('Username not found')
				}
			}
		);
	}
}

export default GetUser;