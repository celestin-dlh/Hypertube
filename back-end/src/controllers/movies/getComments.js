import Comment from '../../models/comment.model';

const getComments = function(req, res) {
    const imdb_id = req.params.imdb_id;
    Comment.find({ imdb_id }, 'comment username', {
            limit: 15,
            sort: {
                createdAt: -1,
            }
        })
        .then((result) => {
            if (result.length > 0) {
                return res.send(result)
            } else {
                return res.send('')
            }
        })
        .catch((err) =>{
            console.log(err)
        })
};

export default getComments;