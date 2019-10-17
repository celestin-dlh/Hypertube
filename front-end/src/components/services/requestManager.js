import axios from 'axios';

const _axios = axios.create();

_axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


export function getProfile(username) {
	return _axios.get('http://localhost:5000/user/getuser?username=' + username)
}

export function updateFullName(fullname) {
	return _axios.post('http://localhost:5000/user/updatefullname', fullname)
}

export function updateEmail(email) {
	return _axios.post('http://localhost:5000/user/updateemail', email)
}

export function updatePassword(password) {
	return _axios.post('http://localhost:5000/user/updatepassword', password)
}

export function updateProfilePic(profilePic) {
	return _axios.post('http://localhost:5000/user/updateprofilepic', profilePic)
}

