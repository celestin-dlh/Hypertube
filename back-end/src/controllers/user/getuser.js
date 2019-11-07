/* Model */
import User from '../../models/user.model';

const GetUser = function(req, res) {
	let username = req.query.username;
	if (username === "" || !username || username === 'undefined') {
		username = req.user.username;
		User.findOne({ username: username },'firstname lastname email username profilepicture', 
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
		User.findOne({ username: username },'firstname lastname username profilepicture', 
			function (err, user) {
				if (user === null) {
					return res.status(401).send('Username not found')
				}
				else {
					return res.send(user)
				}
			}
		);
	}


}
export default GetUser;