import User from '../../models/user.model';

import { UserManager } from '../../services/UserManager';

const UpdateLanguage = function(req, res) {
    const { username } = req.user;
    const language = req.body.language;
    
	if (language !== "en" && language !== "fr" && language !== "es") {
        return res.status(400);
    }

    UserManager.updateLanguage(username, language)
        .then(() => {
            console.log('Language updated');
            res.status(200).send('Language updated')
        })
        .catch(() => {
            console.log('error somewhere');
            res.status(401).end()
        })
}

export default UpdateLanguage;