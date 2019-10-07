import passport from 'passport';
import passportSetup from '../../../config/passport-setup';

/* Model */
import  Users from '../../../models/register.model';

const googleAuthorize = function(req, res) {
	res.redirect(passport.authenticate('google', {
	    scope: ['profile']
	}))
}

export default googleAuthorize;