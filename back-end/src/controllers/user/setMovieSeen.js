import { UserManager } from '../../services/UserManager';
import { MovieManager } from '../../services/MovieManager';

const setMovieSeen = function(req, res) {
    const { username } = req.user;
    const imdb_id = req.params.imdb_id;

    UserManager.setMovieSeen(imdb_id, username)
        .catch((err) => {
            console.log(err)
        })
        
    MovieManager.updateMovie(imdb_id)
        .catch((err) => {
            console.log(err)
        })
    res.send('set')
}

export default setMovieSeen;