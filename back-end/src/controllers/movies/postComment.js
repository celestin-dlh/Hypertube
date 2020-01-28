import Comment from '../../models/comment.model';
import { MovieManager } from '../../services/MovieManager';

const postComment = function(req, res) {
    let { comment, imdb_id } = req.body;
    const { username } = req.user;
    req.body.username = username;
    req.body.comment = comment.trim();

    if (comment && comment.trim() !== "") {
        MovieManager.movieExists(imdb_id)
            .then(() => {
                const newComment = new Comment(req.body);
                newComment.save()
                .then(() => {
                    console.log('Commented')
                    res.send('commented')
                })
                .catch(() => {
                    res.sendStatus(400)
                })
            })
            .catch((err) =>{
                console.log(err)
                res.sendStatus(400)
            })
    } 
    else res.sendStatus(400)
}

export default postComment;