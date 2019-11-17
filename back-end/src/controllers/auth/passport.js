import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FortyTwoStrategy from 'passport-42';

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
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    profilepicture: profile.photos[0].value,
                    email: profile.emails[0].value,
                }).save().then((newUser) => {
                    console.log('new user created: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

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
                new User({
                    ftId: profile.id,
                    username: profile.displayName,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    email: profile.emails[0].value,
                    profilepicture: profile.photos[0].value
                }).save().then((newUser) => {
                    console.log('new user created: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

export default passport;