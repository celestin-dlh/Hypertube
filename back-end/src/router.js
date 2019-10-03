import express from 'express';
import register from './controllers/auth/register';

class Router {

	static auth() {
		let router = express.Router();
		console.log('auth routes..');
		router.post('/register', register);
		return router;
	}

	static getRouter() {
		console.log('initialize router..');
		let router = express.Router();

		router.use('/auth/', Router.auth());

        console.log('end routing operations..');
		return router;
	}
}

export default Router.getRouter;