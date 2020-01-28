const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    comment: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 80
    },
    imdb_id: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
});

const Comment = mongoose.model('comment', commentSchema);

export default Comment;