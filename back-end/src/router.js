import express from 'express';

import session from './middlewares/session';

/* auth */
import register from './controllers/auth/register';
import login from './controllers/auth/login';
import forgetpassword from './controllers/auth/forgetpassword';
import resetpassword from './controllers/auth/resetpassword';


import getuser from './controllers/user/getuser';




/* user */

class Router {

	static auth() {
		let router = express.Router();
		console.log('auth routes..');
		router.post('/register', register);
		router.post('/login', login);
		router.post('/forgetpassword', forgetpassword);
		router.post('/resetpassword', resetpassword);

		return router;
	}

	static user() {
		let router = express.Router();

		console.log('user routes..');
		router.use('/', session)
		router.get('/getuser', getuser);
		//router.post('/uploadpic', uploadPic);
		return router;
	}

	static getRouter() {
		console.log('initialize router..');
		let router = express.Router();

		router.use('/auth/', Router.auth());
		router.use('/user/', Router.user());

        console.log('end routing operations..');
		return router;
	}
}

export default Router.getRouter;