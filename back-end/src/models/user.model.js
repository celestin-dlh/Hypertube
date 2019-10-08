const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
    //    required: true,
        trim: true,
        minlength: 3       
    },
    lastname: {
        type: String,
    //    required: true,
        trim: true,
        minlength: 3       
    },
    username: {
        type: String,
    //    required: true,
        unique: true,
        trim: true,
        minlength: 3
    },    
    googleId: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    //    required: true,
        trim: true
    },
    password: {
      type: String,
    //  required: true
    },
    profilepicture: {
      type: String,
    },
    reset_password_token: {
        type: String,
    }

}, {
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

export default User;