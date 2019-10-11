export const log = () => {
	return {
		type: 'LOG',
	}
}

export const username = (username) => {
	return {
		type: 'CREATE',
		payload: username,
	}
}