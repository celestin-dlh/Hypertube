import express from 'express';
import session from './middlewares/session';

/* Auth */
import register from './controllers/auth/register';
import login from './controllers/auth/login';
import ftAuth from './controllers/auth/ftAuth';
import googleAuth from './controllers/auth/googleAuth';
import githubAuth from './controllers/auth/githubAuth';
import forgetpassword from './controllers/auth/forgot/forgetpassword';
import resetpassword from './controllers/auth/forgot/resetpassword';

/* Passport */
import passport from './controllers/auth/passport';

/* User */
import getuser from './controllers/user/getuser';
import updateInfos from './controllers/user/updateInfos';
import updateLanguage from './controllers/user/updateLanguage';
import updatePassword from './controllers/user/updatePassword';
import updateProfilePic from './controllers/user/updateProfilePic';
import setMovieSeen from './controllers/user/setMovieSeen';

/* Movie */
import searchMovie from './controllers/movies/searchMovies';
import searchActor from './controllers/movies/searchActor';
import searchGenre from './controllers/movies/searchGenre';
import torrentStream from './controllers/movies/torrentStream';
import popular from "./controllers/movies/popular";
import getLastSeen from "./controllers/movies/getLastSeen";
import infoMovie from "./controllers/movies/infoMovie";
import getSubtitle from './controllers/movies/getSubtitles';
import getTorrents from "./controllers/movies/getTorrents";
import postComment from './controllers/movies/postComment'
import getComments from './controllers/movies/getComments';

class Router {

	static auth() {
		let router = express.Router();
		router.post('/register', register);		    
		router.post('/login', login);
		router.post('/forgetpassword', forgetpassword);
		router.post('/resetpassword', resetpassword);
        router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}, null));
        router.get('/google/redirect', googleAuth);
        router.get('/42', passport.authenticate('42', '', null));
        router.get('/42/redirect', ftAuth);

		router.get('/github', passport.authenticate('github', '', null));
		router.get('/github/redirect', githubAuth);

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
        router.get('/stream/:imdb_id/:quality', torrentStream);
        router.get('/getsubtitles/:imdb_id/:lang', getSubtitle);
        router.use('/', session);
		//torrents
        router.get('/setMovieSeen/:imdb_id', setMovieSeen)
		router.get('/torrents/:imdb_id', getTorrents);
        //search
        router.get('/search/:query/:lang/:sortBy/:page', searchMovie);
        //popular
        router.get('/popular', popular);
        router.get('/getLastSeen', getLastSeen);
        //movie by actor
        router.get('/actor/:actorId/:lang', searchActor);
        //movie by genre
        router.get('/genre/:genre/:lang', searchGenre);
        //infos for 1 movie
        router.get('/infos/:id/:lang', infoMovie);
        //comment
        router.post('/postcomment', postComment);
        router.get('/getcomments/:imdb_id', getComments);
		//stream
        return router;
    }

	static getRouter() {
		let router = express.Router();
		console.log('starting all routes');
        router.post('/getuser', getuser);
		router.use('/auth/', Router.auth());
		router.use('/user/', Router.user());
		router.use('/movies/', Router.movies());
		return router;
	}
}

export default Router.getRouter;