import jwt from 'jsonwebtoken';

/* check if the JWT if valid */
const session = (req, res, next) => {
    const tokenHeader = req.get('Authorization');
    if (!tokenHeader) return res.status(401);

    jwt.verify(tokenHeader, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })

};

export default session;