import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FortyTwoStrategy from 'passport-42';
import GitHubStrategy from 'passport-github';

import User from '../../models/user.model';

require('dotenv').config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                // already have the user
                console.log('user is ', currentUser);
                done(null, currentUser);
            } else {
                // if not create user
                const newUser = new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    url_profilepicture: profile.photos[0].value,
                    email: profile.emails[0].value,
                })
                newUser.save(function (err, newUser) {
                    if (err) return done(err)
                        done(null, newUser);
                });
            }
        });
    })
);

passport.use(
    new GitHubStrategy({
        // options for github strategy
        clientID: 'fa6ccd3a75367c735599',
        clientSecret: 'b705c075c5ac0a2f727fd6243274998bc285efd3',
        callbackURL: "/auth/github/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        User.findOne({githubId: profile.id }, function (err, user) {
            if (user) {
                // already have the user
                console.log('user is ', user);
                done(null, user);
            } else {
                // if not create user
                const newUser = new User({
                    githubId: profile.id,
                    username: profile.username,
                    firstname: profile.username,
                    lastname: profile.username,
                    email: (profile.email || profile.id + "pleaseChangeYour@mail.com"),
                    url_profilepicture: profile.photos[0].value
                })
                newUser.save(function (err, newUser) {
                    if (err) return done(err)
                        done(null, newUser);
                });
            }
        });
    }
));

passport.use(
    new FortyTwoStrategy({
        // options for 42 strategy
        clientID: process.env.FT_ID,
        clientSecret: process.env.FT_SECRET,
        callbackURL: '/auth/42/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        User.findOne({ftId: profile.id}).then((currentUser) => {
            if (currentUser) {
                // already have the user
                console.log('user is ', currentUser);
                done(null, currentUser);
            } else {
                // if not create user
                const newUser = new User({
                    ftId: profile.id,
                    username: profile.displayName,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    email: profile.emails[0].value,
                    url_profilepicture: profile.photos[0].value
                })  
                newUser.save(function (err, newUser) {
                    if (err) return done(err)
                        done(null, newUser);
                });
            }
        });
    })
);

export default passport;