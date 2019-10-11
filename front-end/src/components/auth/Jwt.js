import React, { usestate, useEffect } from 'react';

export default function Jwt(props) {
	let token = props.match.params.token;
	localStorage.setItem('token', token)
	window.location.replace("http://localhost:3000/");
}