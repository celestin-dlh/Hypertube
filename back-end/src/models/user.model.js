const mongoose = require('mongoose');
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
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
    },
    language: {
        type: String,
        default: 'en'
    },
    profilepicture: {
        type: String,
        required: true,
    },
    reset_password_token: {
        type: String,
    }

}, {
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

export default User;