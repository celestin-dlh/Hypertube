import User from '../models/user.model';

class UserManager {
	static usernameExists(username) {
		return new Promise((resolve, reject) => {
			User.findOne({ username }, 'username')
			.then((_doc) => {
				const res = _doc ? true : false;
				resolve(res);
			})
			.catch(reject)
		}).catch(error => {console.log(error)});
	}

	static emailExists(email) {
		return new Promise((resolve, reject) => {
			User.findOne({ email }, 'email')
			.then((_doc) => {
				const res = _doc ? true : false;
				resolve(res);
			})
			.catch(reject)
		}).catch(error => {console.log(error)});
	}

	static updateInfos(username, firstname, lastname, email) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { firstname, lastname, email })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		}).catch(error => {console.log(error)});
	}

	static updateLanguage(username, lang) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { lang })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		}).catch(error => {console.log(error)});
	}

	static updatePassword(username, password) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { password })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		}).catch(error => {console.log(error)});
	}

	static updateProfilePic(username) {
		return new Promise((resolve, reject) => {
		  User.updateOne({ username }, { password })
		  .then(() => {
		    resolve();
		  })
		  .catch(reject);
		}).catch(error => {console.log(error)});
	}

	static getMoviesSeen(username) {
		return new Promise((resolve, reject) => {
			User.findOne({ username }, 'moviesWatched')
			.then((res) => {
			  resolve(res.moviesWatched);
			})
			.catch(reject);
		  }).catch(error => {console.log(error)});
	}

	static setMovieSeen(imdb_id, username) {
		return new Promise((resolve, reject) => {
			User.updateOne({ username }, { $addToSet: { moviesWatched: imdb_id }} )
			.then(() => {
			  resolve();
			})
			  .catch(reject);
		  }).catch(error => {console.log(error)});
	}
}

export { UserManager }