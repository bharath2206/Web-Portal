const fs=require("fs");
const imageModel=require("../Models/loadImages");

exports.get_funchal = (req,res) => {
    if(req.session.loggedin){
        console.log("samplee");
        imageModel.findAll({where:{pageName: "funchal",userId: req.session.email}}).then(comments => {
            //console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_lagos = (req,res) => {
    if(req.session.loggedin){
        //console.log("samplee");
        imageModel.findAll({where:{pageName: "lagos",userId: req.session.email}}).then(comments => {
            console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_lisbon = (req,res) => {
    if(req.session.loggedin){
        console.log("samplee");
        imageModel.findAll({where:{pageName: "lisbon",userId: req.session.email}}).then(comments => {
            //console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_ponta_delgada = (req,res) => {
    if(req.session.loggedin){
        console.log("samplee");
        imageModel.findAll({where:{pageName: "ponta_delgada",userId: req.session.email}}).then(comments => {
            //console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.get_portimao = (req,res) => {
    if(req.session.loggedin){
        //console.log("samplee");
        imageModel.findAll({where:{pageName: "portimao",userId: req.session.email}}).then(comments => {
            console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};


exports.get_porto = (req,res) => {
    if(req.session.loggedin){
        //console.log("samplee");
        imageModel.findAll({where:{pageName: "porto",userId: req.session.email}}).then(comments => {
            console.log(comments);
            res.status(200).json({
                message: "retrived successfully",
                comments: comments
            });
        }).catch((err) => {
            console.log(err.msg)
            res.status(500).json({
                message: "retriving failed!!!",
                comments: []
            });
        });
    }
};

exports.postImage = (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body.dest);
        const userid=req.session.email;
        console.log(userid);
        if (req.file === undefined) {
            return res.send(`You must select a file.`);
        }
        if (req.body.dest === undefined) {
            console.log("dest: Undefined");
        }


        imageModel.create({
            pageName: req.body.dest,
            image_type: req.file.mimetype,
            image: req.file.originalname,
            userId:userid,
            data: fs.readFileSync(
                __basedir + "/views/uploads/" + req.file.filename
            ),
        }).then((imageModel) => {
            fs.writeFileSync(
                __basedir + "/views/uploads/" + imageModel.name,
                imageModel.data
            );
            return res.redirect(('/'+req.body.dest));
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};
