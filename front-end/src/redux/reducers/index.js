import { combineReducers } from 'redux';
import isLogged from './isLogged';
import userData from './userData';

const allReducers = combineReducers({
	isLogged: isLogged,
	userData: userData,
})

export default allReducers;