import axios from 'axios';

const _axios = axios.create();

_axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export function logout() {
	localStorage.clear();
	return window.location.href = '/';
}

export function getUser(username) {
	return _axios.get( process.env.REACT_APP_URL_BACK + '/user/getuser?username=' + username)
}

/* Settings part */

export function updateInfos(infos) {
	return _axios.post(process.env.REACT_APP_URL_BACK +  '/user/updateinfos', infos)
}

export function updateLanguage(language) {
	return _axios.post(process.env.REACT_APP_URL_BACK + '/user/updatelanguage', language)
}

export function updatePassword(password) {
	return _axios.post(process.env.REACT_APP_URL_BACK + '/user/updatepassword', password)
}

export function updateProfilePic(profilePic) {
	return _axios.post(process.env.REACT_APP_URL_BACK + '/user/updateprofilepic', profilePic)
}

/* Movies part */

export function searchMoviesService(search, lang, sortBy, page) {
	return _axios.get(process.env.REACT_APP_URL_BACK + `/movies/search/${search}/${lang}/${sortBy}/${page}`)
}

export function getMoviesInfos(id, lang) {
	return _axios.get(process.env.REACT_APP_URL_BACK + `/movies/infos/${id}/${lang}`)
}

export function getTorrents(imdb_id) {
	return _axios.get(process.env.REACT_APP_URL_BACK + `/movies/torrents/${imdb_id}`)
}

export function getActors(actorId, lang) {
	return _axios.get(process.env.REACT_APP_URL_BACK + `/movies/actor/${actorId}/${lang}`)
}

export function getPopularMovies() {
	return _axios.get(process.env.REACT_APP_URL_BACK + `/movies/popular`)
}

export function getLastSeen() {
	return _axios.get(`http://localhost:5000/movies/getLastSeen`)
}

export function getMoviesGenre(genreId, lang) {
    return _axios.get(process.env.REACT_APP_URL_BACK + `/movies/genre/${genreId}/${lang}`)
}

export function setMovieSeen(imdb_id) {
	return _axios.get(`http://localhost:5000/movies/setMovieSeen/${imdb_id}`)
}

/* Comment part */

export function postComment(comment) {
	return _axios.post(process.env.REACT_APP_URL_BACK + '/movies/postcomment', comment)
}

export function getComments(imdb_id) {
	return _axios.get(process.env.REACT_APP_URL_BACK + '/movies//getcomments/' + imdb_id)
}