import { UserManager } from '../../services/UserManager';

const getLastSeen = async function(req, res) {
    const { username } = req.user;
    let moviesWatched = [];
    let i = 0;

    await UserManager.getMoviesSeen(username)
        .then((res) => {
            moviesWatched = res;
        })
        .catch(console.log)

    res.send(moviesWatched)
}

export default getLastSeen;