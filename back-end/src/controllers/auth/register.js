import Joi from '@hapi/joi';

/* Model */
import  Users from '../../models/register.model';


const register = function(req, res) {
    // console.log(req.body)
    const newUser = new Users(req.body);

    newUser.save()
        .then((response) => {
			res.status(200).send("Account created successfully")
        })
        .catch(err => console.log(err));
}

export default register;