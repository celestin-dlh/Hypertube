import { useParams } from 'react-router-dom';

export default function Jwt() {
	let { token } = useParams();
	localStorage.setItem('token', token);
	window.location.replace( process.env.REACT_APP_URL_FRONT+ "/profile");
	return (null);
}