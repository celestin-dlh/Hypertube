export const log = () => {
	return {
		type: 'LOG',
	}
};

export const createUser = (payload) => ({
	type: 'CREATE',
	payload,
});