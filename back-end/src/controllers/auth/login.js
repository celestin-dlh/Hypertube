import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/* Model */
import User from '../../models/user.model';

const login = function(req, res) {
    const { username, password } = req.body;
    if (username === "" || password === "")
        return res.status(400)
    User.findOne({ username: username },'password', function (err, user) {
        if (user === null) return res.send('Bad credentials');
        bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
                const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET)
                res.json({ error: 'success', accessToken })
            }
            else {
                return res.send('Bad credentials')
            }
       });                
    });
}

export default login;