import multer from 'multer';

const uploadPic = function(req, res) {
	return new Promise((resolve, reject) => {
	    let fileupload = multer({ dest: 'public/profile_pic' }).single('avatar');
	    fileupload(req, res, function(err) {
	        if (!req.file) {
	            reject('no file');
	        } else {
				resolve(req.file);
			}
	    });
    })
};

export default uploadPic;