import { UserManager } from '../../services/UserManager';

const UpdateFullName = function(req, res) {
	const { username } = req.user;
	const {firstname, lastname} = req.body;
	if (firstname === "" || lastname === "")
		res.status(400)

	UserManager.updateFullName(username, firstname, lastname)
		.then(() => {
			console.log('Fullname updated')
			res.status(200).end()
		})
		.catch(() => {
			console.log('error somewhere')
			res.status(401).end()
		})
}

export default UpdateFullName;