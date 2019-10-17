const initialState = {
	isLogged: false,
	data: null
}

const userData = (user = initialState, action) => {
	console.log(user, action);
	switch(action.type) {
		case 'CREATE':
			return { isLogged: true, data: action.payload };
		default:
			return { ...user };
	}
}

export default userData