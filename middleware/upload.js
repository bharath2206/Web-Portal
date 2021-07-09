const multer = require("multer");

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/views/uploads/");
    },
    limits: {
        files: 1,
        fileSize: 6 * 1024 * 1024
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;