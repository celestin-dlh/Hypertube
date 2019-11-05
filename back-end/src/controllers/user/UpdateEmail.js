import { UserManager } from '../../services/UserManager';

const UpdateEmail = function(req, res) {
	const { username } = req.user;
	const email = req.body.email;
	if (email === "")
		res.status(400)

	UserManager.updateEmail(username, email)
		.then(() => {
			console.log('Email Updated')
			res.status(200).end()
		})
		.catch(() => {
			console.log('error somewhere')
			res.status(401).end()
		})
}

export default UpdateEmail;