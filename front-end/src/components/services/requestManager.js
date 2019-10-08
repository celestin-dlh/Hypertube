import axios from 'axios';

let token;
const getToken = () => {
	if (!token)
		token = localStorage.getItem('token') 
	return (token)
}

const _axios = axios.create();

_axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


 const getProfile = (username) => {
	return _axios.get('http://localhost:5000/user/getuser', 'zeeratul')
}
export default getProfile