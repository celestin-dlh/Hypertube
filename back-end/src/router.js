import express from 'express';
import jwt from "jsonwebtoken";

import session from './middlewares/session';

/* Auth */
import register from './controllers/auth/register';
import login from './controllers/auth/login';
import forgetpassword from './controllers/auth/forgot/forgetpassword';
import resetpassword from './controllers/auth/forgot/resetpassword';

/* User */
import getuser from './controllers/user/getuser';
import updateInfos from './controllers/user/updateInfos';
import updateLanguage from './controllers/user/updateLanguage';
import updatePassword from './controllers/user/updatePassword';
import updateProfilePic from './controllers/user/updateProfilePic';

/* Passport */
import passport from './controllers/auth/passport';

/* Movie */
import searchMovies from './controllers/movies/searchMovies';
import searchActor from './controllers/movies/searchActor';
import streamMovies from './controllers/movies/streamMovies';
import infoMovie from "./controllers/movies/infoMovie";
import updateMovie from "./controllers/movies/updateMovie";
import ddlMovie from "./controllers/movies/ddlMovie";

class Router {

	static auth() {
		let router = express.Router();
		router.post('/register', register);		
		router.post('/login', login);
		router.post('/forgetpassword', forgetpassword);
		router.post('/resetpassword', resetpassword);

		// google
        router.get('/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        }));
        router.get('/google/redirect', function (req, res) {    passport.authenticate('google', {session: false}, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user   : user
                });
            }       req.login(user, {session: false}, (err) => {
                if (err) {
                    res.send(err);
                }
                const username = user.username;
                const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
                res.redirect(process.env.URL + ':' + process.env.PORT_FRONT + '/jwt/' + accessToken)
            });
        })(req, res);
        });

        // 42
        router.get('/42', passport.authenticate('42'));
        router.get('/42/redirect', function (req, res) {    passport.authenticate('42', {session: false}, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user   : user
                });
            }       req.login(user, {session: false}, (err) => {
                if (err) {
                    res.send(err);
                }
                const username = user.username;
                const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
                res.redirect(process.env.URL + ':' + process.env.PORT_FRONT + '/jwt/' + accessToken)
            });
        })(req, res);
        });


        return router;
	}

	static user() {
		let router = express.Router();
        router.use('/', session);
		router.get('/getuser', getuser);
		router.post('/updateinfos', updateInfos);
		router.post('/updatelanguage', updateLanguage);
		router.post('/updatepassword', updatePassword);
		router.post('/updateprofilepic', updateProfilePic);
		return router;
	}

    static movies() {
        let router = express.Router();

        router.get('/search/:title/', searchMovies);
        router.get('/actor/:actorId/', searchActor);

        router.get('/infos/:id/', infoMovie);

        router.get('/update/:id', updateMovie);

        router.get('/stream/', streamMovies);             // todo
        router.get('/ddl/', ddlMovie);                    // todo

        return router;
    }

	static getRouter() {
		let router = express.Router();

        router.post('/getuser', getuser);
		router.use('/auth/', Router.auth());
		router.use('/user/', Router.user());
		router.use('/movies/', Router.movies());

		return router;
	}
}

export default Router.getRouter;
