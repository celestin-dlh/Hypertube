import { UserManager } from '../../services/UserManager';

const UpdateInfos = function(req, res) {
	const { username } = req.user;
	const {firstname, lastname, email} = req.body;
	if (firstname === "" || lastname === "" || email === "")
		res.status(400);

        if (firstname.length < 3 || lastname.length < 3 || email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            console.log('too short')
        }

	UserManager.updateInfos(username, firstname, lastname, email)
		.then(() => {
			console.log('infos updated');
			res.status(200).end()
		})
		.catch(() => {
			console.log('error somewhere');
			res.status(401).end()
		})
};

export default UpdateInfos;