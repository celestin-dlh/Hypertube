import jwt from 'jsonwebtoken';
import passport from './passport';

const ftAuth = (req, res) => {
    passport.authenticate('42', {session: false}, (err, user, info) => {
    if (err || !user) {
        return res.redirect(process.env.URL + ':' + process.env.PORT_FRONT)
    }  
    req.login(user, {session: false}, (err) => {
        if (err) {
            res.send(err);
        }
        const username = user.username;
        const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
        res.redirect(process.env.URL + ':' + process.env.PORT_FRONT + '/jwt/' + accessToken)
    });
})(req, res);
};

export default ftAuth;