import multer from 'multer';

const uploadPic = function(req, res) {

	return new Promise((resolve, reject) => {
	    var fileupload = multer({ dest: 'uploads/' }).single('avatar');
	    fileupload(req, res, function(err) {
	        if(err) {
	            return reject(err);
	        }
	        resolve(req.file.filename);
	    });
    })
}

export default uploadPic