import User from '../models/user.model';

/*  j ai retiré les champs email: email => email  si ca beug c est ca !*/

class UserManager {
	static usernameExists(username) {
		return new Promise((resolve, reject) => {
			User.findOne({ username }, 'username')
			.then((_doc) => {
				const res = _doc ? true : false;
				resolve(res);
			})
			.catch(reject)
		})
	}

	static emailExists(email) {
		return new Promise((resolve, reject) => {
			User.findOne({ email }, 'email')
			.then((_doc) => {
				const res = _doc ? true : false;
				resolve(res);
			})
			.catch(reject)
		})
	}

	static updateInfos(username, firstname, lastname, email) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { firstname, lastname, email })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}

	static updatePassword(username, password) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { password })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}

	static updateProfilePic(username) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { password })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}
}

export { UserManager }