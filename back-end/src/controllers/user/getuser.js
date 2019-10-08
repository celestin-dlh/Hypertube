/* Model */
import User from '../../models/user.model';

const getuser = function(req, res) {
	const { username } = req.user
	User.findOne({ username: username },'firstname lastname username profilepicture', 
		function (err, user) {
			console.log(user)
			res.send(user)
		}
	);

}
export default getuser;