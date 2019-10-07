const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model');
require('dotenv').config();


passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.clientIDGoogle,
        clientSecret: process.env.clientSecretGoogle,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log(profile);
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                // already have the user
                console.log('user is ', currentUser);
            } else {
                // if not create user
                new User({
                    googleId: profile.id,
                    username: profile.displayName
                }).save().then((newUser) => {
                    console.log('new user created: ', newUser);
                });
            }
        });
    })
);