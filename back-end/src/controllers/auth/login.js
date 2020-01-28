import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/* Model */
import User from '../../models/user.model';

const login = function(req, res) {
    const { username, password } = req.body;

    if (username === "" || password === "")
        return res.status(400);
    User.findOne({ username: username }, 'password lang', function (err, user) {
        if (user) {        
            bcrypt.compare(password, user.password, function(err, result) {
                if (result) {
                    const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
                    return res.json({ accessToken , "lang": user.lang })
                }
                else {
                    return res.status(403).send('Bad credentials')
                }
            });    
        } else {
            return res.status(403).send('Bad credentials')
        }
            
    });
};

export default login;