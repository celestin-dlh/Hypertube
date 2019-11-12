import axios from 'axios';

const _axios = axios.create();

_axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export function logout() {
	localStorage.clear();
	return window.location.href = '/';
}

export function getUser(username) {
	return _axios.get('http://localhost:5000/user/getuser?username=' + username)
}

export function updateInfos(infos) {
	return _axios.post('http://localhost:5000/user/updateinfos', infos)
}

export function updateLanguage(language) {
	return _axios.post('http://localhost:5000/user/updatelanguage', language)
}

export function updatePassword(password) {
	return _axios.post('http://localhost:5000/user/updatepassword', password)
}

export function updateProfilePic(profilePic) {
	return _axios.post('http://localhost:5000/user/updateprofilepic', profilePic)
}
