const isLogged = (logged = false, action) => {
	switch(action.type) {
		case 'LOG':
			return !logged;
		default:
			return logged;
	}
};

export default isLogged