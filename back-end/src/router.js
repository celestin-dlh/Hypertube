import express from 'express';
import passport from 'passport';

import session from './middlewares/session';

/* auth */
import register from './controllers/auth/register';
import login from './controllers/auth/login';
import forgetpassword from './controllers/auth/forgot/forgetpassword';
import resetpassword from './controllers/auth/forgot/resetpassword';


import getuser from './controllers/user/getuser';

import updateFullName from './controllers/user/UpdateFullName';
import updateEmail from './controllers/user/updateEmail';
import updatePassword from './controllers/user/updatePassword';
import updateProfilePic from './controllers/user/updateProfilePic';



/* user */

class Router {

	static auth() {
		let router = express.Router();
		console.log('auth routes..');
		router.post('/register', register);		
		router.post('/login', login);
		router.post('/forgetpassword', forgetpassword);
		router.post('/resetpassword', resetpassword);

		// google
        router.get('/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        }));
        router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
            res.redirect('/user');
        });

        // 42
        router.get('/42', passport.authenticate('42'));
        router.get('/42/redirect', passport.authenticate('42'), (req, res) => {
            res.redirect('/user');
        });

		return router;
	}

	static user() {
		let router = express.Router();

		console.log('user routes..');
		router.use('/', session)
		router.get('/getuser', getuser);
		router.post('/updatefullname', updateFullName);
		router.post('/updateemail', updateEmail);
		router.post('/updatepassword', updatePassword);
		router.post('/updateprofilepic', updateProfilePic);

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
