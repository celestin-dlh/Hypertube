import { useParams } from 'react-router-dom';

export default function Jwt() {
	let { token, username } = useParams();
	localStorage.setItem('token', token);
    localStorage.setItem('username', username);
	window.location.replace("http://localhost:3000/profile/" + username);
	return (null);
}