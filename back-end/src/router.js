import express from 'express';


/* auth */
import register from './controllers/auth/register';
import login from './controllers/auth/login';
import passport from './controllers/auth/passport';




/* user */

class Router {

	static auth() {
		let router = express.Router();
		console.log('auth routes..');
		router.post('/register', register);
		router.post('/login', login);


        router.get('/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        }));
        router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
            res.redirect('/user');
        });



        router.get('/42', passport.authenticate('42'));
        router.get('/42/redirect', passport.authenticate('42'), (req, res) => {
            res.redirect('/user');
        });
		return router;
	}

	static user() {
		let router = express.Router();
		console.log('user routes..');
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