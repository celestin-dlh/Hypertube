import { useParams } from 'react-router-dom';

export default function Jwt(props) {
	let { token } = useParams();
	localStorage.setItem('token', token);
	window.location.replace("http://localhost:3000/");
	return (null);
}