const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3       
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3       
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },    
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
      type: String,
      required: true
    },

}, {
    timestamps: true,
});

const UserModel = mongoose.model('Users', userSchema);
export default UserModel;