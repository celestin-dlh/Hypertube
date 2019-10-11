const userData = (username = '', action) => {
	switch(action.type) {
		case 'CREATE':
			return action.payload;
		default:
			return '';
	}
}

export default userData