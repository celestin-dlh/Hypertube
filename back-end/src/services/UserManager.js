import User from '../models/user.model';

class UserManager {
	static updateFullName(username, firstname, lastname) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username: username }, { firstname: firstname, lastname: lastname })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}

	static updateEmail(username, email) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username: username }, { email: email })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}

	static updatePassword(username, password) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username: username }, { password: password })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}

	static updateProfilePic(username) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username: username }, { password: password })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		})
	}
}

export { UserManager }