/* Model */
import User from '../../models/user.model';

const getuser = function(req, res) {
	let username = req.query.username;
	if (username === "" || !username || username === 'undefined') {
		username = req.user.username;
		User.findOne({ username: username },'firstname lastname email username profilepicture', 
			function (err, user) {
				console.log(user)
				return res.send(user)
			}
		);		
	}
	else {
		User.findOne({ username: username },'firstname lastname username profilepicture', 
			function (err, user) {
				console.log(user)
				return res.send(user)
			}
		);
	}


}
export default getuser;