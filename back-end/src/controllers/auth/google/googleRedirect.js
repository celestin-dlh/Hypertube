import passport from 'passport';
import passportSetup from '../../../config/passport-setup';

import  Users from '../../../models/register.model';

const googleRedirect = function(req, res) {
	passport.authenticate('google', {
	    scope: ['profile']
	})
}

export default googleRedirect;