const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    googleId: {
        type: String,
    },
    ftId: {
        type: String,
    },
    githubId: {
      type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
    },
    lang: {
        type: String,
        default: 'en'
    },
    profilepicture: {
        type: String,
    },
    url_profilepicture: {
        type: String,
    },
    reset_password_token: {
        type: String,
    },
    moviesWatched:{
        type: Array,
    }

}, {
    timestamps: true,
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('user', userSchema);

export default User;